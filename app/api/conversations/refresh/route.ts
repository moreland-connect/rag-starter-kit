import { NextRequest, NextResponse } from 'next/server';
import { db, conversations } from '@/lib/db';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || 'anonymous';

    console.log('🔄 Refreshing conversations for user:', userId);

    // Fetch conversations for the user
    const userConversations = await db
      .select()
      .from(conversations)
      .where(eq(conversations.user_id, userId))
      .orderBy(desc(conversations.updated_at));

    console.log(`✅ Found ${userConversations.length} conversations for user ${userId}`);

    return NextResponse.json({
      success: true,
      conversations: userConversations,
      count: userConversations.length,
      refreshedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error refreshing conversations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to refresh conversations' },
      { status: 500 }
    );
  }
}