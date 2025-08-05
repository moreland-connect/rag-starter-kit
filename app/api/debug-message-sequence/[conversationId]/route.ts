import { NextRequest, NextResponse } from 'next/server';
import { db, messages } from '@/lib/db';
import { eq } from 'drizzle-orm';

interface RouteParams {
  params: { conversationId: string }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const conversationId = parseInt(params.conversationId);
    if (isNaN(conversationId)) {
      return NextResponse.json({ success: false, error: 'Invalid conversation ID' }, { status: 400 });
    }

    // Fetch all messages for this conversation in sequence order
    const allMessages = await db
      .select()
      .from(messages)
      .where(eq(messages.conversation_id, conversationId))
      .orderBy(messages.sequence_number);

    // Check for sequence gaps
    const sequenceNumbers = allMessages.map(m => m.sequence_number);
    const expectedSequence = Array.from({length: allMessages.length}, (_, i) => i + 1);
    const hasGaps = !sequenceNumbers.every((num, i) => num === expectedSequence[i]);

    return NextResponse.json({
      success: true,
      conversationId,
      messageCount: allMessages.length,
      messages: allMessages.map(m => ({
        id: m.id,
        role: m.role,
        sequence_number: m.sequence_number,
        content: m.content.substring(0, 100) + '...',
        created_at: m.created_at
      })),
      sequenceNumbers,
      expectedSequence,
      hasSequenceGaps: hasGaps,
      debug: {
        duplicateSequences: sequenceNumbers.filter((num, i) => sequenceNumbers.indexOf(num) !== i),
        missingSequences: expectedSequence.filter(num => !sequenceNumbers.includes(num))
      }
    });

  } catch (error) {
    console.error('Debug message sequence error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to debug message sequence' },
      { status: 500 }
    );
  }
}