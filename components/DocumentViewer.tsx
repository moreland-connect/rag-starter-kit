'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Copy, Search } from 'lucide-react';

interface DocumentViewerProps {
  fileName: string;
  highlightText?: string;
  isVisible: boolean;
  onClose: () => void;
}

interface DocumentData {
  content: string;
  fileName: string;
  fileSize: number;
  lastModified: string;
  contentType: string;
}

export default function DocumentViewer({ fileName, highlightText, isVisible, onClose }: DocumentViewerProps) {
  const [documentData, setDocument] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(highlightText || '');

  useEffect(() => {
    if (isVisible && fileName) {
      loadDocument();
    }
  }, [isVisible, fileName]);

  const loadDocument = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/get-source-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to load document');
      }

      const data = await response.json();
      setDocument(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load document');
    } finally {
      setLoading(false);
    }
  };

  const highlightTextInContent = (content: string, searchTerm: string) => {
    if (!searchTerm) return content;
    
    const regex = new RegExp(`(${searchTerm.split(' ').join('|')})`, 'gi');
    return content.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  };

  const copyToClipboard = async () => {
    if (documentData?.content) {
      try {
        await navigator.clipboard.writeText(documentData.content);
        // You could add a toast notification here
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  };

  const downloadDocument = () => {
    if (documentData?.content) {
      const blob = new Blob([documentData.content], { type: documentData.contentType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = documentData.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{fileName}</h2>
            {documentData && (
              <div className="text-sm text-gray-500">
                {formatFileSize(documentData.fileSize)} • 
                {documentData.lastModified && ` Modified: ${new Date(documentData.lastModified).toLocaleDateString()}`}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {documentData && (
              <>
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" onClick={downloadDocument}>
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </>
            )}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b bg-gray-50">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search in document..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-2 border rounded-md text-sm"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {loading && (
            <div className="flex items-center justify-center h-32">
              <div className="text-gray-500">Loading document...</div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-32">
              <div className="text-red-500 text-center">
                <div className="font-medium">Error loading document</div>
                <div className="text-sm mt-1">{error}</div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={loadDocument}
                  className="mt-2"
                >
                  Retry
                </Button>
              </div>
            </div>
          )}

          {documentData && !loading && !error && (
            <div className="space-y-4">
              {/* Document content */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div 
                  className="whitespace-pre-wrap text-sm font-mono leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightTextInContent(documentData.content, searchTerm)
                  }}
                />
              </div>

              {/* Document info */}
              <div className="text-xs text-gray-500 space-y-1">
                <div><strong>File:</strong> {documentData.fileName}</div>
                <div><strong>Type:</strong> {documentData.contentType}</div>
                <div><strong>Size:</strong> {formatFileSize(documentData.fileSize)}</div>
                {documentData.lastModified && (
                  <div><strong>Modified:</strong> {new Date(documentData.lastModified).toLocaleString()}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 