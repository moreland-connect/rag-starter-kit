# RAG Pipeline Implementation Guide
## Overview
This document outlines the complete setup and implementation of a Retrieval-Augmented Generation (RAG) system using *Supabase*, *pgvector*, *Next.js*, and *OpenAI*. The system provides document upload, semantic search, query processing, and comprehensive logging capabilities.
## Architecture Stack
- *Database*: Supabase (PostgreSQL) with pgvector extension
- *ORM*: Drizzle ORM with TypeScript
- *Frontend*: Next.js 14 with React Server Components
- *Vector Embeddings*: OpenAI text-embedding-3-small (1536 dimensions)
- *LLM*: OpenAI GPT models (configurable: gpt-4o-mini, gpt-4o, etc.)
- *UI*: Tailwind CSS + Shadcn/ui components
## Database Schema & Setup
### 1. Database Configuration
typescript
// db/index.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL; // Supabase connection string
const client = postgres(databaseUrl, { prepare: false });
export const db = drizzle(client, { schema: dbSchema });
### 2. Core Tables
#### Documents Table
Stores processed documents with vector embeddings:
sql
-- Migration: db/migrations/0000_curious_power_man.sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE "documents" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" text,
    "filename" text NOT NULL,
    "content" text NOT NULL,                    -- First chunk for quick access
    "metadata" jsonb,                          -- Full content + chunks + metadata
    "embedding" vector(1536),                  -- Primary embedding for similarity
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL
);

-- HNSW index for fast vector similarity search
CREATE INDEX "documents_embedding_index" ON "documents" 
USING hnsw ("embedding" vector_cosine_ops);
#### RAG Queries Table
Comprehensive logging of all RAG interactions:
sql
CREATE TABLE "rag_queries" (
    "id" serial PRIMARY KEY NOT NULL,
    "narrative" text NOT NULL,                 -- User's original question
    "architecture_output" text,               -- Parsed architecture section
    "instructions_output" text,               -- Parsed instructions section
    "full_response" text,                     -- Complete AI response
    "model_used" text NOT NULL,               -- e.g., "gpt-4o-mini"
    "system_prompt" text NOT NULL,            -- System prompt used
    "settings" jsonb NOT NULL,                -- RAG settings (chunks, similarity, etc.)
    "retrieved_chunks" jsonb NOT NULL,        -- Context chunks used
    "retrieval_settings" jsonb,               -- Retrieval parameters
    "rating" text,                            -- User feedback: excellent/good/fair/poor
    "feedback" text,                          -- User comments
    "response_time" integer,                  -- Milliseconds
    "tokens_used" integer,                    -- OpenAI token usage
    "error_message" text,                     -- Error details if failed
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL
);
### 3. Drizzle Schema Definition
typescript
// db/schema/onbase-schema.ts
import { index, jsonb, pgTable, serial, text, timestamp, vector, integer } from "drizzle-orm/pg-core";

export const documentsTable = pgTable(
  "documents",
  {
    id: serial("id").primaryKey(),
    title: text("title"),
    filename: text("filename").notNull(),
    content: text("content").notNull(),
    metadata: jsonb("metadata"),
    embedding: vector("embedding", { dimensions: 1536 }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow()
  },
  (table) => ({
    embedding_index: index("documents_embedding_index")
      .using("hnsw", table.embedding.op("vector_cosine_ops"))
  })
);

export const ragQueriesTable = pgTable("rag_queries", {
  id: serial("id").primaryKey(),
  narrative: text("narrative").notNull(),
  architectureOutput: text("architecture_output"),
  instructionsOutput: text("instructions_output"),
  fullResponse: text("full_response"),
  modelUsed: text("model_used").notNull(),
  systemPrompt: text("system_prompt").notNull(),
  settings: jsonb("settings").notNull(),
  retrievedChunks: jsonb("retrieved_chunks").notNull(),
  retrievalSettings: jsonb("retrieval_settings"),
  rating: text("rating"),
  feedback: text("feedback"),
  responseTime: integer("response_time"),
  tokensUsed: integer("tokens_used"),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
## Document Processing Pipeline
### 1. Text Splitting Strategy
typescript
// lib/rag/processing/split-text.ts
import {get_encoding} from "tiktoken";

export async function splitText(text: string) {
    const chunks: string[] = [];
    const CHUNK_SIZE = 1000; // tokens
    const encoding = get_encoding("cl100k_base");

    const tokens = encoding.encode(text);
    for(let i = 0; i < tokens.length; i += CHUNK_SIZE){
        const chunkTokens = tokens.slice(i, i + CHUNK_SIZE);
        const chunk = new TextDecoder().decode(encoding.decode(chunkTokens));
        chunks.push(chunk);
    }
    return chunks;
}
### 2. Embedding Generation
typescript
// lib/rag/generate/generate-embeddings.ts
import OpenAI from "openai";

const openai = new OpenAI();

export async function generateEmbedding(text: string): Promise<number[]> {
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small", // 1536 dimensions
        input: text
    });
    return response.data[0].embedding;
}
### 3. Document Upload & Storage
typescript
// lib/rag/processing/process-document.ts
export async function uploadDocument(formData: FormData) {
    // 1. Extract file and parse content (PDF/text)
    const file = formData.get('file') as File;
    const extractedText = await parseDocument(file);
    
    // 2. Split into chunks
    const chunks = await splitText(extractedText);
    
    // 3. Generate embeddings for each chunk
    const chunkEmbeddings: number[][] = [];
    for (const chunk of chunks) {
        const embedding = await generateEmbedding(chunk);
        chunkEmbeddings.push(embedding);
    }
    
    // 4. Generate summary embedding for primary search
    const summaryEmbedding = await generateEmbedding(extractedText.slice(0, 2000));
    
    // 5. Store in database with metadata
    const metadata = {
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        uploadedAt: new Date().toISOString(),
        processingInfo: {
            embeddingModel: "text-embedding-3-small",
            contentLength: extractedText.length,
            chunkCount: chunks.length
        },
        chunks: chunks.map((chunk, index) => ({
            content: chunk,
            index,
            embedding: chunkEmbeddings[index]
        }))
    };
    
    await db.insert(documentsTable).values({
        title: extractTitle(extractedText),
        filename: file.name,
        content: chunks[0], // First chunk for quick access
        embedding: summaryEmbedding,
        metadata // Full content stored in JSONB
    });
}
## RAG Query Pipeline
### 1. Pipeline Orchestration
typescript
// lib/rag/retrieval/run-rag-pipeline.ts
export async function runRagPipeline(query: string, options = {}) {
    const { limit = 25, minSimilarity = 0.2 } = options;
    
    // Step 1: Query optimization
    const optimizedQuery = await getOptimizedQuery(query);
    
    // Step 2: Vector similarity search
    const retrievedDocs = await retrieveData(optimizedQuery, {
        limit,
        minSimilarity,
    });
    
    // Step 3: Re-ranking for relevance
    const rankedDocs = await rankDocuments(optimizedQuery, retrievedDocs);
    
    // Step 4: Build condensed context
    const condensedContext = rankedDocs
        .slice(0, 5)
        .map((doc, i) => {
            const snippet = doc.content.slice(0, 3000);
            return `### Document ${i + 1}: ${doc.title}\n${snippet}`;
        })
        .join("\n\n---\n\n");
    
    return condensedContext;
}
### 2. Vector Similarity Search
typescript
// lib/rag/retrieval/retrieve-documents.ts
export async function retrieveData(input: string, options = {}) {
    const { limit = 10, minSimilarity = 0.15 } = options;
    
    // Generate query embedding
    const embedding = await generateEmbedding(input);
    
    // Cosine similarity calculation
    const similarity = sql<number>`1 - (${cosineDistance(documentsTable.embedding, embedding)})`;
    
    // Query with similarity threshold
    const documents = await db
        .select({
            id: documentsTable.id,
            title: documentsTable.title,
            content: documentsTable.content,
            metadata: documentsTable.metadata,
            similarity
        })
        .from(documentsTable)
        .where(gt(similarity, minSimilarity))
        .orderBy(desc(similarity))
        .limit(limit);
    
    return documents;
}
### 3. Response Generation
typescript
// lib/rag/generate/generate-completion.ts
export async function generateCompletionWithContext(
    context: string,
    query: string,
    model: string = 'gpt-4o-mini',
    systemPrompt?: string
) {
    const response = await openai.chat.completions.create({
        model,
        messages: [
            {
                role: "system",
                content: systemPrompt || defaultSystemPrompt
            },
            {
                role: "user",
                content: `Context:\n${context}\n\nQuestion: ${query}`
            }
        ],
        temperature: 0.1,
        max_tokens: 4000,
    });
    
    return response.choices[0]?.message?.content || "";
}





10:48
## API Endpoints
### 1. RAG Query Endpoint
typescript
// app/api/rag/query/route.ts
export async function POST(req: NextRequest) {
    const { query, settings, isRagEditorMode } = await req.json();
    
    // Run RAG pipeline
    const context = await runRagPipeline(query, settings);
    
    // Generate completion
    const completion = await generateCompletionWithContext(
        context, 
        query, 
        settings?.model || 'gpt-4o-mini',
        settings?.systemPrompt
    );
    
    // Parse response based on mode
    let architectureOutput = "", instructionsOutput = "";
    
    if (isRagEditorMode) {
        architectureOutput = completion; // Full response
    } else {
        // Split on ARCHITECTURE/INSTRUCTIONS markers
        const sections = parseResponseSections(completion);
        architectureOutput = sections.architecture;
        instructionsOutput = sections.instructions;
    }
    
    // Log to database
    const logEntry = await ragQueries.create({
        narrative: query,
        architectureOutput,
        instructionsOutput,
        fullResponse: completion,
        modelUsed: settings?.model ?? 'gpt-4o-mini',
        systemPrompt: settings?.systemPrompt || 'OnBase Studio Expert',
        settings,
        retrievedChunks: [{ content: context }],
        responseTime: Date.now() - startTime,
    });
    
    return NextResponse.json({
        success: true,
        queryId: logEntry.id,
        architectureOutput,
        instructionsOutput,
        isUsingRAG: context.trim().length > 0,
    });
}
### 2. Document Upload Endpoint
typescript
// app/api/rag/upload/route.ts
export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const result = await uploadDocument(formData);
    
    return NextResponse.json(result);
}
## Comprehensive Logging System
### 1. Logs API Endpoint
typescript
// app/api/rag/logs/route.ts
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') ?? '50');
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const rating = searchParams.get('rating');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    // Build dynamic filters
    const conditions = [];
    if (rating) conditions.push(eq(ragQueriesTable.rating, rating));
    if (startDate) conditions.push(gte(ragQueriesTable.createdAt, new Date(startDate)));
    if (endDate) conditions.push(lte(ragQueriesTable.createdAt, new Date(endDate)));
    
    // Query with pagination
    const logs = await db
        .select({
            id: ragQueriesTable.id,
            narrative: ragQueriesTable.narrative,
            modelUsed: ragQueriesTable.modelUsed,
            rating: ragQueriesTable.rating,
            feedback: ragQueriesTable.feedback,
            responseTime: ragQueriesTable.responseTime,
            tokensUsed: ragQueriesTable.tokensUsed,
            fullResponse: ragQueriesTable.fullResponse,
            errorMessage: ragQueriesTable.errorMessage,
            createdAt: ragQueriesTable.createdAt,
            settings: ragQueriesTable.settings,
            retrievedChunks: ragQueriesTable.retrievedChunks,
        })
        .from(ragQueriesTable)
        .where(and(...conditions))
        .orderBy(desc(ragQueriesTable.createdAt))
        .limit(limit)
        .offset(offset);
    
    const totalCount = await db.select({ count: sql<number>`count(*)` })
        .from(ragQueriesTable)
        .where(and(...conditions));
    
    return NextResponse.json({
        success: true,
        logs,
        pagination: {
            total: totalCount[0]?.count ?? 0,
            limit,
            offset,
            hasMore: offset + limit < totalCount[0]?.count
        }
    });
}
### 2. Logs Viewer Component
typescript
// components/rag-logs-viewer.tsx
export default function RagLogsViewer() {
    const [logs, setLogs] = useState<RagLogEntry[]>([]);
    const [filters, setFilters] = useState({
        searchTerm: '',
        ratingFilter: 'all',
        startDate: undefined,
        endDate: undefined
    });
    
    const fetchLogs = async () => {
        const params = new URLSearchParams({
            limit: '25',
            offset: (currentPage * 25).toString(),
            ...filters
        });
        
        const response = await fetch(`/api/rag/logs?${params}`);
        const data = await response.json();
        setLogs(data.logs);
    };
    
    return (
        <Card>
            <CardContent>
                {/* Filter Controls */}
                <div className="space-y-4 mb-6">
                    <Input
                        placeholder="Search queries..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Select value={ratingFilter} onValueChange={setRatingFilter}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by rating" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Ratings</SelectItem>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                {/* Logs Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Query</TableHead>
                            <TableHead>Model</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Response Time</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {logs.map((log) => (
                            <TableRow key={log.id}>
                                <TableCell className="max-w-xs truncate">
                                    {log.narrative}
                                </TableCell>
                                <TableCell>{log.modelUsed}</TableCell>
                                <TableCell>
                                    {log.rating && (
                                        <Badge variant={getBadgeVariant(log.rating)}>
                                            {log.rating}
                                        </Badge>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {log.responseTime ? `${log.responseTime}ms` : '-'}
                                </TableCell>
                                <TableCell>
                                    {formatDistanceToNow(new Date(log.createdAt))}
                                </TableCell>
                                <TableCell>
                                    <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => setSelectedLog(log)}
                                    >
                                        <Eye className="w-4 h-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                {/* Pagination */}
                <div className="flex justify-between items-center mt-4">
                    <Button 
                        variant="outline" 
                        onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                        disabled={currentPage === 0}
                    >
                        Previous
                    </Button>
                    <span>Page {currentPage + 1}</span>
                    <Button 
                        variant="outline" 
                        onClick={() => setCurrentPage(p => p + 1)}
                        disabled={!hasMore}
                    >
                        Next
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
## Environment Setup
### Required Environment Variables
env
# .env.local
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]?sslmode=require"
OPENAI_API_KEY="sk-..."
### Database Migration
bash
# Run migrations to set up tables and indices
npx drizzle-kit migrate
## Key Features
### 1. *Dual Mode Operation*
- *Standard Mode*: Parses responses into Architecture & Instructions sections
- *RAG Editor Mode*: Returns full response for testing and experimentation
### 2. *Comprehensive Logging*
- Every query logged with full context, settings, and performance metrics
- User feedback integration (rating + comments)
- Error tracking and debugging information
### 3. *Advanced Vector Search*
- pgvector with HNSW indices for fast similarity search
- Configurable similarity thresholds and result limits
- Intelligent chunk-based retrieval from document metadata
### 4. *Document Processing*
- PDF and text file support
- Token-aware text chunking using tiktoken
- Hierarchical embedding strategy (summary + chunks)
### 5. *Flexible Configuration*
- Multiple AI models supported (GPT-4o, GPT-4o-mini, etc.)
- Customizable system prompts
- Adjustable retrieval parameters (chunk count, similarity threshold)
This implementation provides a production-ready RAG system with comprehensive logging, making it easy to monitor performance, debug issues, and iterate on improvements.