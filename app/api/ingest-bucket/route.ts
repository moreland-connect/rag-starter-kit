import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createResource } from '@/lib/actions/resources';
import { env } from '@/lib/env.mjs';

// Initialize Supabase client for storage access
const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request: NextRequest) {
  try {
    const { bucketName = 'docs' } = await request.json();

    console.log(`Starting ingestion from bucket: ${bucketName}`);
    
    // List all files in the bucket
    const { data: files, error } = await supabase.storage
      .from(bucketName)
      .list('', {
        limit: 100,
        offset: 0,
      });

    if (error) {
      console.error('Error listing files:', error);
      return NextResponse.json({ 
        error: `Error listing files: ${error.message}` 
      }, { status: 500 });
    }

    if (!files || files.length === 0) {
      return NextResponse.json({ 
        message: 'No files found in bucket',
        files: []
      });
    }

    console.log(`Found ${files.length} files in bucket`);

    const results = [];
    for (const file of files) {
      if (file.name) {
        try {
          console.log(`Processing file: ${file.name}`);

          // Download the file from storage
          const { data, error: downloadError } = await supabase.storage
            .from(bucketName)
            .download(file.name);

          if (downloadError) {
            console.error(`Error downloading ${file.name}:`, downloadError);
            results.push({ 
              file: file.name, 
              success: false, 
              error: downloadError.message 
            });
            continue;
          }

          if (!data) {
            results.push({ 
              file: file.name, 
              success: false, 
              error: 'No data found' 
            });
            continue;
          }

          // Convert blob to text
          const content = await data.text();
          
          if (!content.trim()) {
            results.push({ 
              file: file.name, 
              success: false, 
              error: 'File is empty' 
            });
            continue;
          }

          // Determine file type from extension
          const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
          let fileType = 'text/plain';
          
          if (fileExtension === '.md') {
            fileType = 'text/markdown';
          } else if (fileExtension === '.json') {
            fileType = 'application/json';
          }

          // Create resource with the content
          const result = await createResource({
            content,
            fileName: file.name,
            fileType,
          });

          if (typeof result === 'string' && result.includes('successfully')) {
            results.push({ 
              file: file.name, 
              success: true, 
              message: result 
            });
            console.log(`Successfully processed ${file.name}`);
          } else {
            results.push({ 
              file: file.name, 
              success: false, 
              error: result || 'Failed to process' 
            });
          }

        } catch (error) {
          console.error(`Error processing ${file.name}:`, error);
          results.push({ 
            file: file.name, 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error' 
          });
        }
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    return NextResponse.json({ 
      message: `Processed ${files.length} files (${successCount} successful, ${failureCount} failed)`,
      results,
      summary: {
        total: files.length,
        successful: successCount,
        failed: failureCount
      }
    });

  } catch (error) {
    console.error('Bucket ingestion error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
} 