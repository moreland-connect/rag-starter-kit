import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { env } from '@/lib/env.mjs';

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET(request: NextRequest) {
  try {
    const bucketName = request.nextUrl.searchParams.get('bucket') || 'docs';

    console.log(`Listing files from bucket: ${bucketName}`);
    
    // List all files in the bucket with detailed metadata
    const { data: files, error } = await supabase.storage
      .from(bucketName)
      .list('', {
        limit: 1000,
        offset: 0,
        sortBy: { column: 'updated_at', order: 'desc' }
      });

    if (error) {
      console.error('Error listing files:', error);
      return NextResponse.json({ 
        error: `Error listing files: ${error.message}` 
      }, { status: 500 });
    }

    if (!files || files.length === 0) {
      return NextResponse.json({ 
        files: [],
        count: 0
      });
    }

    console.log(`Found ${files.length} files in bucket`);

    // Format the file information
    const fileList = files
      .filter(file => file.name && !file.name.endsWith('/')) // Filter out folders
      .map(file => ({
        name: file.name,
        size: file.metadata?.size || 0,
        lastModified: file.updated_at,
        createdAt: file.created_at,
        contentType: file.metadata?.mimetype || 'unknown',
        bucket: bucketName
      }));

    return NextResponse.json({ 
      files: fileList,
      count: fileList.length,
      bucket: bucketName
    });

  } catch (error) {
    console.error('List bucket files error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}