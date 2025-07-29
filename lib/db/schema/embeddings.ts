import { sql } from "drizzle-orm";
import { text, integer, pgTable, serial } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const embeddings = pgTable("embeddings", {
  id: serial("id").primaryKey(),
  resource_id: integer("resource_id").notNull(),
  chunk_index: integer("chunk_index").notNull(),
  content: text("content").notNull(),
  original_text: text("original_text").notNull(), // The original sentence
  window: text("window").notNull(), // The window of surrounding sentences
  embedding: text("embedding").notNull(), // This will store the vector as text, we'll parse it
  token_count: integer("token_count").notNull(),
});

export const insertEmbeddingSchema = createSelectSchema(embeddings)
  .extend({})
  .omit({
    id: true,
  });

export type NewEmbeddingParams = z.infer<typeof insertEmbeddingSchema>; 