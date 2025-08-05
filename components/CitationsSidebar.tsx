'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronDown, ChevronUp, ExternalLink, FileText, GripVertical } from 'lucide-react';

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

interface CitationsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  chunks: ChunkData[];
}

export default function CitationsSidebar({ isOpen, onClose, chunks }: CitationsSidebarProps) {
  const [expandedChunks, setExpandedChunks] = useState<Set<number>>(new Set());
  const [width, setWidth] = useState(384); // Default width in pixels (w-96 = 384px)
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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
      console.log('Opening source document for chunk:', chunk);
      // Implement document viewer logic here
    } catch (error) {
      console.error('Error opening source document:', error);
    }
  };

  // Handle resize functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const newWidth = window.innerWidth - e.clientX;
      // Constrain width between 300px and 800px
      const constrainedWidth = Math.max(300, Math.min(800, newWidth));
      setWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: `${width}px` }}
      >
        {/* Resize Handle */}
        <div
          className="w-1 bg-gray-200 hover:bg-gray-300 cursor-col-resize flex items-center justify-center group"
          onMouseDown={handleMouseDown}
        >
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="w-3 h-3 text-gray-400" />
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Sources</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {chunks.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No sources available</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  {chunks.length} source{chunks.length !== 1 ? 's' : ''} found
                </p>
                
                {chunks.map((chunk, index) => (
                  <div key={chunk.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Chunk Header */}
                    <div 
                      className="bg-gray-50 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChunk(chunk.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Source {chunk.chunk_rank}
                          </h4>
                          <p className="text-xs text-gray-500">
                            Similarity: {parseFloat(chunk.similarity_score).toFixed(3)} | 
                            Resource ID: {chunk.resource_id} | 
                            Chunk: {chunk.chunk_index}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              openSourceDocument(chunk);
                            }}
                            className="text-blue-600 hover:text-blue-800 p-1"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          {expandedChunks.has(chunk.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Chunk Content */}
                    <div className="px-4 py-3">
                      {/* Always show truncated content */}
                      <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                        {chunk.content}
                      </p>

                      {/* Expanded details */}
                      {expandedChunks.has(chunk.id) && (
                        <div className="mt-4 space-y-3 text-xs text-gray-600 bg-gray-50 p-3 rounded border-t">
                          <div>
                            <strong className="text-gray-800">Full Content:</strong>
                            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{chunk.content}</p>
                          </div>
                          
                          <div>
                            <strong className="text-gray-800">Original Text:</strong>
                            <p className="mt-1 text-gray-700">{chunk.original_text}</p>
                          </div>
                          
                          <div>
                            <strong className="text-gray-800">Context Window:</strong>
                            <p className="mt-1 text-gray-700">{chunk.window}</p>
                          </div>
                          
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Embedding ID: {chunk.embedding_id}</span>
                            <span>Rank: {chunk.chunk_rank}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}