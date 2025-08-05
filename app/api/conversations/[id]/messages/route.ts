import { NextRequest, NextResponse } from 'next/server';
import { db, messages, messageChunks, insertMessageSchema, insertMessageChunkSchema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

interface RouteParams {
  params: { id: string }
}

// POST /api/conversations/[id]/messages - Add message to conversation
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const conversationId = parseInt(params.id);
    
    if (isNaN(conversationId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid conversation ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log('Adding message to conversation:', conversationId, body);

    // Validate message data
    const messageData = insertMessageSchema.parse({
      ...body,
      conversation_id: conversationId
    });

    // Create message
    const [newMessage] = await db
      .insert(messages)
      .values(messageData)
      .returning();

    console.log('Created message:', newMessage.id);

    // If chunks are provided, store them in message_chunks table
    if (body.chunks && Array.isArray(body.chunks)) {
      const chunkData = body.chunks.map((chunk: any, index: number) => ({
        message_id: newMessage.id,
        embedding_id: chunk.embedding_id,
        similarity_score: chunk.similarity_score,
        chunk_rank: index + 1
      }));

      // Validate chunk data
      const validatedChunks = chunkData.map(chunk => insertMessageChunkSchema.parse(chunk));

      // Insert chunks
      await db
        .insert(messageChunks)
        .values(validatedChunks);

      console.log(`Added ${validatedChunks.length} chunks to message ${newMessage.id}`);
    }

    return NextResponse.json({
      success: true,
      message: newMessage
    });

  } catch (error) {
    console.error('Add message error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid message data',
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: `Failed to add message: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// GET /api/conversations/[id]/messages - Get messages for conversation
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const conversationId = parseInt(params.id);
    
    if (isNaN(conversationId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid conversation ID' },
        { status: 400 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    console.log('Fetching messages for conversation:', conversationId);

    // Fetch messages with pagination
    const conversationMessages = await db
      .select()
      .from(messages)
      .where(eq(messages.conversation_id, conversationId))
      .orderBy(messages.sequence_number)
      .limit(limit)
      .offset(offset);

    // Fetch chunks for each message if requested
    const includeChunks = searchParams.get('includeChunks') === 'true';
    let messagesWithChunks = conversationMessages;

    if (includeChunks && conversationMessages.length > 0) {
      const messageIds = conversationMessages.map(m => m.id);
      
      const chunks = await db
        .select({
          message_id: messageChunks.message_id,
          embedding_id: messageChunks.embedding_id,
          similarity_score: messageChunks.similarity_score,
          chunk_rank: messageChunks.chunk_rank
        })
        .from(messageChunks)
        .where(eq(messageChunks.message_id, messageIds[0])); // Simple approach for now

      // Group chunks by message_id
      const chunksByMessage = chunks.reduce((acc, chunk) => {
        if (!acc[chunk.message_id]) {
          acc[chunk.message_id] = [];
        }
        acc[chunk.message_id].push(chunk);
        return acc;
      }, {} as Record<number, any[]>);

      messagesWithChunks = conversationMessages.map(message => ({
        ...message,
        chunks: chunksByMessage[message.id] || []
      }));
    }

    console.log(`Found ${conversationMessages.length} messages`);

    return NextResponse.json({
      success: true,
      messages: messagesWithChunks,
      count: conversationMessages.length,
      hasMore: conversationMessages.length === limit
    });

  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to fetch messages: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}