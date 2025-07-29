import { NextRequest, NextResponse } from 'next/server';
import { createResource } from '@/lib/actions/resources';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 });
    }

    // Check file type - only allow markdown and JSON
    const allowedTypes = ['text/plain', 'text/markdown', 'application/json'];
    const allowedExtensions = ['.md', '.json', '.txt'];
    
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    const isValidType = allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);
    
    if (!isValidType) {
      return NextResponse.json({ 
        error: 'Unsupported file type. Please upload .md, .json, or .txt files only.' 
      }, { status: 400 });
    }

    // Extract text content from file
    let content = '';
    
    try {
      content = await file.text();
    } catch (error) {
      return NextResponse.json({ error: 'Failed to read file content' }, { status: 400 });
    }

    if (!content.trim()) {
      return NextResponse.json({ error: 'File appears to be empty' }, { status: 400 });
    }

    // For JSON files, we can optionally format them for better readability
    if (fileExtension === '.json') {
      try {
        const jsonObj = JSON.parse(content);
        content = JSON.stringify(jsonObj, null, 2); // Pretty print JSON
      } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON file' }, { status: 400 });
      }
    }

    console.log('About to create resource with content length:', content.length);

    // Create resource with the extracted content
    const result = await createResource({
      content,
      fileName: file.name,
      fileType: file.type || 'text/plain',
    });

    console.log('Create resource result:', result);

    if (typeof result === 'string' && result.includes('successfully')) {
      return NextResponse.json({ 
        success: true, 
        message: result,
        fileName: file.name,
        contentLength: content.length,
        fileType: file.type || fileExtension
      });
    } else {
      return NextResponse.json({ 
        error: result || 'Failed to process file' 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
} 