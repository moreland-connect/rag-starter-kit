import { NextRequest, NextResponse } from 'next/server';
import { getCurrentChunks } from '@/lib/shared/current-chunks';

export async function GET(request: NextRequest) {
  try {
    const chunks = getCurrentChunks();
    
    return NextResponse.json({
      success: true,
      chunks: chunks,
      count: chunks.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Debug chunks error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to get debug chunks',
        chunks: [],
        count: 0
      },
      { status: 500 }
    );
  }
}