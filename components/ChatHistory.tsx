'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Archive, Trash2, Calendar } from 'lucide-react';

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

interface ChatHistoryProps {
  onSelectConversation: (conversation: Conversation) => void;
  currentConversationId?: number;
  userId?: string;
  refreshTrigger?: number; // Add this to force refresh from parent
}

export default function ChatHistory({ onSelectConversation, currentConversationId, userId, refreshTrigger }: ChatHistoryProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchConversations = async () => {
    setLoading(true);
    setError('');
    
    try {
      const params = new URLSearchParams();
      if (userId) params.append('userId', userId);
      if (showArchived) params.append('includeArchived', 'true');
      
      const response = await fetch(`/api/conversations?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch conversations');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setConversations(data.conversations);
      } else {
        throw new Error(data.error || 'Failed to fetch conversations');
      }
    } catch (err) {
      console.error('Error fetching conversations:', err);
      setError(err instanceof Error ? err.message : 'Failed to load conversations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, [userId, showArchived]);

  // Refresh when trigger changes
  useEffect(() => {
    if (refreshTrigger && refreshTrigger > 0) {
      console.log('🔄 Chat history refreshing due to trigger:', refreshTrigger);
      fetchConversations();
    }
  }, [refreshTrigger]);

  const handleArchiveConversation = async (conversationId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    
    try {
      const response = await fetch(`/api/conversations/${conversationId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // Refresh conversations list
        fetchConversations();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to archive conversation');
      }
    } catch (err) {
      console.error('Error archiving conversation:', err);
      setError(err instanceof Error ? err.message : 'Failed to archive conversation');
    }
  };

  // Filter conversations based on search term
  const filteredConversations = conversations.filter(conv =>
    conv.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group conversations by date
  const groupedConversations = filteredConversations.reduce((groups, conv) => {
    const date = new Date(conv.last_message_at);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    let groupKey: string;
    if (date.toDateString() === today.toDateString()) {
      groupKey = 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      groupKey = 'Yesterday';
    } else if (date > new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)) {
      groupKey = 'This Week';
    } else if (date > new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)) {
      groupKey = 'This Month';
    } else {
      groupKey = 'Older';
    }
    
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(conv);
    return groups;
  }, {} as Record<string, Conversation[]>);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getFeedbackColor = (positive: number, negative: number) => {
    const total = positive + negative;
    if (total === 0) return 'text-gray-400';
    const ratio = positive / total;
    if (ratio >= 0.8) return 'text-green-500';
    if (ratio >= 0.6) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowArchived(!showArchived)}
            className={`text-gray-300 hover:text-white hover:bg-gray-700 ${showArchived ? 'bg-gray-700 text-white' : ''}`}
          >
            <Archive className="w-4 h-4 mr-2" />
            {showArchived ? 'Hide Archived' : 'Show Archived'}
          </Button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-red-50 border-b border-red-200">
          <p className="text-sm text-red-600">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchConversations}
            className="mt-2"
          >
            Retry
          </Button>
        </div>
      )}

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-center text-gray-400">
            <div className="animate-spin w-6 h-6 border-2 border-gray-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            Loading conversations...
          </div>
        ) : filteredConversations.length === 0 ? (
          <div className="p-4 text-center text-gray-400">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-gray-600" />
            <p className="text-sm">
              {searchTerm ? 'No conversations found' : 'No conversations yet'}
            </p>
          </div>
        ) : (
          <div className="px-2">
            {Object.entries(groupedConversations).map(([groupName, convs]) => (
              <div key={groupName} className="mb-4">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide px-2 mb-2">
                  {groupName}
                </h3>
                
                {convs.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => onSelectConversation(conversation)}
                    className={`group relative p-3 rounded-lg cursor-pointer transition-colors ${
                      currentConversationId === conversation.id
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium truncate">
                            {conversation.title}
                          </h4>
                          {conversation.is_archived && (
                            <Archive className="w-3 h-3 text-gray-500" />
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{conversation.message_count} messages</span>
                          <span>{formatTime(conversation.last_message_at)}</span>
                        </div>
                        
                        {/* Feedback indicator */}
                        {(conversation.positive_feedback > 0 || conversation.negative_feedback > 0) && (
                          <div className="flex items-center gap-1 mt-1">
                            <span className={`text-xs ${getFeedbackColor(conversation.positive_feedback, conversation.negative_feedback)}`}>
                              👍 {conversation.positive_feedback} 👎 {conversation.negative_feedback}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Archive button */}
                      {!conversation.is_archived && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => handleArchiveConversation(conversation.id, e)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 h-6 w-6 text-gray-400 hover:text-white"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{filteredConversations.length} conversations</span>
                                <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          console.log('🔄 Manual refresh triggered');
                          fetchConversations();
                        }}
                        className="h-6 px-2 text-gray-400 hover:text-white hover:bg-gray-700"
                        disabled={loading}
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {loading ? 'Refreshing...' : 'Refresh'}
                      </Button>
        </div>
      </div>
    </div>
  );
}