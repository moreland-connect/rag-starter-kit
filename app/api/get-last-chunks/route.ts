import { NextRequest, NextResponse } from 'next/server';
import { findRelevantContent } from '@/lib/ai/embedding';

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();
    
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Get the chunks that would be retrieved for this query
    const chunks = await findRelevantContent(query);
    
    return NextResponse.json({
      success: true,
      chunks: chunks
    });

  } catch (error) {
    console.error('Get last chunks error:', error);
    return NextResponse.json({
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}`
    }, { status: 500 });
  }
} 