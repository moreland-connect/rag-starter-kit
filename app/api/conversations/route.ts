import { NextRequest, NextResponse } from 'next/server';
import { db, conversations, insertConversationSchema, updateConversationSchema } from '@/lib/db';
import { desc, eq, and } from 'drizzle-orm';
import { z } from 'zod';

// GET /api/conversations - List user conversations
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    const includeArchived = searchParams.get('includeArchived') === 'true';

    console.log('Fetching conversations:', { userId, limit, offset, includeArchived });

    // Build query conditions
    const conditions = [];
    if (userId) {
      conditions.push(eq(conversations.user_id, userId));
    }
    if (!includeArchived) {
      conditions.push(eq(conversations.is_archived, false));
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    // Fetch conversations with pagination
    const conversationList = await db
      .select()
      .from(conversations)
      .where(whereClause)
      .orderBy(desc(conversations.updated_at))
      .limit(limit)
      .offset(offset);

    console.log(`Found ${conversationList.length} conversations`);

    return NextResponse.json({
      success: true,
      conversations: conversationList,
      count: conversationList.length,
      hasMore: conversationList.length === limit
    });

  } catch (error) {
    console.error('List conversations error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to fetch conversations: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// POST /api/conversations - Create new conversation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Creating new conversation:', body);

    // Validate request body
    const validatedData = insertConversationSchema.parse(body);

    // Create conversation
    const [newConversation] = await db
      .insert(conversations)
      .values(validatedData)
      .returning();

    console.log('Created conversation:', newConversation.id);

    return NextResponse.json({
      success: true,
      conversation: newConversation
    });

  } catch (error) {
    console.error('Create conversation error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid conversation data',
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: `Failed to create conversation: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}