import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/lib/env.mjs";

// Temporary debug - remove after fixing
console.log("Database URL check:", {
  hasUrl: !!env.DATABASE_URL,
  urlLength: env.DATABASE_URL?.length,
  urlStart: env.DATABASE_URL?.substring(0, 20) + "...",
});

let client;
try {
  client = postgres(env.DATABASE_URL, {
    max: 10, // Increase connection pool size for pooling
    idle_timeout: 20,
    connect_timeout: 10,
    ssl: 'require', // Enable SSL for Supabase
  });
  console.log("Database client created successfully");
} catch (error) {
  console.error("Failed to create database client:", error);
  throw error;
}

export const db = drizzle(client);

// Export schemas
export * from "./schema/resources";
export * from "./schema/embeddings";
export * from "./schema/rag_configurations";
export * from "./schema/conversations";
export * from "./schema/messages";
export * from "./schema/message_chunks";
export * from "./schema/message_feedback";
export * from "./schema/embedding_versions";

