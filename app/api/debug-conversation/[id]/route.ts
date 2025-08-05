import { NextRequest, NextResponse } from 'next/server';
import { db, conversations, messages, messageChunks, embeddings } from '@/lib/db';
import { eq } from 'drizzle-orm';

interface RouteParams {
  params: { id: string }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const conversationId = parseInt(params.id);
    if (isNaN(conversationId)) {
      return NextResponse.json({ success: false, error: 'Invalid conversation ID' }, { status: 400 });
    }

    // Fetch conversation
    const [conversation] = await db.select().from(conversations).where(eq(conversations.id, conversationId)).limit(1);
    
    // Fetch all messages
    const allMessages = await db
      .select()
      .from(messages)
      .where(eq(messages.conversation_id, conversationId))
      .orderBy(messages.sequence_number);

    // Fetch all chunks for this conversation
    const allChunks = await db
      .select({
        message_id: messageChunks.message_id,
        chunk_data: messageChunks,
        embedding_data: embeddings
      })
      .from(messageChunks)
      .leftJoin(embeddings, eq(messageChunks.embedding_id, embeddings.id))
      .leftJoin(messages, eq(messageChunks.message_id, messages.id))
      .where(eq(messages.conversation_id, conversationId));

    return NextResponse.json({
      success: true,
      conversation,
      messages: allMessages,
      chunks: allChunks,
      debug: {
        messageCount: allMessages.length,
        chunkCount: allChunks.length,
        messagesWithChunks: allChunks.reduce((acc, chunk) => {
          if (!acc.includes(chunk.message_id)) acc.push(chunk.message_id);
          return acc;
        }, [] as number[])
      }
    });

  } catch (error) {
    console.error('Debug conversation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to debug conversation' },
      { status: 500 }
    );
  }
}