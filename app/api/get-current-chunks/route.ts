import { NextResponse } from 'next/server';
import { getCurrentChunks } from '@/lib/shared/current-chunks';

export async function GET() {
  return NextResponse.json({
    success: true,
    chunks: getCurrentChunks()
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    chunks: getCurrentChunks()
  });
} 