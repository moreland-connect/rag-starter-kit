'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, FileText, ExternalLink } from 'lucide-react';
import DocumentViewer from './DocumentViewer';

interface ChunkData {
  content: string;
  originalText: string;
  similarity: number;
  chunkIndex: number;
  fileName: string;
  fileType: string;
  createdAt: string;
  sourceId: number;
}

interface ChatCitationsProps {
  chunks: ChunkData[];
  isVisible: boolean;
  onToggle: () => void;
}

export default function ChatCitations({ chunks, isVisible, onToggle }: ChatCitationsProps) {
  const [expandedChunks, setExpandedChunks] = useState<Set<number>>(new Set());
  const [documentViewer, setDocumentViewer] = useState<{
    fileName: string;
    highlightText: string;
    isVisible: boolean;
  }>({
    fileName: '',
    highlightText: '',
    isVisible: false
  });

  const toggleChunk = (index: number) => {
    const newExpanded = new Set(expandedChunks);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedChunks(newExpanded);
  };

  const openDocumentViewer = (fileName: string, highlightText: string) => {
    setDocumentViewer({
      fileName,
      highlightText,
      isVisible: true
    });
  };

  const closeDocumentViewer = () => {
    setDocumentViewer(prev => ({ ...prev, isVisible: false }));
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return 'Unknown date';
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query.split(' ').join('|')})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="mt-6 border rounded-lg bg-gray-50">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Retrieved Sources ({chunks.length})
          </h3>
          <Button variant="ghost" size="sm" onClick={onToggle}>
            <ChevronUp className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4 space-y-3">
          {chunks.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No sources retrieved</p>
          ) : (
            chunks.map((chunk, index) => (
              <div key={index} className="border rounded-lg bg-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">
                      Chunk {index + 1}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Score: {chunk.similarity.toFixed(3)}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleChunk(index)}
                  >
                    {expandedChunks.has(index) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                <div className="mb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">{chunk.fileName}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {chunk.fileType}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(chunk.createdAt)}
                    </span>
                  </div>
                </div>

                {expandedChunks.has(index) && (
                  <div className="space-y-3 mt-3 pt-3 border-t">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Original Text:
                      </h4>
                      <div 
                        className="text-sm bg-gray-50 p-3 rounded border"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(chunk.originalText, '')
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Context Window:
                      </h4>
                      <div 
                        className="text-sm bg-blue-50 p-3 rounded border"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(chunk.content, '')
                        }}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs"
                        onClick={() => openDocumentViewer(chunk.fileName, chunk.originalText)}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Source Document
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs"
                        onClick={() => navigator.clipboard.writeText(chunk.originalText)}
                      >
                        Copy Text
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Document Viewer Modal */}
      <DocumentViewer
        fileName={documentViewer.fileName}
        highlightText={documentViewer.highlightText}
        isVisible={documentViewer.isVisible}
        onClose={closeDocumentViewer}
      />
    </>
  );
} 