import { NextResponse } from 'next/server';

// Import the global chunks from chat route
let currentChunks: any[] = [];

// This will be called from the chat API to update chunks
export function updateCurrentChunks(chunks: any[]) {
  currentChunks = chunks;
}

export async function GET() {
  return NextResponse.json({
    success: true,
    chunks: currentChunks
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    chunks: currentChunks
  });
} 