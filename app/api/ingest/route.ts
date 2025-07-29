import { NextRequest, NextResponse } from 'next/server';
import { createResource } from '@/lib/actions/resources';

export async function POST(request: NextRequest) {
  try {
    const { bucketName, filePath, content, fileName } = await request.json();

    if (!content || !fileName) {
      return NextResponse.json({ 
        error: 'Missing required fields: content and fileName' 
      }, { status: 400 });
    }

    console.log(`Processing file: ${fileName} from bucket: ${bucketName || 'manual'}`);

    // Determine file type from extension
    const fileExtension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
    let fileType = 'text/plain';
    
    if (fileExtension === '.md') {
      fileType = 'text/markdown';
    } else if (fileExtension === '.json') {
      fileType = 'application/json';
    }

    // Create resource with the content
    const result = await createResource({
      content,
      fileName,
      fileType,
    });

    if (typeof result === 'string' && result.includes('successfully')) {
      return NextResponse.json({ 
        success: true, 
        message: result,
        fileName,
        contentLength: content.length
      });
    } else {
      return NextResponse.json({ 
        error: result || 'Failed to process file' 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Ingest error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
} 