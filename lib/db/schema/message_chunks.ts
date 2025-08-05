import { sql } from "drizzle-orm";
import { timestamp, pgTable, integer, decimal, unique, serial } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { messages } from "./messages";
import { embeddings } from "./embeddings";

export const messageChunks = pgTable("message_chunks", {
  id: serial("id").primaryKey(),
  message_id: integer("message_id").notNull().references(() => messages.id, { onDelete: "cascade" }),
  embedding_id: integer("embedding_id").notNull().references(() => embeddings.id),
  similarity_score: decimal("similarity_score", { precision: 5, scale: 4 }).notNull(),
  chunk_rank: integer("chunk_rank").notNull(), // Order of relevance (1 = most relevant)
  created_at: timestamp("created_at").notNull().default(sql`now()`),
}, (table) => ({
  messageEmbeddingUnique: unique("message_embedding_unique").on(table.message_id, table.embedding_id),
}));

// Schema for creating new message chunks
export const insertMessageChunkSchema = createSelectSchema(messageChunks)
  .extend({
    similarity_score: z.number().min(0).max(1).transform(val => val.toString()),
    chunk_rank: z.number().positive(),
  })
  .omit({
    id: true,
    created_at: true,
  });

// Types
export type NewMessageChunkParams = z.infer<typeof insertMessageChunkSchema>;
export type MessageChunk = typeof messageChunks.$inferSelect;