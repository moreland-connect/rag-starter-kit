'use client';

import { useState, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Settings, Upload, FileText, MessageCircle, Eye, EyeOff } from 'lucide-react';
import ChatCitations from '@/components/ChatCitations';
import ChatHistory from '@/components/ChatHistory';
import MessageFeedback from '@/components/MessageFeedback';
import CitationsSidebar from '@/components/CitationsSidebar';

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

interface Conversation {
  id: number;
  uuid: string;
  title: string;
  message_count: number;
  last_message_at: string;
  created_at: string;
  is_archived: boolean;
  positive_feedback: number;
  negative_feedback: number;
}

interface ExtendedMessage {
  id: string;
  role: string;
  content: string;
  parts?: any[];
  chunks?: any[];
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
  const [showChatHistory, setShowChatHistory] = useState(true); // Always show by default
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [userId] = useState('anonymous'); // For now, using anonymous user
  const [showCitationsSidebar, setShowCitationsSidebar] = useState(false);
  const [currentMessageChunks, setCurrentMessageChunks] = useState<any[]>([]);
  const [chatHistoryRefreshTrigger, setChatHistoryRefreshTrigger] = useState(0);

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: '/api/chat',
    maxSteps: 3,
    body: {
      model: settings.model,
      systemPrompt: settings.systemPrompt,
      conversationId: currentConversation?.id,
      userId: userId,
    },
    id: currentConversation?.id?.toString(), // Add this to prevent chat duplicates
    onResponse: (response) => {
      // Get conversation ID from response headers
      const conversationIdHeader = response.headers.get('X-Conversation-ID');
      if (conversationIdHeader && !currentConversation) {
        console.log('🆕 New conversation created:', conversationIdHeader);
        // Create a temporary conversation object to track the ID
        const newConversation = {
          id: parseInt(conversationIdHeader),
          uuid: '',
          title: input.substring(0, 50) + (input.length > 50 ? '...' : ''),
          message_count: 0,
          last_message_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
          is_archived: false,
          positive_feedback: 0,
          negative_feedback: 0
        };
        setCurrentConversation(newConversation);
        // Trigger chat history refresh
        setChatHistoryRefreshTrigger(prev => prev + 1);
        console.log('✅ Set current conversation to:', newConversation.id);
      }
    }
  });

  // Poll for chunks while loading and inject them into the last message
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isLoading && lastQuery && messages.length > 0) {
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
              
              // Update the last assistant message with chunks if it exists
              if (messages.length > 0) {
                const lastMessage = messages[messages.length - 1];
                if (lastMessage.role === 'assistant') {
                  const updatedMessages = [...messages];
                  const formattedChunks = data.chunks.map((chunk: any, index: number) => ({
                    id: parseInt(chunk.id || '0'),
                    embedding_id: parseInt(chunk.id || '0'),
                    similarity_score: chunk.similarity?.toString() || '0.5',
                    chunk_rank: index + 1,
                    content: chunk.content || '',
                    original_text: chunk.originalText || chunk.content || '',
                    window: chunk.window || chunk.content || '',
                    resource_id: chunk.sourceId || 1,
                    chunk_index: chunk.chunkIndex || index
                  }));
                  
                  (updatedMessages[updatedMessages.length - 1] as any).chunks = formattedChunks;
                  setMessages(updatedMessages);
                  console.log('Updated last message with chunks:', formattedChunks.length);
                }
              }
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
  }, [isLoading, lastQuery, messages.length]); // pollingInterval intentionally excluded to avoid infinite loops

  // Track loading state changes and fetch chunks when loading finishes (fallback)
  useEffect(() => {
    const getChunksForQuery = async () => {
      // Trigger when loading goes from true to false and we have a query
      if (wasLoading && !isLoading && lastQuery && messages.length > 0) {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage?.role === 'assistant') {
          // Check if the last message already has chunks
          const messageHasChunks = (lastMessage as any).chunks && (lastMessage as any).chunks.length > 0;
          
          // Only fetch if we don't already have chunks from polling AND message doesn't have chunks
          if (retrievedChunks.length === 0 && !messageHasChunks) {
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
                  
                  // Also update the last message with chunks
                  const updatedMessages = [...messages];
                  (updatedMessages[updatedMessages.length - 1] as any).chunks = data.chunks.map((chunk: any, index: number) => ({
                    id: parseInt(chunk.id),
                    embedding_id: parseInt(chunk.id),
                    similarity_score: chunk.similarity.toString(),
                    chunk_rank: index + 1,
                    content: chunk.content,
                    original_text: chunk.originalText || chunk.content,
                    window: chunk.window || chunk.content,
                    resource_id: chunk.sourceId || 1,
                    chunk_index: chunk.chunkIndex || index
                  }));
                  setMessages(updatedMessages);
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
    // If we were loading and now we're not, the message is finished
    if (wasLoading && !isLoading && currentConversation?.id) {
      console.log('💬 Message completed, refreshing chat history');
      // Small delay to ensure backend has finished saving
      setTimeout(() => {
        setChatHistoryRefreshTrigger(prev => prev + 1);
      }, 500);
    }
    setWasLoading(isLoading);
  }, [isLoading, wasLoading, currentConversation?.id]);

  const handleFormSubmit = (e: React.FormEvent) => {
    setLastQuery(input); // Store the query before submitting
    setRetrievedChunks([]); // Clear previous chunks
    setShowCitations(false); // Hide previous citations
    handleSubmit(e);
  };

  const handleSettingsChange = (newSettings: { model: string; systemPrompt: string }) => {
    setSettings(newSettings);
  };

  const handleSelectConversation = async (conversation: Conversation) => {
    try {
      console.log('🔄 Loading conversation:', conversation.id);
      
      // Clear current state first
      setRetrievedChunks([]);
      setShowCitationsSidebar(false);
      setCurrentMessageChunks([]);
      
      // Fetch conversation messages
      const response = await fetch(`/api/conversations/${conversation.id}`);
      
      if (!response.ok) {
        throw new Error('Failed to load conversation');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setCurrentConversation(conversation);
        
        // Convert database messages to chat format
        const chatMessages = data.messages.map((msg: any) => ({
          id: msg.id.toString(),
          role: msg.role,
          content: msg.content,
          parts: [{ type: 'text', text: msg.content }],
          chunks: msg.chunks || [] // Include chunks for historical messages
        }));
        
        setMessages(chatMessages);
        console.log(`✅ Loaded ${chatMessages.length} messages for conversation ${conversation.id}`);
      }
    } catch (error) {
      console.error('❌ Error loading conversation:', error);
    }
  };

  const handleNewConversation = () => {
    console.log('🆕 Starting new conversation');
    setCurrentConversation(null);
    setMessages([]);
    setRetrievedChunks([]);
    setShowCitations(false);
    setShowCitationsSidebar(false);
    setCurrentMessageChunks([]);
    // Note: Don't trigger refresh here as it will be triggered when new conversation is created
  };

  const handleFeedbackSubmitted = (messageId: number) => {
    // Optionally refresh conversation data or update local state
    console.log('Feedback submitted for message:', messageId);
  };

  const handleShowSources = (chunks: any[]) => {
    setCurrentMessageChunks(chunks);
    setShowCitationsSidebar(true);
  };

  const closeCitationsSidebar = () => {
    setShowCitationsSidebar(false);
    setCurrentMessageChunks([]);
  };

  return (
    <div className="min-h-screen flex">
      {/* Chat History Sidebar - Always visible like ChatGPT */}
      <div className="w-80 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Chat History</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNewConversation}
              className="text-white hover:bg-gray-700"
            >
              New Chat
            </Button>
          </div>
        </div>
        
                            <div className="flex-1 overflow-hidden">
                      <ChatHistory
                        onSelectConversation={handleSelectConversation}
                        currentConversationId={currentConversation?.id}
                        userId={userId}
                        refreshTrigger={chatHistoryRefreshTrigger}
                      />
                    </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {currentConversation?.title || 'RAG Chatbot'}
              </h1>
              <p className="text-sm text-gray-600">
                Ask questions about your ingested documents
              </p>
            </div>
            
            <div className="flex gap-3">
              <Link href="/ingestion">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Ingestion
                </Button>
              </Link>
              <Link href="/rag-settings">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-6">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-20">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg mb-2">Start a conversation</p>
                <p className="text-sm">Ask questions about your ingested documents</p>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map(m => (
                  <div key={m.id} className="group">
                    {/* User Message */}
                    {m.role === 'user' && (
                      <div className="flex gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                          U
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 text-base leading-relaxed">
                            {m.content}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Assistant Message */}
                    {m.role === 'assistant' && (
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-medium">
                          A
                        </div>
                        <div className="flex-1">
                          {/* Tool calls */}
                          {m.parts?.map((part, index) => {
                            if (part.type === 'tool-invocation') {
                              // Check if message is complete (has text content) to show completion
                              const isComplete = m.content && m.content.length > 0;
                              
                              return (
                                <div key={index} className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                  <div className="flex items-center gap-2 text-blue-800">
                                    {isComplete ? (
                                      <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                      </div>
                                    ) : (
                                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                    )}
                                    <span className="text-sm font-medium">
                                      {isComplete ? 'Knowledge base searched' : 'Searching knowledge base...'}
                                    </span>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          })}
                          
                          {/* Main message content */}
                          <div className="text-gray-900 text-base leading-relaxed whitespace-pre-wrap">
                            {m.parts?.find(p => p.type === 'text')?.text || m.content}
                          </div>
                          
                          {/* Message actions */}
                          <div className="flex items-center gap-3 mt-4">
                            <MessageFeedback
                              messageId={parseInt(m.id)}
                              userId={userId}
                              onFeedbackSubmitted={() => handleFeedbackSubmitted(parseInt(m.id))}
                            />
                            
                            {/* Sources button - Always show for assistant messages */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={async () => {
                                const chunks = (m as ExtendedMessage).chunks || [];
                                
                                if (chunks.length > 0) {
                                  console.log('Using message chunks:', chunks);
                                  handleShowSources(chunks);
                                } else if (retrievedChunks.length > 0) {
                                                                                console.log('Using retrieved chunks fallback:', retrievedChunks);
                                              handleShowSources(retrievedChunks.map((chunk: any, index) => ({
                                                id: parseInt(chunk.id?.toString() || '0'),
                                                embedding_id: parseInt(chunk.id?.toString() || '0'),
                                                similarity_score: chunk.similarity?.toString() || '0',
                                                chunk_rank: index + 1,
                                                content: chunk.content || '',
                                                original_text: chunk.originalText || chunk.content || '',
                                                window: chunk.originalText || chunk.content || '',
                                                resource_id: chunk.sourceId || 1,
                                                chunk_index: chunk.chunkIndex || index
                                              })));
                                } else {
                                  // Try to fetch chunks for this specific message
                                  console.log('Fetching chunks for message:', m.id);
                                  try {
                                    const response = await fetch('/api/get-current-chunks');
                                    const data = await response.json();
                                    if (data.chunks && data.chunks.length > 0) {
                                      console.log('Found current chunks:', data.chunks);
                                                                                        handleShowSources(data.chunks.map((chunk: any, index: number) => ({
                                                    id: parseInt(chunk.id?.toString() || '0'),
                                                    embedding_id: parseInt(chunk.id?.toString() || '0'),
                                                    similarity_score: chunk.similarity?.toString() || '0',
                                                    chunk_rank: index + 1,
                                                    content: chunk.content || '',
                                                    original_text: chunk.originalText || chunk.content || '',
                                                    window: chunk.originalText || chunk.content || '',
                                                    resource_id: chunk.sourceId || 1,
                                                    chunk_index: chunk.chunkIndex || index
                                                  })));
                                    } else {
                                      alert('No sources available for this message');
                                    }
                                  } catch (error) {
                                    console.error('Error fetching chunks:', error);
                                    alert('Error loading sources');
                                  }
                                }
                              }}
                              className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-1"
                            >
                              <FileText className="w-4 h-4 mr-1" />
                              Sources
                              {(() => {
                                const chunks = (m as ExtendedMessage).chunks || [];
                                const totalChunks = chunks.length || retrievedChunks.length;
                                return totalChunks > 0 ? ` (${totalChunks})` : '';
                              })()}
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
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <form onSubmit={handleFormSubmit}>
              <div className="flex gap-3">
                <input
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={input}
                  placeholder="Ask about your ingested documents..."
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="px-6"
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </form>
            
                                    {/* Debug info in development */}
                        {process.env.NODE_ENV === 'development' && (
                          <div className="mt-2 text-xs text-gray-500 space-y-1">
                            <div>
                              Retrieved chunks: {retrievedChunks.length} |
                              Last query: {lastQuery} |
                              Loading: {isLoading.toString()}
                            </div>
                            <div>
                              Last message chunks: {messages.length > 0 ? ((messages[messages.length - 1] as any).chunks?.length || 0) : 0}
                            </div>
                            <div className="flex gap-2 mt-1">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={async () => {
                                  try {
                                    const response = await fetch('/api/debug-chunks');
                                    const data = await response.json();
                                    console.log('Debug chunks:', data);
                                    alert(`Current chunks: ${data.count}`);
                                  } catch (error) {
                                    console.error('Debug error:', error);
                                  }
                                }}
                              >
                                🔧 Debug Chunks
                              </Button>
                              
                              {currentConversation?.id && (
                                <>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={async () => {
                                      try {
                                        const response = await fetch(`/api/debug-conversation/${currentConversation.id}`);
                                        const data = await response.json();
                                        console.log('Debug conversation:', data);
                                        alert(`Conversation: ${data.debug.messageCount} messages, ${data.debug.chunkCount} chunks`);
                                      } catch (error) {
                                        console.error('Debug error:', error);
                                      }
                                    }}
                                  >
                                    🔧 Debug Conversation
                                  </Button>
                                  
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={async () => {
                                      try {
                                        const response = await fetch(`/api/debug-message-sequence/${currentConversation.id}`);
                                        const data = await response.json();
                                        console.log('Debug message sequence:', data);
                                        alert(`Messages: ${data.messageCount}, Gaps: ${data.hasSequenceGaps}, Duplicates: ${data.debug.duplicateSequences.length}`);
                                      } catch (error) {
                                        console.error('Debug error:', error);
                                      }
                                    }}
                                  >
                                    🔧 Debug Sequence
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        )}
          </div>
        </div>
      </div>

      {/* Citations Sidebar */}
      <CitationsSidebar
        isOpen={showCitationsSidebar}
        onClose={closeCitationsSidebar}
        chunks={currentMessageChunks}
      />
    </div>
  );
}
