'use server';

import { createClient } from '@supabase/supabase-js';
import { createResource } from './resources';

// Initialize Supabase client for storage access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function ingestFromBucket(bucketName: string, filePath?: string) {
  try {
    console.log(`Starting ingestion from bucket: ${bucketName}`);
    
    // If a specific file path is provided, process just that file
    if (filePath) {
      return await processSingleFile(bucketName, filePath);
    }

    // Otherwise, list all files in the bucket and process them
    const { data: files, error } = await supabase.storage
      .from(bucketName)
      .list('', {
        limit: 100,
        offset: 0,
      });

    if (error) {
      console.error('Error listing files:', error);
      return `Error listing files: ${error.message}`;
    }

    if (!files || files.length === 0) {
      return 'No files found in bucket';
    }

    console.log(`Found ${files.length} files in bucket`);

    const results = [];
    for (const file of files) {
      if (file.name) {
        const result = await processSingleFile(bucketName, file.name);
        results.push({ file: file.name, result });
      }
    }

    return {
      message: `Processed ${files.length} files`,
      results
    };

  } catch (error) {
    console.error('Bucket ingestion error:', error);
    return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

async function processSingleFile(bucketName: string, filePath: string) {
  try {
    console.log(`Processing file: ${filePath}`);

    // Download the file from storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .download(filePath);

    if (error) {
      console.error(`Error downloading ${filePath}:`, error);
      return `Error downloading ${filePath}: ${error.message}`;
    }

    if (!data) {
      return `No data found for ${filePath}`;
    }

    // Convert blob to text
    const content = await data.text();
    
    if (!content.trim()) {
      return `File ${filePath} is empty`;
    }

    // Determine file type from extension
    const fileExtension = filePath.toLowerCase().substring(filePath.lastIndexOf('.'));
    let fileType = 'text/plain';
    
    if (fileExtension === '.md') {
      fileType = 'text/markdown';
    } else if (fileExtension === '.json') {
      fileType = 'application/json';
    }

    // Create resource with the content
    const result = await createResource({
      content,
      fileName: filePath,
      fileType,
    });

    console.log(`Successfully processed ${filePath}`);
    return result;

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return `Error processing ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
} 