import { sql } from "drizzle-orm";
import { text, varchar, timestamp, pgTable, serial, integer, decimal, boolean } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const ragConfigurations = pgTable("rag_configurations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  
  // System Prompt Settings
  system_prompt: text("system_prompt").notNull(),
  model: varchar("model", { length: 100 }).notNull().default("gpt-4o-mini"),
  
  // RAG Settings
  temperature: decimal("temperature", { precision: 3, scale: 2 }).default("0.7"),
  max_tokens: integer("max_tokens").default(1000),
  chunks_to_retrieve: integer("chunks_to_retrieve").default(25),
  similarity_threshold: decimal("similarity_threshold", { precision: 3, scale: 2 }).default("0.2"),
  retrieval_type: varchar("retrieval_type", { length: 50 }).default("similarity"),
  
  // Metadata
  is_default: boolean("is_default").default(false),
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at").notNull().default(sql`now()`),
  updated_at: timestamp("updated_at").notNull().default(sql`now()`),
});

// Schema for creating new RAG configurations
export const insertRagConfigurationSchema = createSelectSchema(ragConfigurations)
  .extend({
    temperature: z.number().min(0).max(2).optional(),
    similarity_threshold: z.number().min(0).max(1).optional(),
  })
  .omit({
    id: true,
    created_at: true,
    updated_at: true,
  });

// Schema for updating RAG configurations
export const updateRagConfigurationSchema = insertRagConfigurationSchema.partial();

// Types
export type NewRagConfigurationParams = z.infer<typeof insertRagConfigurationSchema>;
export type UpdateRagConfigurationParams = z.infer<typeof updateRagConfigurationSchema>;
export type RagConfiguration = typeof ragConfigurations.$inferSelect;