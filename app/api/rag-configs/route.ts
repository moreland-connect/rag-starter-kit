import { NextRequest, NextResponse } from 'next/server';
import { db, ragConfigurations, insertRagConfigurationSchema } from '@/lib/db';
import { desc, eq } from 'drizzle-orm';
import { z } from 'zod';

// GET /api/rag-configs - List all RAG configurations
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const activeOnly = searchParams.get('activeOnly') === 'true';

    console.log('Fetching RAG configurations:', { activeOnly });

    const configs = await db
      .select()
      .from(ragConfigurations)
      .where(activeOnly ? eq(ragConfigurations.is_active, true) : undefined)
      .orderBy(desc(ragConfigurations.is_default), desc(ragConfigurations.created_at));

    console.log(`Found ${configs.length} RAG configurations`);

    return NextResponse.json({
      success: true,
      configurations: configs,
      count: configs.length
    });

  } catch (error) {
    console.error('List RAG configurations error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to fetch configurations: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// POST /api/rag-configs - Create new RAG configuration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Creating new RAG configuration:', body);

    // Validate request body
    const validatedData = insertRagConfigurationSchema.parse(body);

    // If this is set as default, unset other defaults
    if (validatedData.is_default) {
      await db
        .update(ragConfigurations)
        .set({ is_default: false })
        .where(eq(ragConfigurations.is_default, true));
    }

    // Create configuration
    const [newConfig] = await db
      .insert(ragConfigurations)
      .values(validatedData)
      .returning();

    console.log('Created RAG configuration:', newConfig.id);

    return NextResponse.json({
      success: true,
      configuration: newConfig
    });

  } catch (error) {
    console.error('Create RAG configuration error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid configuration data',
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: `Failed to create configuration: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}