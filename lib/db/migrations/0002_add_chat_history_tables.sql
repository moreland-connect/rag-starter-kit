-- Migration: Add chat history and configuration management tables

-- First, create embedding_versions table (required by embeddings)
CREATE TABLE IF NOT EXISTS "embedding_versions" (
  "id" serial PRIMARY KEY,
  "version_name" varchar(255) NOT NULL,
  "description" text,
  "chunking_strategy" jsonb,
  "embedding_model" varchar(100) NOT NULL,
  "chunk_size" integer,
  "chunk_overlap" integer,
  "is_active" boolean DEFAULT false,
  "is_archived" boolean DEFAULT false,
  "total_chunks" integer DEFAULT 0,
  "total_resources" integer DEFAULT 0,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "created_by" varchar(255),
  "avg_chunk_size" integer,
  "total_tokens" integer
);

-- Create initial embedding version for existing data
INSERT INTO "embedding_versions" ("version_name", "embedding_model", "is_active") 
VALUES ('Initial Version', 'text-embedding-ada-002', true)
ON CONFLICT DO NOTHING;

-- Add versioning columns to existing embeddings table
ALTER TABLE "embeddings" 
ADD COLUMN IF NOT EXISTS "embedding_version_id" integer DEFAULT 1 REFERENCES "embedding_versions"("id"),
ADD COLUMN IF NOT EXISTS "is_active" boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS "archived_at" timestamp,
ADD COLUMN IF NOT EXISTS "similarity_scores" jsonb;

-- Update existing embeddings to use the initial version
UPDATE "embeddings" SET "embedding_version_id" = 1 WHERE "embedding_version_id" IS NULL;

-- Make embedding_version_id required after backfill
ALTER TABLE "embeddings" ALTER COLUMN "embedding_version_id" SET NOT NULL;

-- Create RAG configurations table
CREATE TABLE IF NOT EXISTS "rag_configurations" (
  "id" serial PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "description" text,
  "system_prompt" text NOT NULL,
  "model" varchar(100) NOT NULL DEFAULT 'gpt-4o-mini',
  "temperature" decimal(3,2) DEFAULT 0.7,
  "max_tokens" integer DEFAULT 1000,
  "chunks_to_retrieve" integer DEFAULT 25,
  "similarity_threshold" decimal(3,2) DEFAULT 0.2,
  "retrieval_type" varchar(50) DEFAULT 'similarity',
  "is_default" boolean DEFAULT false,
  "is_active" boolean DEFAULT true,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL,
  CONSTRAINT "valid_temperature" CHECK ("temperature" >= 0 AND "temperature" <= 2),
  CONSTRAINT "valid_similarity" CHECK ("similarity_threshold" >= 0 AND "similarity_threshold" <= 1)
);

-- Create default RAG configuration
INSERT INTO "rag_configurations" ("name", "system_prompt", "is_default") 
VALUES (
  'Default RAG Config', 
  'You are a helpful assistant with access to a knowledge base of database documentation and schema information.

IMPORTANT INSTRUCTIONS:
1. When a user asks a question, ALWAYS use the getInformation tool first to search your knowledge base
2. Only answer questions using information found in your knowledge base
3. If no relevant information is found, respond with "Sorry, I don''t have information about that in my knowledge base."
4. When you find relevant information, provide detailed, helpful answers based on that information
5. For database questions, provide specific SQL examples when possible
6. Always cite the source of your information when possible
7. If the user asks about joining tables, look for information about the specific tables and their relationship keys

Your knowledge base contains database schema documentation, table definitions, and relationship information. Use the getInformation tool to search through them before answering any questions.',
  true
)
ON CONFLICT DO NOTHING;

-- Create conversations table
CREATE TABLE IF NOT EXISTS "conversations" (
  "id" serial PRIMARY KEY,
  "uuid" uuid UNIQUE DEFAULT gen_random_uuid(),
  "title" varchar(255),
  "rag_config_id" integer REFERENCES "rag_configurations"("id"),
  "session_id" varchar(255),
  "user_id" varchar(255),
  "message_count" integer DEFAULT 0,
  "total_tokens_used" integer DEFAULT 0,
  "avg_response_time" integer,
  "positive_feedback" integer DEFAULT 0,
  "negative_feedback" integer DEFAULT 0,
  "max_messages" integer DEFAULT 1000,
  "is_auto_archived" boolean DEFAULT false,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL,
  "last_message_at" timestamp DEFAULT now() NOT NULL,
  "is_archived" boolean DEFAULT false
);

-- Create messages table
CREATE TABLE IF NOT EXISTS "messages" (
  "id" serial PRIMARY KEY,
  "conversation_id" integer NOT NULL REFERENCES "conversations"("id") ON DELETE CASCADE,
  "role" varchar(20) NOT NULL CHECK ("role" IN ('user', 'assistant', 'system')),
  "content" text NOT NULL,
  "embedding_version_id" integer REFERENCES "embedding_versions"("id"),
  "processing_time" integer,
  "token_count" integer,
  "sequence_number" integer NOT NULL CHECK ("sequence_number" > 0),
  "created_at" timestamp DEFAULT now() NOT NULL,
  "relevance_score" decimal(3,2)
);

-- Create message_chunks table (junction table for retrieved chunks)
CREATE TABLE IF NOT EXISTS "message_chunks" (
  "id" serial PRIMARY KEY,
  "message_id" integer NOT NULL REFERENCES "messages"("id") ON DELETE CASCADE,
  "embedding_id" integer NOT NULL REFERENCES "embeddings"("id"),
  "similarity_score" decimal(5,4) NOT NULL,
  "chunk_rank" integer NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  UNIQUE("message_id", "embedding_id")
);

-- Create message_feedback table
CREATE TABLE IF NOT EXISTS "message_feedback" (
  "id" serial PRIMARY KEY,
  "message_id" integer NOT NULL REFERENCES "messages"("id") ON DELETE CASCADE,
  "conversation_id" integer NOT NULL REFERENCES "conversations"("id") ON DELETE CASCADE,
  "feedback_type" varchar(20) NOT NULL CHECK ("feedback_type" IN ('positive', 'negative', 'neutral')),
  "feedback_comment" text,
  "user_id" varchar(255),
  "ip_address" inet,
  "user_agent" text,
  "created_at" timestamp DEFAULT now() NOT NULL,
  UNIQUE("message_id", "user_id")
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS "idx_conversations_updated_at" ON "conversations"("updated_at" DESC);
CREATE INDEX IF NOT EXISTS "idx_conversations_user_id" ON "conversations"("user_id");
CREATE INDEX IF NOT EXISTS "idx_conversations_rag_config" ON "conversations"("rag_config_id");
CREATE INDEX IF NOT EXISTS "idx_conversations_uuid_hash" ON "conversations" USING HASH ("uuid");

CREATE INDEX IF NOT EXISTS "idx_messages_conversation_id" ON "messages"("conversation_id", "sequence_number");
CREATE INDEX IF NOT EXISTS "idx_messages_created_at" ON "messages"("created_at" DESC);
CREATE INDEX IF NOT EXISTS "idx_messages_role" ON "messages"("role");

CREATE INDEX IF NOT EXISTS "idx_message_chunks_message_id" ON "message_chunks"("message_id");
CREATE INDEX IF NOT EXISTS "idx_message_chunks_embedding_id" ON "message_chunks"("embedding_id");
CREATE INDEX IF NOT EXISTS "idx_message_chunks_similarity" ON "message_chunks"("similarity_score" DESC);

CREATE INDEX IF NOT EXISTS "idx_feedback_message_id" ON "message_feedback"("message_id");
CREATE INDEX IF NOT EXISTS "idx_feedback_conversation_id" ON "message_feedback"("conversation_id");
CREATE INDEX IF NOT EXISTS "idx_feedback_type" ON "message_feedback"("feedback_type");

CREATE INDEX IF NOT EXISTS "idx_embeddings_version_active" ON "embeddings"("embedding_version_id", "is_active");
CREATE INDEX IF NOT EXISTS "idx_embeddings_resource_version" ON "embeddings"("resource_id", "embedding_version_id");

-- Create trigger to update conversation message count
CREATE OR REPLACE FUNCTION update_conversation_message_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE conversations 
        SET message_count = message_count + 1,
            last_message_at = NOW(),
            updated_at = NOW()
        WHERE id = NEW.conversation_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE conversations 
        SET message_count = message_count - 1,
            updated_at = NOW()
        WHERE id = OLD.conversation_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER conversation_message_count_trigger
    AFTER INSERT OR DELETE ON messages
    FOR EACH ROW
    EXECUTE FUNCTION update_conversation_message_count();

-- Create trigger to auto-archive large conversations
CREATE OR REPLACE FUNCTION check_conversation_size()
RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT message_count FROM conversations WHERE id = NEW.conversation_id) > 
       (SELECT max_messages FROM conversations WHERE id = NEW.conversation_id) THEN
        UPDATE conversations 
        SET is_archived = TRUE, is_auto_archived = TRUE 
        WHERE id = NEW.conversation_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER conversation_size_check_trigger
    AFTER INSERT ON messages
    FOR EACH ROW
    EXECUTE FUNCTION check_conversation_size();