import { NextRequest, NextResponse } from 'next/server';
import { db, messageFeedback, insertMessageFeedbackSchema, messages, conversations } from '@/lib/db';
import { eq, and } from 'drizzle-orm';
import { z } from 'zod';

interface RouteParams {
  params: { id: string }
}

// POST /api/messages/[id]/feedback - Submit feedback for message
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const messageId = parseInt(params.id);
    
    if (isNaN(messageId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid message ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log('Submitting feedback for message:', messageId, body);

    // First verify the message exists and get conversation_id
    const [message] = await db
      .select({
        id: messages.id,
        conversation_id: messages.conversation_id
      })
      .from(messages)
      .where(eq(messages.id, messageId))
      .limit(1);

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message not found' },
        { status: 404 }
      );
    }

    // Validate feedback data
    const feedbackData = insertMessageFeedbackSchema.parse({
      ...body,
      message_id: messageId,
      conversation_id: message.conversation_id
    });

    // Check if user has already provided feedback for this message
    if (feedbackData.user_id) {
      const existingFeedback = await db
        .select()
        .from(messageFeedback)
        .where(
          and(
            eq(messageFeedback.message_id, messageId),
            eq(messageFeedback.user_id, feedbackData.user_id)
          )
        )
        .limit(1);

      if (existingFeedback.length > 0) {
        // Update existing feedback
        const [updatedFeedback] = await db
          .update(messageFeedback)
          .set({
            feedback_type: feedbackData.feedback_type,
            feedback_comment: feedbackData.feedback_comment,
            created_at: new Date()
          })
          .where(eq(messageFeedback.id, existingFeedback[0].id))
          .returning();

        console.log('Updated existing feedback:', updatedFeedback.id);

        return NextResponse.json({
          success: true,
          feedback: updatedFeedback,
          action: 'updated'
        });
      }
    }

    // Create new feedback
    const [newFeedback] = await db
      .insert(messageFeedback)
      .values(feedbackData)
      .returning();

    console.log('Created feedback:', newFeedback.id);

    // Update conversation feedback counters
    if (feedbackData.feedback_type === 'positive') {
      await db
        .update(conversations)
        .set({
          positive_feedback: conversations.positive_feedback + 1,
          updated_at: new Date()
        })
        .where(eq(conversations.id, message.conversation_id));
    } else if (feedbackData.feedback_type === 'negative') {
      await db
        .update(conversations)
        .set({
          negative_feedback: conversations.negative_feedback + 1,
          updated_at: new Date()
        })
        .where(eq(conversations.id, message.conversation_id));
    }

    return NextResponse.json({
      success: true,
      feedback: newFeedback,
      action: 'created'
    });

  } catch (error) {
    console.error('Submit feedback error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid feedback data',
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: `Failed to submit feedback: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}

// GET /api/messages/[id]/feedback - Get feedback for message
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const messageId = parseInt(params.id);
    
    if (isNaN(messageId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid message ID' },
        { status: 400 }
      );
    }

    console.log('Fetching feedback for message:', messageId);

    const feedback = await db
      .select()
      .from(messageFeedback)
      .where(eq(messageFeedback.message_id, messageId))
      .orderBy(messageFeedback.created_at);

    // Calculate feedback summary
    const summary = feedback.reduce(
      (acc, f) => {
        acc.total++;
        if (f.feedback_type === 'positive') acc.positive++;
        else if (f.feedback_type === 'negative') acc.negative++;
        else acc.neutral++;
        return acc;
      },
      { total: 0, positive: 0, negative: 0, neutral: 0 }
    );

    console.log(`Found ${feedback.length} feedback entries for message ${messageId}`);

    return NextResponse.json({
      success: true,
      feedback,
      summary
    });

  } catch (error) {
    console.error('Get feedback error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: `Failed to fetch feedback: ${error instanceof Error ? error.message : 'Unknown error'}` 
      },
      { status: 500 }
    );
  }
}