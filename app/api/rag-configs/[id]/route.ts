import { NextRequest, NextResponse } from 'next/server';
import { db, ragConfigurations, updateRagConfigurationSchema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

interface RouteParams {
  params: { id: string }
}

// GET /api/rag-configs/[id] - Get specific RAG configuration
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const configId = parseInt(params.id);
    
    if (isNaN(configId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid configuration ID' },
        { status: 400 }
      );
    }

    console.log('Fetching RAG configuration:', configId);

    const [config] = await db
      .select()
      .from(ragConfigurations)
      .where(eq(ragConfigurations.id, configId))
      .limit(1);

    if (!config) {
      return NextResponse.json(
        { success: false, error: 'Configuration not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      configuration: config
    });

  } catch (error) {
    console.error('Get RAG configuration error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to fetch configuration: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// PUT /api/rag-configs/[id] - Update RAG configuration
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const configId = parseInt(params.id);
    
    if (isNaN(configId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid configuration ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log('Updating RAG configuration:', configId, body);

    // Validate request body
    const validatedData = updateRagConfigurationSchema.parse(body);

    // If this is set as default, unset other defaults
    if (validatedData.is_default) {
      await db
        .update(ragConfigurations)
        .set({ is_default: false })
        .where(eq(ragConfigurations.is_default, true));
    }

    // Add updated_at timestamp
    const updateData = {
      ...validatedData,
      updated_at: new Date()
    };

    // Update configuration
    const [updatedConfig] = await db
      .update(ragConfigurations)
      .set(updateData)
      .where(eq(ragConfigurations.id, configId))
      .returning();

    if (!updatedConfig) {
      return NextResponse.json(
        { success: false, error: 'Configuration not found' },
        { status: 404 }
      );
    }

    console.log('Updated RAG configuration:', configId);

    return NextResponse.json({
      success: true,
      configuration: updatedConfig
    });

  } catch (error) {
    console.error('Update RAG configuration error:', error);
    
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
        error: `Failed to update configuration: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// DELETE /api/rag-configs/[id] - Deactivate RAG configuration (soft delete)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const configId = parseInt(params.id);
    
    if (isNaN(configId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid configuration ID' },
        { status: 400 }
      );
    }

    console.log('Deactivating RAG configuration:', configId);

    // Check if this is the default configuration
    const [config] = await db
      .select()
      .from(ragConfigurations)
      .where(eq(ragConfigurations.id, configId))
      .limit(1);

    if (!config) {
      return NextResponse.json(
        { success: false, error: 'Configuration not found' },
        { status: 404 }
      );
    }

    if (config.is_default) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete default configuration' },
        { status: 400 }
      );
    }

    // Deactivate configuration (soft delete)
    const [deactivatedConfig] = await db
      .update(ragConfigurations)
      .set({ 
        is_active: false,
        updated_at: new Date()
      })
      .where(eq(ragConfigurations.id, configId))
      .returning();

    console.log('Deactivated RAG configuration:', configId);

    return NextResponse.json({
      success: true,
      message: 'Configuration deactivated successfully'
    });

  } catch (error) {
    console.error('Deactivate RAG configuration error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to deactivate configuration: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}