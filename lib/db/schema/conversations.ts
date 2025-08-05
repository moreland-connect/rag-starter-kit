import { sql } from "drizzle-orm";
import { text, varchar, timestamp, pgTable, integer, boolean, uuid, serial } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { ragConfigurations } from "./rag_configurations";

export const conversations = pgTable("conversations", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").unique().default(sql`gen_random_uuid()`),
  title: varchar("title", { length: 255 }),
  
  // Configuration tracking
  rag_config_id: integer("rag_config_id").references(() => ragConfigurations.id),
  
  // Session metadata
  session_id: varchar("session_id", { length: 255 }),
  user_id: varchar("user_id", { length: 255 }),
  
  // Analytics
  message_count: integer("message_count").default(0),
  total_tokens_used: integer("total_tokens_used").default(0),
  avg_response_time: integer("avg_response_time"), // milliseconds
  
  // Feedback aggregation
  positive_feedback: integer("positive_feedback").default(0),
  negative_feedback: integer("negative_feedback").default(0),
  
  // Conversation limits and archival
  max_messages: integer("max_messages").default(1000),
  is_auto_archived: boolean("is_auto_archived").default(false),
  
  // Timestamps
  created_at: timestamp("created_at").notNull().default(sql`now()`),
  updated_at: timestamp("updated_at").notNull().default(sql`now()`),
  last_message_at: timestamp("last_message_at").notNull().default(sql`now()`),
  
  // Status
  is_archived: boolean("is_archived").default(false),
});

// Schema for creating new conversations
export const insertConversationSchema = createSelectSchema(conversations)
  .extend({})
  .omit({
    id: true,
    uuid: true,
    message_count: true,
    total_tokens_used: true,
    avg_response_time: true,
    positive_feedback: true,
    negative_feedback: true,
    is_auto_archived: true,
    created_at: true,
    updated_at: true,
    last_message_at: true,
  });

// Schema for updating conversations
export const updateConversationSchema = insertConversationSchema.partial();

// Types
export type NewConversationParams = z.infer<typeof insertConversationSchema>;
export type UpdateConversationParams = z.infer<typeof updateConversationSchema>;
export type Conversation = typeof conversations.$inferSelect;