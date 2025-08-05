-- Add window and original_text columns to embeddings table
ALTER TABLE "embeddings" 
ADD COLUMN IF NOT EXISTS "original_text" TEXT NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS "window" TEXT NOT NULL DEFAULT '';

-- Update existing records to have default values
UPDATE "embeddings" 
SET "original_text" = "content", 
    "window" = "content" 
WHERE "original_text" = '' OR "window" = ''; 