'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ClearDataButtonProps {
  onResult?: (result: any) => void;
}

export default function ClearDataButton({ onResult }: ClearDataButtonProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleClearData = async () => {
    if (!confirm('Are you sure you want to clear all embeddings and resources? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/clear-embeddings', {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`✅ ${data.message}`);
        onResult?.({ success: true, message: data.message });
      } else {
        setResult(`❌ ${data.error}`);
        onResult?.({ success: false, error: data.error });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to clear data';
      setResult(`❌ ${errorMessage}`);
      onResult?.({ success: false, error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <Button 
        onClick={handleClearData} 
        disabled={loading}
        variant="destructive"
        size="sm"
        className="w-full"
      >
        {loading ? 'Clearing...' : 'Clear All Embeddings & Resources'}
      </Button>
      {result && (
        <p className={`text-sm ${result.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {result}
        </p>
      )}
    </div>
  );
} 