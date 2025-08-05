import { NextRequest, NextResponse } from 'next/server';
import { db, conversations, messages, messageChunks, embeddings, updateConversationSchema } from '@/lib/db';
import { eq, desc } from 'drizzle-orm';
import { z } from 'zod';

interface RouteParams {
  params: { id: string }
}

// GET /api/conversations/[id] - Get conversation with messages
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const conversationId = parseInt(params.id);
    
    if (isNaN(conversationId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid conversation ID' },
        { status: 400 }
      );
    }

    console.log('Fetching conversation:', conversationId);

    // Fetch conversation details
    const [conversation] = await db
      .select()
      .from(conversations)
      .where(eq(conversations.id, conversationId))
      .limit(1);

    if (!conversation) {
      return NextResponse.json(
        { success: false, error: 'Conversation not found' },
        { status: 404 }
      );
    }

    // Fetch messages for this conversation
    const conversationMessages = await db
      .select()
      .from(messages)
      .where(eq(messages.conversation_id, conversationId))
      .orderBy(messages.sequence_number);

    // Fetch chunks for each message
    const messagesWithChunks = await Promise.all(
      conversationMessages.map(async (message) => {
        const chunks = await db
          .select({
            id: messageChunks.id,
            embedding_id: messageChunks.embedding_id,
            similarity_score: messageChunks.similarity_score,
            chunk_rank: messageChunks.chunk_rank,
            content: embeddings.content,
            original_text: embeddings.original_text,
            window: embeddings.window,
            resource_id: embeddings.resource_id,
            chunk_index: embeddings.chunk_index
          })
          .from(messageChunks)
          .leftJoin(embeddings, eq(messageChunks.embedding_id, embeddings.id))
          .where(eq(messageChunks.message_id, message.id))
          .orderBy(messageChunks.chunk_rank);

        return {
          ...message,
          chunks: chunks
        };
      })
    );

    console.log(`Found conversation with ${conversationMessages.length} messages`);

    return NextResponse.json({
      success: true,
      conversation,
      messages: messagesWithChunks
    });

  } catch (error) {
    console.error('Get conversation error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to fetch conversation: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// PUT /api/conversations/[id] - Update conversation
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const conversationId = parseInt(params.id);
    
    if (isNaN(conversationId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid conversation ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log('Updating conversation:', conversationId, body);

    // Validate request body
    const validatedData = updateConversationSchema.parse(body);

    // Add updated_at timestamp
    const updateData = {
      ...validatedData,
      updated_at: new Date()
    };

    // Update conversation
    const [updatedConversation] = await db
      .update(conversations)
      .set(updateData)
      .where(eq(conversations.id, conversationId))
      .returning();

    if (!updatedConversation) {
      return NextResponse.json(
        { success: false, error: 'Conversation not found' },
        { status: 404 }
      );
    }

    console.log('Updated conversation:', conversationId);

    return NextResponse.json({
      success: true,
      conversation: updatedConversation
    });

  } catch (error) {
    console.error('Update conversation error:', error);
    
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
        error: `Failed to update conversation: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// DELETE /api/conversations/[id] - Archive conversation (soft delete)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const conversationId = parseInt(params.id);
    
    if (isNaN(conversationId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid conversation ID' },
        { status: 400 }
      );
    }

    console.log('Archiving conversation:', conversationId);

    // Archive conversation (soft delete)
    const [archivedConversation] = await db
      .update(conversations)
      .set({ 
        is_archived: true,
        updated_at: new Date()
      })
      .where(eq(conversations.id, conversationId))
      .returning();

    if (!archivedConversation) {
      return NextResponse.json(
        { success: false, error: 'Conversation not found' },
        { status: 404 }
      );
    }

    console.log('Archived conversation:', conversationId);

    return NextResponse.json({
      success: true,
      message: 'Conversation archived successfully'
    });

  } catch (error) {
    console.error('Archive conversation error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to archive conversation: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}