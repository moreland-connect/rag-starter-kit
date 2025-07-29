import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { resources } from '@/lib/db/schema/resources';

export async function GET() {
  try {
    // Simple test query
    const result = await db.select().from(resources).limit(1);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      result: result.length
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({ 
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
} 