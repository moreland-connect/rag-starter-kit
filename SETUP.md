# RAG Chatbot Setup with Existing Supabase Database

This project has been adapted to work with your existing Supabase database schema.

## Current Database Schema

Your Supabase database has these tables:
- `resources` - stores file metadata and content
- `embeddings` - stores vector embeddings for content chunks
- `chat_sessions` - stores chat session data
- `chat_messages` - stores individual chat messages
- `rag_profiles` - stores RAG configuration profiles

## Setup Steps

### 1. Install Dependencies

```bash
pnpm add ai @ai-sdk/openai @ai-sdk/react
```

### 2. Environment Variables

Create a `.env` file with:

```env
# Database (your Supabase connection string)
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# OpenAI
OPENAI_API_KEY="your-openai-api-key-here"
```

### 3. Database Schema Issues

The current schema files have some TypeScript issues due to drizzle-orm version conflicts. You may need to:

1. Update drizzle-orm to a compatible version
2. Or manually create the tables in Supabase to match your existing schema

### 4. Enable pgvector Extension

In your Supabase database, run:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

Then update the embeddings table to use the vector type:

```sql
ALTER TABLE embeddings ALTER COLUMN embedding TYPE vector(1536);
```

### 5. Update Embedding Logic

Once pgvector is enabled, update `lib/ai/embedding.ts` to use proper vector similarity search instead of text search.

## Current Status

- ✅ Basic chat interface created
- ✅ Database schemas adapted to your Supabase structure
- ✅ Environment configuration updated
- ⚠️ AI SDK packages need to be installed
- ⚠️ Database schema needs pgvector extension
- ⚠️ Embedding logic needs vector similarity search

## Next Steps

1. Install the AI SDK packages
2. Enable pgvector in Supabase
3. Update the embedding logic for proper vector search
4. Test the chat functionality

The chat interface will show a placeholder message until the AI SDK is installed. 