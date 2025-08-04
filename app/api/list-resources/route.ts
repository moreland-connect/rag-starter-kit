import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { resources } from '@/lib/db/schema/resources';
import { embeddings } from '@/lib/db/schema/embeddings';
import { sql, eq, count } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching all resources from database');

    // Get all resources first
    const allResources = await db
      .select()
      .from(resources)
      .orderBy(resources.created_at);

    console.log(`Found ${allResources.length} resources in database`);

    // Get embedding counts for each resource
    const formattedResources = await Promise.all(
      allResources.map(async (resource) => {
        // Count embeddings for this resource
        const embeddingCount = await db
          .select({ count: count() })
          .from(embeddings)
          .where(eq(embeddings.resource_id, resource.id));

        const chunkCount = embeddingCount[0]?.count || 0;

        return {
          id: resource.id,
          fileName: resource.file_name,
          fileType: resource.file_type,
          fileSize: resource.file_size,
          chunkCount: chunkCount,
          storagePath: resource.storage_path,
          createdAt: resource.created_at,
          isIngested: chunkCount > 0
        };
      })
    );

    return NextResponse.json({ 
      resources: formattedResources,
      count: formattedResources.length
    });

  } catch (error) {
    console.error('List resources error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}