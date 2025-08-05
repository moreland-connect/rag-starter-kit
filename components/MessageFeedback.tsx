'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface MessageFeedbackProps {
  messageId: number;
  userId?: string;
  initialFeedback?: 'positive' | 'negative' | null;
  onFeedbackSubmitted?: (feedback: { type: string; action: string }) => void;
}

export default function MessageFeedback({ 
  messageId, 
  userId = 'anonymous', 
  initialFeedback = null,
  onFeedbackSubmitted 
}: MessageFeedbackProps) {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(initialFeedback);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>('');

  const submitFeedback = async (feedbackType: 'positive' | 'negative') => {
    if (submitting) return;

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(`/api/messages/${messageId}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback_type: feedbackType,
          user_id: userId,
          ip_address: null, // Optional field
          user_agent: navigator.userAgent
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit feedback');
      }

      const data = await response.json();
      
      if (data.success) {
        setFeedback(feedbackType);
        onFeedbackSubmitted?.({
          type: feedbackType,
          action: data.action // 'created' or 'updated'
        });
      } else {
        throw new Error(data.error || 'Failed to submit feedback');
      }
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit feedback');
    } finally {
      setSubmitting(false);
    }
  };

  const handleFeedbackClick = (feedbackType: 'positive' | 'negative') => {
    // If clicking the same feedback type, remove it
    if (feedback === feedbackType) {
      // For now, we don't support removing feedback
      // Could be implemented by sending a 'neutral' feedback type
      return;
    }
    
    submitFeedback(feedbackType);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Thumbs up button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleFeedbackClick('positive')}
        disabled={submitting}
        className={`h-8 w-8 p-0 transition-colors ${
          feedback === 'positive' 
            ? 'bg-green-100 text-green-600 hover:bg-green-200' 
            : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
        }`}
        title="Good response"
      >
        <ThumbsUp className="w-4 h-4" />
      </Button>

      {/* Thumbs down button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleFeedbackClick('negative')}
        disabled={submitting}
        className={`h-8 w-8 p-0 transition-colors ${
          feedback === 'negative' 
            ? 'bg-red-100 text-red-600 hover:bg-red-200' 
            : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
        }`}
        title="Poor response"
      >
        <ThumbsDown className="w-4 h-4" />
      </Button>

      {/* Loading indicator */}
      {submitting && (
        <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      )}

      {/* Error display */}
      {error && (
        <div className="text-xs text-red-500 max-w-32 truncate" title={error}>
          {error}
        </div>
      )}
    </div>
  );
}