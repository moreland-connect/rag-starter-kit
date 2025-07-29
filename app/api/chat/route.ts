import { createResource } from '@/lib/actions/resources';
import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText, tool } from 'ai';
import { z } from 'zod';
import { findRelevantContent } from '@/lib/ai/embedding';
import { updateCurrentChunks } from '../get-current-chunks/route';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Global storage for last retrieved chunks (in production, use Redis or database)
let lastRetrievedChunks: any[] = [];

export async function POST(req: Request) {
  const { messages, model = 'gpt-4.1-2025-04-14', systemPrompt } = await req.json();

  console.log('Chat request received:', {
    messageCount: messages.length,
    lastMessage: messages[messages.length - 1]?.content,
    model,
    hasCustomPrompt: !!systemPrompt
  });

  const defaultSystemPrompt = `You are a helpful assistant with access to a knowledge base of database documentation and schema information.

IMPORTANT INSTRUCTIONS:
1. When a user asks a question, ALWAYS use the getInformation tool first to search your knowledge base
2. Only answer questions using information found in your knowledge base
3. If no relevant information is found, respond with "Sorry, I don't have information about that in my knowledge base."
4. When you find relevant information, provide detailed, helpful answers based on that information
5. For database questions, provide specific SQL examples when possible
6. Always cite the source of your information when possible
7. If the user asks about joining tables, look for information about the specific tables and their relationship keys

Your knowledge base contains database schema documentation, table definitions, and relationship information. Use the getInformation tool to search through them before answering any questions.`;

  const result = streamText({
    model: openai(model),
    messages: convertToCoreMessages(messages),
    system: systemPrompt || defaultSystemPrompt,
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
          console.log('Adding resource to knowledge base');
          return createResource({ content });
        },
      }),
      getInformation: tool({
        description: `get information from your knowledge base to answer questions. Use this tool for EVERY question to search your knowledge base first.`,
        parameters: z.object({
          question: z.string().describe('the users question'),
        }),
        execute: async ({ question }) => {
          console.log('Searching knowledge base for:', question);
          const results = await findRelevantContent(question);
          
          // Store the chunks globally for immediate access
          lastRetrievedChunks = results;
          updateCurrentChunks(results);
          
          console.log('Retrieved content:', {
            count: results.length,
            content: results.map((r: any) => ({
              content: String(r.content).substring(0, 100) + '...',
              similarity: r.similarity
            }))
          });
          return results;
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}

// Export function to get last retrieved chunks
export { lastRetrievedChunks }; 