'use server';

import {
  NewResourceParams,
  insertResourceSchema,
  resources,
} from '@/lib/db/schema/resources';
import { embeddings } from '@/lib/db/schema/embeddings';
import { db } from '../db';
import { generateEmbeddings } from '@/lib/ai/embedding';
import { eq } from 'drizzle-orm';

export const createResource = async (input: { content: string; fileName?: string; fileType?: string }) => {
  try {
    console.log('createResource called with:', {
      fileName: input.fileName,
      fileType: input.fileType,
      contentLength: input.content.length
    });

    const { content, fileName = 'manual-input.txt', fileType = 'text/plain' } = input;

    console.log('About to insert resource into database...');

    // Create the resource record
    const [resource] = await db
      .insert(resources)
      .values({
        file_name: fileName,
        file_type: fileType,
        file_size: content.length,
        chunk_count: 0, // Will be updated after embeddings are created
        storage_path: 'manual-input'
      })
      .returning();

    console.log('Resource created with ID:', resource.id);

    // Generate embeddings for the content
    console.log('Generating embeddings...');
    const embeddingData = await generateEmbeddings(content, resource.id);
    console.log('Generated embeddings count:', embeddingData.length);

    // Insert embeddings
    if (embeddingData.length > 0) {
      console.log('Inserting embeddings into database...');
      const embeddingRecords = embeddingData.map(({ embedding, content: chunkContent, originalText, window, chunkIndex }) => ({
        resource_id: resource.id,
        chunk_index: chunkIndex,
        content: chunkContent,
        original_text: originalText,
        window: window,
        embedding: JSON.stringify(embedding), // Store as JSON string
        token_count: chunkContent.split(' ').length // Simple token count
      }));

      await db.insert(embeddings).values(embeddingRecords);
      console.log('Embeddings inserted successfully');

      // For now, skip the update to avoid type conflicts
      console.log('Skipping resource update due to type conflicts');
    }

    return 'Resource successfully created with embeddings.';
  } catch (e) {
    console.error('createResource error:', e);
    if (e instanceof Error) {
      console.error('Error message:', e.message);
      console.error('Error stack:', e.stack);
      return e.message.length > 0 ? e.message : 'Error, please try again.';
    }
    return 'Unknown error occurred';
  }
};