// Note: This file requires the AI SDK packages to be installed
// Run: pnpm add ai @ai-sdk/openai

import { embed, embedMany } from 'ai';
import { openai } from '@ai-sdk/openai';
import { db } from '../db';
import { embeddings } from '../db/schema/embeddings';
import { env } from '../env.mjs';
import postgres from 'postgres';
import { resources } from '../db/schema/resources';
import { sql as drizzleSql } from 'drizzle-orm';

const embeddingModel = openai.embedding('text-embedding-ada-002');

// Create direct postgres client for vector operations
const sql = postgres(env.DATABASE_URL, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
  ssl: 'require',
});

export interface ChunkWithWindow {
  content: string;
  originalText: string;
  window: string;
  chunkIndex: number;
}

const cleanText = (text: string): string => {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\t/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const isFormattingLine = (line: string): boolean => {
  const trimmed = line.trim();
  return (
    !trimmed ||
    trimmed.length < 5 ||
    trimmed.startsWith('---') ||
    trimmed.startsWith('API Type:') ||
    trimmed.startsWith('Kit Class') ||
    trimmed.startsWith('Try It') ||
    trimmed.startsWith('General Information') ||
    trimmed.startsWith('Supported User Types:') ||
    trimmed.startsWith('Content Length:') ||
    trimmed.startsWith('Extracted:') ||
    trimmed.startsWith('Content:') ||
    trimmed.startsWith('```') ||
    trimmed.startsWith('"') && trimmed.endsWith('",') ||
    trimmed.startsWith('"') && trimmed.endsWith('"') ||
    /^[0-9\s]+$/.test(trimmed) || // Just numbers and spaces
    /^[^\w\s]+$/.test(trimmed) // Just punctuation
  );
};

const extractSentences = (text: string): string[] => {
  // Split by sentence endings, but be smart about it
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 20 && s.length < 1000) // Filter out very short or very long sentences
    .filter(s => !isFormattingLine(s));
  
  return sentences;
};

export const generateChunksWithWindow = (input: string, windowSize: number = 3): ChunkWithWindow[] => {
  const chunks: ChunkWithWindow[] = [];
  
  // Handle JSON content
  if (input.trim().startsWith('{') || input.trim().startsWith('[')) {
    try {
      const jsonObj = JSON.parse(input);
      const extractTextFromJson = (obj: any): string[] => {
        const texts: string[] = [];
        const extract = (item: any, path: string = '') => {
          if (typeof item === 'string' && item.length > 50) {
            // Only include meaningful text
            if (!path.toLowerCase().includes('id') && 
                !path.toLowerCase().includes('key') && 
                !path.toLowerCase().includes('type') &&
                !path.toLowerCase().includes('length') &&
                !path.toLowerCase().includes('extracted')) {
              texts.push(item);
            }
          } else if (typeof item === 'object' && item !== null) {
            for (const [key, value] of Object.entries(item)) {
              extract(value, `${path}.${key}`);
            }
          }
        };
        extract(obj);
        return texts;
      };
      
      const jsonTexts = extractTextFromJson(jsonObj);
      const allText = jsonTexts.join(' ');
      const sentences = extractSentences(allText);
      
      for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        const start = Math.max(0, i - windowSize);
        const end = Math.min(sentences.length, i + windowSize + 1);
        const window = sentences.slice(start, end).join(' ');
        
        chunks.push({
          content: sentence,
          originalText: sentence,
          window: window,
          chunkIndex: i
        });
      }
      
      return chunks;
    } catch (e) {
      // If JSON parsing fails, treat as regular text
    }
  }
  
  // For regular text (markdown, etc.)
  const cleanedText = cleanText(input);
  
  // Remove markdown formatting but keep the content
  const textWithoutMarkdown = cleanedText
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove code
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/---+/g, '') // Remove horizontal rules
    .replace(/\n\s*\n/g, '\n') // Remove extra newlines
    .trim();
  
  const sentences = extractSentences(textWithoutMarkdown);
  
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    const start = Math.max(0, i - windowSize);
    const end = Math.min(sentences.length, i + windowSize + 1);
    const window = sentences.slice(start, end).join(' ');
    
    chunks.push({
      content: sentence,
      originalText: sentence,
      window: window,
      chunkIndex: i
    });
  }
  
  return chunks.filter(chunk => chunk.content.length > 30 && chunk.content.length < 800);
};

export const generateEmbeddings = async (
  value: string,
  resourceId: number,
): Promise<Array<{ embedding: number[]; content: string; originalText: string; window: string; chunkIndex: number }>> => {
  const chunksWithWindow = generateChunksWithWindow(value);
  
  if (chunksWithWindow.length === 0) {
    console.log('No meaningful chunks generated from content');
    return [];
  }
  
  console.log(`Generated ${chunksWithWindow.length} chunks with windows`);
  
  // Generate embeddings for the original sentences (not the windows)
  const { embeddings: embeddingVectors } = await embedMany({
    model: embeddingModel,
    values: chunksWithWindow.map(chunk => chunk.content),
  });
  
  return embeddingVectors.map((e, i) => ({ 
    content: chunksWithWindow[i].content,
    originalText: chunksWithWindow[i].originalText,
    window: chunksWithWindow[i].window,
    embedding: e,
    chunkIndex: chunksWithWindow[i].chunkIndex
  }));
};

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll('\\n', ' ');
  const { embedding } = await embed({
    model: embeddingModel,
    value: input,
  });
  return embedding;
};

export const findRelevantContent = async (userQuery: string) => {
  try {
    console.log('Generating embedding for query:', userQuery);
    const userQueryEmbedded = await generateEmbedding(userQuery);
    console.log('Query embedding generated, length:', userQueryEmbedded.length);

    // Use direct postgres client for vector similarity search with source metadata
    const results = await sql`
      SELECT 
        e.content,
        e.window,
        e.original_text,
        e.chunk_index,
        e.resource_id,
        r.file_name,
        r.file_type,
        r.created_at,
        1 - (${JSON.stringify(userQueryEmbedded)}::vector <=> e.embedding::vector) as similarity
      FROM embeddings e
      JOIN resources r ON e.resource_id = r.id
      ORDER BY e.embedding::vector <=> ${JSON.stringify(userQueryEmbedded)}::vector
      LIMIT 6
    `;

    console.log('Vector similarity search results:', results.length, 'chunks');
    console.log('Top results:', results.slice(0, 3).map((r: any) => ({
      similarity: r.similarity?.toFixed(3) || 'N/A',
      originalText: String(r.original_text).substring(0, 100) + '...',
      windowLength: String(r.window).length,
      fileName: r.file_name
    })));

    // Return the window content with source metadata
    return results.map((result: any) => ({
      content: String(result.window), // Use the window for context
      originalText: String(result.original_text),
      similarity: result.similarity || 0,
      chunkIndex: result.chunk_index,
      fileName: result.file_name,
      fileType: result.file_type,
      createdAt: result.created_at,
      sourceId: result.resource_id
    }));

  } catch (error) {
    console.error('Error in findRelevantContent:', error);
    
    // Fallback to text-based search if vector search fails
    console.log('Falling back to text-based search...');
    const allContent = await db
      .select({ 
        content: embeddings.content,
        window: embeddings.window,
        original_text: embeddings.original_text,
        chunk_index: embeddings.chunk_index,
        resource_id: embeddings.resource_id
      })
      .from(embeddings)
      .limit(100);

    // Get resource metadata for all chunks
    const resourceIds = [...new Set(allContent.map(c => c.resource_id))];
    
    // Use direct SQL for resource metadata to avoid Drizzle type conflicts
    const resourceMetadata = await sql`
      SELECT id, file_name, file_type, created_at
      FROM resources 
      WHERE id = ANY(${resourceIds})
    `;

    const resourceMap = new Map(resourceMetadata.map((r: any) => [r.id, r]));

    const rankedResults = allContent
      .map(result => {
        const content = String(result.content);
        const window = String(result.window);
        const queryLower = userQuery.toLowerCase();
        const contentLower = content.toLowerCase();
        const windowLower = window.toLowerCase();
        
        const queryWords = queryLower.split(/\s+/).filter(word => word.length > 2);
        const contentWords = contentLower.split(/\s+/);
        const windowWords = windowLower.split(/\s+/);
        
        let score = 0;
        
        // Score based on content
        const contentMatches = queryWords.filter(word => 
          contentWords.some(contentWord => contentWord.includes(word))
        );
        score += (contentMatches.length / queryWords.length) * 0.4;
        
        // Score based on window (broader context)
        const windowMatches = queryWords.filter(word => 
          windowWords.some(windowWord => windowWord.includes(word))
        );
        score += (windowMatches.length / queryWords.length) * 0.6;
        
        // Bonus for longer, more meaningful content
        if (window.length > 200) score += 0.1;
        
        const resource = resourceMap.get(result.resource_id);
        
        return {
          content: window, // Return window for better context
          originalText: String(result.original_text),
          similarity: Math.min(score, 1.0),
          chunkIndex: result.chunk_index,
          fileName: resource?.file_name || 'Unknown',
          fileType: resource?.file_type || 'Unknown',
          createdAt: resource?.created_at,
          sourceId: result.resource_id
        };
      })
      .filter(result => result.similarity > 0.1)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 6);

    return rankedResults;
  }
}; 