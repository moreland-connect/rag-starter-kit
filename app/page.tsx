'use client';

import { useState, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Settings, Upload, FileText } from 'lucide-react';
import ChatCitations from '@/components/ChatCitations';

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

export default function Chat() {
  const [settings, setSettings] = useState({
    model: 'gpt-4.1-2025-04-14',
    systemPrompt: `You are a helpful assistant with access to a knowledge base of database documentation and schema information.

IMPORTANT INSTRUCTIONS:
1. When a user asks a question, ALWAYS use the getInformation tool first to search your knowledge base
2. Only answer questions using information found in your knowledge base
3. If no relevant information is found, respond with "Sorry, I don&apos;t have information about that in my knowledge base."
4. When you find relevant information, provide detailed, helpful answers based on that information
5. For database questions, provide specific SQL examples when possible
6. Always cite the source of your information when possible
7. If the user asks about joining tables, look for information about the specific tables and their relationship keys

Your knowledge base contains database schema documentation, table definitions, and relationship information. Use the getInformation tool to search through them before answering any questions.`
  });

  const [retrievedChunks, setRetrievedChunks] = useState<ChunkData[]>([]);
  const [showCitations, setShowCitations] = useState(false);
  const [lastQuery, setLastQuery] = useState<string>('');
  const [wasLoading, setWasLoading] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    maxSteps: 3,
    body: {
      model: settings.model,
      systemPrompt: settings.systemPrompt,
    },
  });

  // Poll for chunks while loading
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isLoading && lastQuery) {
      // Start polling for chunks
      interval = setInterval(async () => {
        try {
          const response = await fetch('/api/get-current-chunks', {
            method: 'GET'
          });
          
          if (response.ok) {
            const data = await response.json();
            if (data.chunks && data.chunks.length > 0) {
              console.log('Polling found chunks:', data.chunks.length);
              setRetrievedChunks(data.chunks);
              setShowCitations(true);
              // Don't clear the interval yet, let it continue until loading finishes
            }
          }
        } catch (error) {
          console.error('Polling error:', error);
        }
      }, 500); // Poll every 500ms
    }

    // Cleanup on unmount
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isLoading, lastQuery]); // pollingInterval intentionally excluded to avoid infinite loops

  // Track loading state changes and fetch chunks when loading finishes (fallback)
  useEffect(() => {
    const getChunksForQuery = async () => {
      // Trigger when loading goes from true to false and we have a query
      if (wasLoading && !isLoading && lastQuery && messages.length > 0) {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage?.role === 'assistant') {
          // Only fetch if we don't already have chunks from polling
          if (retrievedChunks.length === 0) {
            try {
              console.log('Loading finished, fallback fetch for query:', lastQuery);
              const response = await fetch('/api/get-last-chunks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: lastQuery })
              });
              
              if (response.ok) {
                const data = await response.json();
                console.log('Fallback retrieved chunks:', data.chunks);
                if (data.chunks && data.chunks.length > 0) {
                  setRetrievedChunks(data.chunks);
                  setShowCitations(true);
                }
              }
            } catch (error) {
              console.error('Failed to fallback fetch chunks:', error);
            }
          }
        }
      }
    };

    getChunksForQuery();
  }, [isLoading, wasLoading, lastQuery, messages, retrievedChunks.length]);

  // Track loading state changes
  useEffect(() => {
    setWasLoading(isLoading);
  }, [isLoading]);

  const handleFormSubmit = (e: React.FormEvent) => {
    setLastQuery(input); // Store the query before submitting
    setRetrievedChunks([]); // Clear previous chunks
    setShowCitations(false); // Hide previous citations
    handleSubmit(e);
  };

  const handleSettingsChange = (newSettings: { model: string; systemPrompt: string }) => {
    setSettings(newSettings);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">RAG Chatbot</h1>
            <p className="text-gray-600">Ask questions about your ingested documents</p>
          </div>
          <div className="flex gap-3">
            <Link href="/ingestion">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Ingestion Settings
              </Button>
            </Link>
            <Link href="/rag-settings">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                RAG Settings
              </Button>
            </Link>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p>Start a conversation by asking a question about your documents.</p>
                  <p className="text-sm mt-2">Make sure you&apos;ve ingested some documents first!</p>
                </div>
              ) : (
                messages.map(m => (
                  <div key={m.id} className="whitespace-pre-wrap border rounded p-3">
                    <div>
                      <div className="font-bold text-sm text-gray-600 mb-1">{m.role.toUpperCase()}</div>
                      <div>
                        {m.parts.map((part, index) => {
                          if (part.type === 'text') {
                            return <p key={index} className="text-sm">{part.text}</p>;
                          } else if (part.type === 'tool-invocation') {
                            return (
                              <div key={index} className="text-xs bg-blue-100 text-blue-800 p-2 rounded mt-1">
                                🔍 Calling tool...
                              </div>
                            );
                          } else if (part.type === 'source') {
                            return (
                              <div key={index} className="text-xs bg-green-100 text-green-800 p-2 rounded mt-1">
                                ✅ Tool result received
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={handleFormSubmit} className="mt-auto">
              <div className="flex gap-3">
                <input
                  className="flex-1 p-3 border border-gray-300 rounded shadow-sm"
                  value={input}
                  placeholder="Ask about your ingested documents..."
                  onChange={handleInputChange}
                />
                <Button type="submit" disabled={!input.trim() || isLoading}>
                  {isLoading ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Citations Toggle */}
        {retrievedChunks.length > 0 && (
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCitations(!showCitations)}
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {showCitations ? 'Hide' : 'Show'} Sources ({retrievedChunks.length})
            </Button>
          </div>
        )}

        {/* Manual Test Button (for debugging) */}
        {process.env.NODE_ENV === 'development' && lastQuery && (
          <div className="mt-4 flex justify-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={async () => {
                try {
                  console.log('Manual fetch for query:', lastQuery);
                  const response = await fetch('/api/get-last-chunks', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: lastQuery })
                  });
                  
                  if (response.ok) {
                    const data = await response.json();
                    console.log('Manual retrieved chunks:', data.chunks);
                    if (data.chunks && data.chunks.length > 0) {
                      setRetrievedChunks(data.chunks);
                      setShowCitations(true);
                    }
                  }
                } catch (error) {
                  console.error('Manual fetch failed:', error);
                }
              }}
              className="flex items-center gap-2"
            >
              🔧 Manual Fetch Citations
            </Button>
          </div>
        )}

        {/* Citations Component */}
        <ChatCitations
          chunks={retrievedChunks}
          isVisible={showCitations}
          onToggle={() => setShowCitations(!showCitations)}
        />

        {/* Debug Info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-4 bg-gray-100 rounded text-xs">
            <div><strong>Last Query:</strong> {lastQuery}</div>
            <div><strong>Is Loading:</strong> {isLoading.toString()}</div>
            <div><strong>Was Loading:</strong> {wasLoading.toString()}</div>
            <div><strong>Loading Transition:</strong> {wasLoading && !isLoading ? 'Just finished!' : 'No transition'}</div>
            <div><strong>Retrieved Chunks:</strong> {retrievedChunks.length}</div>
            <div><strong>Show Citations:</strong> {showCitations.toString()}</div>
            <div><strong>Messages Count:</strong> {messages.length}</div>
            <div><strong>Last Message Role:</strong> {messages.length > 0 ? messages[messages.length - 1]?.role : 'none'}</div>
          </div>
        )}

        {/* Current Settings Display */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Current Model: <strong>{settings.model}</strong></p>
        </div>
      </div>
    </div>
  );
}
