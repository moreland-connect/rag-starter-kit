'use client';

import { useState } from 'react';

export default function RagDebug() {
  const [isExpanded, setIsExpanded] = useState(false);

  const systemInfo = {
    model: 'GPT-4o (OpenAI)',
    embeddingModel: 'text-embedding-ada-002',
    maxSteps: 3,
    chunkingStrategy: 'Sentence-based splitting',
    similarityThreshold: '0.5',
    maxResults: 4,
  };

  const systemPrompt = `You are a helpful assistant with access to a knowledge base of documents. 

IMPORTANT INSTRUCTIONS:
1. When a user asks a question, ALWAYS use the getInformation tool first to search your knowledge base
2. Only answer questions using information found in your knowledge base
3. If no relevant information is found, respond with "Sorry, I don't have information about that in my knowledge base."
4. When you find relevant information, provide detailed, helpful answers based on that information
5. Always cite the source of your information when possible

Your knowledge base contains documentation and data files. Use the getInformation tool to search through them before answering any questions.`;

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">RAG System Info</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      
      <div className="space-y-3">
        <div>
          <span className="font-medium">Model:</span> {systemInfo.model}
        </div>
        <div>
          <span className="font-medium">Embeddings:</span> {systemInfo.embeddingModel}
        </div>
        <div>
          <span className="font-medium">Max Steps:</span> {systemInfo.maxSteps}
        </div>
        <div>
          <span className="font-medium">Chunking:</span> {systemInfo.chunkingStrategy}
        </div>
        <div>
          <span className="font-medium">Similarity Threshold:</span> {systemInfo.similarityThreshold}
        </div>
        <div>
          <span className="font-medium">Max Results:</span> {systemInfo.maxResults}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-medium mb-2">System Prompt:</h4>
          <div className="text-xs bg-gray-100 p-2 rounded whitespace-pre-wrap max-h-40 overflow-y-auto">
            {systemPrompt}
          </div>
        </div>
      )}
    </div>
  );
} 