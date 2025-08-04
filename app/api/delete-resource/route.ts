import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { resources } from '@/lib/db/schema/resources';
import { embeddings } from '@/lib/db/schema/embeddings';
import { eq } from 'drizzle-orm';

export async function DELETE(request: NextRequest) {
  try {
    const { resourceId } = await request.json();

    if (!resourceId) {
      return NextResponse.json({ 
        error: 'Resource ID is required' 
      }, { status: 400 });
    }

    console.log(`Deleting resource: ${resourceId}`);

    // First, delete all embeddings for this resource
    const deletedEmbeddings = await db
      .delete(embeddings)
      .where(eq(embeddings.resource_id, resourceId))
      .returning();

    console.log(`Deleted ${deletedEmbeddings.length} embeddings`);

    // Then, delete the resource itself
    const deletedResource = await db
      .delete(resources)
      .where(eq(resources.id, resourceId))
      .returning();

    if (deletedResource.length === 0) {
      return NextResponse.json({ 
        error: 'Resource not found' 
      }, { status: 404 });
    }

    console.log(`Successfully deleted resource: ${deletedResource[0].file_name}`);

    return NextResponse.json({ 
      success: true,
      message: `Successfully deleted resource "${deletedResource[0].file_name}" and ${deletedEmbeddings.length} associated embeddings`,
      deletedResource: deletedResource[0],
      deletedEmbeddingsCount: deletedEmbeddings.length
    });

  } catch (error) {
    console.error('Delete resource error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}