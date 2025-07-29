import { sql } from "drizzle-orm";
import { text, varchar, timestamp, pgTable, serial, integer } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  file_name: varchar("file_name", { length: 255 }).notNull(),
  file_type: varchar("file_type", { length: 100 }).notNull(),
  file_size: integer("file_size").notNull(),
  chunk_count: integer("chunk_count").notNull(),
  storage_path: text("storage_path").notNull(),
  created_at: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
});

// Schema for resources - used to validate API requests
export const insertResourceSchema = createSelectSchema(resources)
  .extend({})
  .omit({
    id: true,
    created_at: true,
  });

// Type for resources - used to type API request params and within Components
export type NewResourceParams = z.infer<typeof insertResourceSchema>;
