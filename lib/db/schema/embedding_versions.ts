import { sql } from "drizzle-orm";
import { text, varchar, timestamp, pgTable, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const embeddingVersions = pgTable("embedding_versions", {
  id: serial("id").primaryKey(),
  version_name: varchar("version_name", { length: 255 }).notNull(),
  description: text("description"),
  
  // Configuration used for this version
  chunking_strategy: jsonb("chunking_strategy"), // Store chunking parameters
  embedding_model: varchar("embedding_model", { length: 100 }).notNull(),
  chunk_size: integer("chunk_size"),
  chunk_overlap: integer("chunk_overlap"),
  
  // Status
  is_active: boolean("is_active").default(false),
  is_archived: boolean("is_archived").default(false),
  
  // Metadata
  total_chunks: integer("total_chunks").default(0),
  total_resources: integer("total_resources").default(0),
  created_at: timestamp("created_at").notNull().default(sql`now()`),
  created_by: varchar("created_by", { length: 255 }),
  
  // Performance metrics
  avg_chunk_size: integer("avg_chunk_size"),
  total_tokens: integer("total_tokens"),
});

// Schema for creating new embedding versions
export const insertEmbeddingVersionSchema = createSelectSchema(embeddingVersions)
  .extend({
    chunking_strategy: z.record(z.any()).optional(),
  })
  .omit({
    id: true,
    created_at: true,
    total_chunks: true,
    total_resources: true,
  });

// Schema for updating embedding versions
export const updateEmbeddingVersionSchema = insertEmbeddingVersionSchema.partial();

// Types
export type NewEmbeddingVersionParams = z.infer<typeof insertEmbeddingVersionSchema>;
export type UpdateEmbeddingVersionParams = z.infer<typeof updateEmbeddingVersionSchema>;
export type EmbeddingVersion = typeof embeddingVersions.$inferSelect;