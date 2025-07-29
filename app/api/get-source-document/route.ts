import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { env } from '@/lib/env.mjs';

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request: NextRequest) {
  try {
    const { fileName } = await request.json();
    
    if (!fileName) {
      return NextResponse.json({ error: 'File name is required' }, { status: 400 });
    }

    console.log(`Fetching document from bucket: ${fileName}`);

    // Download the file from the Supabase bucket
    const { data, error } = await supabase.storage
      .from('docs')
      .download(fileName);

    if (error) {
      console.error('Error downloading file:', error);
      return NextResponse.json({
        error: `Failed to download file: ${error.message}`
      }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({
        error: 'File not found in bucket'
      }, { status: 404 });
    }

    // Read the file content
    const content = await data.text();
    
    // Get file metadata
    const { data: fileInfo } = await supabase.storage
      .from('docs')
      .list('', {
        search: fileName
      });

    const fileMetadata = fileInfo?.find(file => file.name === fileName);

    return NextResponse.json({
      success: true,
      content: content,
      fileName: fileName,
      fileSize: fileMetadata?.metadata?.size || data.size,
      lastModified: fileMetadata?.updated_at,
      contentType: data.type || 'text/plain'
    });

  } catch (error) {
    console.error('Get source document error:', error);
    return NextResponse.json({
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}`
    }, { status: 500 });
  }
} 