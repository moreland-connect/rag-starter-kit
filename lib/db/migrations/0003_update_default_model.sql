-- Update the default RAG configuration to use the correct model name
UPDATE "rag_configurations" 
SET 
  "model" = 'o4-mini',
  "updated_at" = NOW()
WHERE 
  "is_default" = true 
  AND "model" = 'gpt-4o-mini';

-- Also update any other configurations that might be using old model names
UPDATE "rag_configurations" 
SET 
  "model" = 'o3',
  "updated_at" = NOW()
WHERE 
  "model" = 'gpt-o3';

UPDATE "rag_configurations" 
SET 
  "model" = 'o4-mini',
  "updated_at" = NOW()
WHERE 
  "model" = 'gpt-o4-mini';