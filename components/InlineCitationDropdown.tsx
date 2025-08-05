'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, FileText, ExternalLink } from 'lucide-react';

interface ChunkData {
  id: number;
  embedding_id: number;
  similarity_score: string;
  chunk_rank: number;
  content: string;
  original_text: string;
  window: string;
  resource_id: number;
  chunk_index: number;
}

interface InlineCitationDropdownProps {
  chunks: ChunkData[];
  messageRole: string;
}

export default function InlineCitationDropdown({ chunks, messageRole }: InlineCitationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedChunks, setExpandedChunks] = useState<Set<number>>(new Set());

  if (!chunks || chunks.length === 0 || messageRole !== 'assistant') {
    return null;
  }

  const toggleChunk = (chunkId: number) => {
    const newExpanded = new Set(expandedChunks);
    if (newExpanded.has(chunkId)) {
      newExpanded.delete(chunkId);
    } else {
      newExpanded.add(chunkId);
    }
    setExpandedChunks(newExpanded);
  };

  const openSourceDocument = async (chunk: ChunkData) => {
    try {
      // This would open the document viewer - placeholder for now
      console.log('Opening source document for chunk:', chunk);
      // You can implement document viewer opening logic here
    } catch (error) {
      console.error('Error opening source document:', error);
    }
  };

  return (
    <div className="mt-3 border-t border-gray-200 pt-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 p-0 h-auto"
      >
        <FileText className="w-4 h-4" />
        <span>Relevant Chunks ({chunks.length})</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      {isOpen && (
        <div className="mt-3 space-y-2">
          {chunks.map((chunk, index) => (
            <div key={chunk.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Chunk Header */}
              <div 
                className="bg-gray-50 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => toggleChunk(chunk.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    Chunk {chunk.chunk_rank}: Resource {chunk.resource_id} 
                  </span>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                    Score: {parseFloat(chunk.similarity_score).toFixed(4)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openSourceDocument(chunk);
                    }}
                    className="p-1 h-6 w-6"
                    title="Show source document"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                  {expandedChunks.has(chunk.id) ? 
                    <ChevronUp className="w-4 h-4 text-gray-400" /> : 
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  }
                </div>
              </div>

              {/* Chunk Content */}
              {expandedChunks.has(chunk.id) && (
                <div className="px-4 py-3 bg-white">
                  <div className="space-y-3">
                    {/* Window Context */}
                    <div>
                      <h4 className="text-xs font-medium text-gray-600 mb-1">Window Context:</h4>
                      <div className="text-sm text-gray-800 bg-gray-50 p-3 rounded border">
                        {chunk.window}
                      </div>
                    </div>

                    {/* Original Text */}
                    <div>
                      <h4 className="text-xs font-medium text-gray-600 mb-1">Original Text:</h4>
                      <div className="text-sm text-gray-800 bg-blue-50 p-3 rounded border">
                        {chunk.original_text}
                      </div>
                    </div>

                    {/* Source Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                      <span>Resource ID: {chunk.resource_id}</span>
                      <span>Chunk Index: {chunk.chunk_index}</span>
                    </div>

                    {/* Show Source Document Button */}
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openSourceDocument(chunk)}
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Show source document for Chunk {chunk.chunk_rank}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}