import { createResource } from '@/lib/actions/resources';
import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText, tool } from 'ai';
import { z } from 'zod';
import { findRelevantContent } from '@/lib/ai/embedding';
import { updateCurrentChunks } from '@/lib/shared/current-chunks';
import { db, conversations, messages, messageChunks, ragConfigurations } from '@/lib/db';
import { eq, sql } from 'drizzle-orm';

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages: chatMessages,
    model = 'gpt-4-turbo-2024-04-09',
    systemPrompt,
    conversationId,
    ragConfigId,
    userId = 'anonymous'
  } = await req.json();

  // Track the current request for chunk retrieval
  let requestStartTime = Date.now();

  // Store conversation context for message saving (must be at top level)
  let assistantMessageId: number | null = null;
  let retrievedChunks: any[] = [];
  let userMessageId: number | null = null;
  let currentConversationId = conversationId;

  // Load RAG configuration if provided
  let ragConfig = null;
  if (ragConfigId) {
    const [config] = await db.select().from(ragConfigurations).where(eq(ragConfigurations.id, ragConfigId)).limit(1);
    ragConfig = config;
  }

  // Create new conversation if not provided
  if (!currentConversationId) {
    const title = chatMessages[0]?.content?.substring(0, 50) + '...' || 'New Conversation';
    
    const [newConversation] = await db
      .insert(conversations)
      .values({
        title,
        rag_config_id: ragConfigId,
        user_id: userId,
        message_count: 0
      })
      .returning();

    currentConversationId = newConversation.id;
    console.log('✅ Created new conversation:', currentConversationId);
  }

  // Get the correct sequence number by counting existing messages in the conversation
  const existingMessagesCount = await db
    .select({ count: sql`count(*)` })
    .from(messages)
    .where(eq(messages.conversation_id, currentConversationId));
  
  const nextSequenceNumber = Number(existingMessagesCount[0].count) + 1;
  console.log('📊 Existing messages in conversation:', existingMessagesCount[0].count, 'Next sequence:', nextSequenceNumber);

  // Save user message to database
  const lastUserMessage = chatMessages[chatMessages.length - 1];
  if (lastUserMessage && lastUserMessage.role === 'user') {
    const [savedUserMessage] = await db
      .insert(messages)
      .values({
        conversation_id: currentConversationId,
        role: 'user',
        content: lastUserMessage.content,
        sequence_number: nextSequenceNumber
      })
      .returning();
    
    userMessageId = savedUserMessage.id;
    console.log('✅ Saved user message to database:', userMessageId, 'sequence:', nextSequenceNumber);
  }

  // Use system prompt from RAG config if available, otherwise use provided or default
  const effectiveSystemPrompt = ragConfig?.system_prompt || systemPrompt || `You are a helpful assistant with access to a knowledge base of database documentation and schema information.

IMPORTANT INSTRUCTIONS:
1. When a user asks a question, ALWAYS use the getInformation tool first to search your knowledge base
2. Only answer questions using information found in your knowledge base
3. If no relevant information is found, respond with "Sorry, I don't have information about that in my knowledge base."
4. When you find relevant information, provide detailed, helpful answers based on that information
5. For database questions, provide specific SQL examples when possible
6. Always cite the source of your information when possible
7. If the user asks about joining tables, look for information about the specific tables and their relationship keys

Your knowledge base contains database schema documentation, table definitions, and relationship information. Use the getInformation tool to search through them before answering any questions.`;

  // Use model from RAG config if available
  const effectiveModel = ragConfig?.model || model;

  const result = streamText({
    model: openai(effectiveModel),
    messages: convertToCoreMessages(chatMessages),
    system: effectiveSystemPrompt,
    temperature: ragConfig ? parseFloat(ragConfig.temperature || '0.7') : 0.7,
    maxTokens: ragConfig ? ragConfig.max_tokens || 1000 : 1000,
    tools: {
      addResource: tool({
        description: `add a resource to your knowledge base.
          If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
        parameters: z.object({
          content: z
            .string()
            .describe('the content or resource to add to the knowledge base'),
        }),
        execute: async ({ content }) => {
          console.log('Adding resource:', content);
          return await createResource({ content });
        },
      }),
      getInformation: tool({
        description: `get information from your knowledge base to answer questions. Use this tool for EVERY question to search your knowledge base first.`,
        parameters: z.object({
          question: z.string().describe('the users question'),
        }),
        execute: async ({ question }) => {
          console.log('🔍 Searching knowledge base for:', question);
          try {
            const results = await findRelevantContent(question);
            
            // Store the chunks for immediate access and for saving to database
            updateCurrentChunks(results);
            retrievedChunks = results; // This will be used in onFinish
            
            console.log('✅ Retrieved content:', {
              count: results.length,
              content: results.map((r: any) => ({
                content: String(r.content).substring(0, 100) + '...',
                similarity: r.similarity
              }))
            });
            
            // Return simple confirmation - chunks will be saved in onFinish
            return `Found ${results.length} relevant sources in knowledge base.`;
          } catch (error) {
            console.error('❌ Error in knowledge base search:', error);
            return 'Error searching knowledge base.';
          }
        },
      }),
    },
    onFinish: async ({ text, toolResults, usage }) => {
      try {
        console.log('💾 onFinish called - saving assistant message and chunks');
        console.log('Retrieved chunks available:', retrievedChunks.length);
        
        // Save assistant message to database
        if (text && currentConversationId) {
          const sequenceNumber = nextSequenceNumber + 1; // Next sequence number after user message
          const processingTime = Date.now() - requestStartTime;
          
          const [savedMessage] = await db
            .insert(messages)
            .values({
              conversation_id: currentConversationId,
              role: 'assistant',
              content: text,
              sequence_number: sequenceNumber,
              token_count: usage?.totalTokens || 0,
              processing_time: processingTime
            })
            .returning();

          assistantMessageId = savedMessage.id;
          console.log('✅ Saved assistant message:', assistantMessageId);

          // Save retrieved chunks if any - with better error handling
          if (retrievedChunks.length > 0 && assistantMessageId) {
            try {
              const chunkData = retrievedChunks.map((chunk: any, index: number) => ({
                message_id: assistantMessageId!,
                embedding_id: parseInt(chunk.id || '0'),
                similarity_score: chunk.similarity?.toString() || '0.5',
                chunk_rank: index + 1
              }));

              await db
                .insert(messageChunks)
                .values(chunkData);

              console.log(`✅ Saved ${chunkData.length} chunks for message ${assistantMessageId}`);
            } catch (chunkError) {
              console.error('❌ Error saving chunks:', chunkError);
            }
          } else {
            console.log('⚠️ No chunks to save (retrievedChunks empty or no assistant message)');
          }

          // Update conversation metadata
          await db
            .update(conversations)
            .set({
              last_message_at: new Date(),
              updated_at: new Date(),
              total_tokens_used: sql`${conversations.total_tokens_used} + ${usage?.totalTokens || 0}`
            })
            .where(eq(conversations.id, currentConversationId));

          console.log('✅ Updated conversation metadata');
        }
      } catch (error) {
        console.error('❌ Error in onFinish callback:', error);
      }
    }
  });

  // Add conversation ID to response headers for client to track
  const response = result.toDataStreamResponse();
  response.headers.set('X-Conversation-ID', currentConversationId.toString());
  return response;
}