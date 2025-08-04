import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { env } from '@/lib/env.mjs';

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

export async function DELETE(request: NextRequest) {
  try {
    const { fileName, bucketName = 'docs' } = await request.json();

    if (!fileName) {
      return NextResponse.json({ 
        error: 'File name is required' 
      }, { status: 400 });
    }

    console.log(`Deleting file: ${fileName} from bucket: ${bucketName}`);

    // Delete the file from storage
    const { error } = await supabase.storage
      .from(bucketName)
      .remove([fileName]);

    if (error) {
      console.error('Error deleting file:', error);
      return NextResponse.json({ 
        error: `Failed to delete file: ${error.message}` 
      }, { status: 500 });
    }

    console.log(`Successfully deleted file: ${fileName}`);

    return NextResponse.json({ 
      success: true,
      message: `Successfully deleted file "${fileName}" from bucket "${bucketName}"`,
      fileName,
      bucketName
    });

  } catch (error) {
    console.error('Delete bucket file error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}