import { sql } from "drizzle-orm";
import { text, integer, pgTable, serial, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { embeddingVersions } from "./embedding_versions";

export const embeddings = pgTable("embeddings", {
  id: serial("id").primaryKey(),
  resource_id: integer("resource_id").notNull(),
  chunk_index: integer("chunk_index").notNull(),
  content: text("content").notNull(),
  original_text: text("original_text").notNull(), // The original sentence
  window: text("window").notNull(), // The window of surrounding sentences
  embedding: text("embedding").notNull(), // This will store the vector as text, we'll parse it
  token_count: integer("token_count").notNull(),
  
  // Versioning support
  embedding_version_id: integer("embedding_version_id").notNull().default(1).references(() => embeddingVersions.id),
  is_active: boolean("is_active").default(true),
  archived_at: timestamp("archived_at"),
  similarity_scores: jsonb("similarity_scores"), // Cache similarity scores for performance
});

export const insertEmbeddingSchema = createSelectSchema(embeddings)
  .extend({})
  .omit({
    id: true,
  });

export type NewEmbeddingParams = z.infer<typeof insertEmbeddingSchema>; 