import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { embeddings } from '@/lib/db/schema/embeddings';
import { resources } from '@/lib/db/schema/resources';

export async function POST() {
  try {
    console.log('Clearing existing embeddings and resources...');
    
    // Clear embeddings first (due to foreign key constraint)
    await db.delete(embeddings);
    console.log('Cleared embeddings table');
    
    // Clear resources
    await db.delete(resources);
    console.log('Cleared resources table');
    
    return NextResponse.json({ 
      success: true, 
      message: 'All embeddings and resources cleared successfully' 
    });
  } catch (error) {
    console.error('Error clearing data:', error);
    return NextResponse.json({ 
      error: `Failed to clear data: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
} 