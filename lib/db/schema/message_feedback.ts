import { sql } from "drizzle-orm";
import { text, varchar, timestamp, pgTable, integer, inet, unique, check, serial } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { messages } from "./messages";
import { conversations } from "./conversations";

export const messageFeedback = pgTable("message_feedback", {
  id: serial("id").primaryKey(),
  message_id: integer("message_id").notNull().references(() => messages.id, { onDelete: "cascade" }),
  conversation_id: integer("conversation_id").notNull().references(() => conversations.id, { onDelete: "cascade" }),
  
  // Feedback data
  feedback_type: varchar("feedback_type", { length: 20 }).notNull(),
  feedback_comment: text("feedback_comment"),
  
  // Context
  user_id: varchar("user_id", { length: 255 }),
  ip_address: inet("ip_address"),
  user_agent: text("user_agent"),
  
  // Timestamps
  created_at: timestamp("created_at").notNull().default(sql`now()`),
}, (table) => ({
  feedbackTypeCheck: check("feedback_type_check", sql`${table.feedback_type} IN ('positive', 'negative', 'neutral')`),
  userFeedbackUnique: unique("user_feedback_unique").on(table.message_id, table.user_id),
}));

// Schema for creating new message feedback
export const insertMessageFeedbackSchema = createSelectSchema(messageFeedback)
  .extend({
    feedback_type: z.enum(["positive", "negative", "neutral"]),
  })
  .omit({
    id: true,
    created_at: true,
  });

// Types
export type NewMessageFeedbackParams = z.infer<typeof insertMessageFeedbackSchema>;
export type MessageFeedback = typeof messageFeedback.$inferSelect;