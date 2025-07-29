import { NextResponse } from 'next/server';
import { generateChunksWithWindow, ChunkWithWindow } from '@/lib/ai/embedding';

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    
    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const chunks = generateChunksWithWindow(content, 3);
    
    return NextResponse.json({
      success: true,
      chunks: chunks.map((chunk: ChunkWithWindow) => ({
        content: chunk.content,
        originalText: chunk.originalText,
        window: chunk.window,
        chunkIndex: chunk.chunkIndex
      }))
    });

  } catch (error) {
    console.error('Test chunking error:', error);
    return NextResponse.json({
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}`
    }, { status: 500 });
  }
} 