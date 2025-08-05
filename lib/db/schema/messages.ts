import { sql } from "drizzle-orm";
import { text, varchar, timestamp, pgTable, integer, decimal, uuid, check, serial } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { conversations } from "./conversations";

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  conversation_id: integer("conversation_id").notNull().references(() => conversations.id, { onDelete: "cascade" }),
  
  // Message content
  role: varchar("role", { length: 20 }).notNull(),
  content: text("content").notNull(),
  
  // RAG-specific data for assistant messages
  embedding_version_id: integer("embedding_version_id"), // Reference to embedding version used
  processing_time: integer("processing_time"), // milliseconds
  token_count: integer("token_count"),
  
  // Message metadata
  sequence_number: integer("sequence_number").notNull(),
  created_at: timestamp("created_at").notNull().default(sql`now()`),
  
  // Performance tracking
  relevance_score: decimal("relevance_score", { precision: 3, scale: 2 }), // Computed relevance score
}, (table) => ({
  roleCheck: check("role_check", sql`${table.role} IN ('user', 'assistant', 'system')`),
  sequenceCheck: check("sequence_check", sql`${table.sequence_number} > 0`),
}));

// Schema for creating new messages
export const insertMessageSchema = createSelectSchema(messages)
  .extend({
    role: z.enum(["user", "assistant", "system"]),
    sequence_number: z.number().positive(),
    relevance_score: z.number().min(0).max(1).optional(),
  })
  .omit({
    id: true,
    created_at: true,
  });

// Schema for updating messages
export const updateMessageSchema = insertMessageSchema.partial();

// Types
export type NewMessageParams = z.infer<typeof insertMessageSchema>;
export type UpdateMessageParams = z.infer<typeof updateMessageSchema>;
export type Message = typeof messages.$inferSelect;