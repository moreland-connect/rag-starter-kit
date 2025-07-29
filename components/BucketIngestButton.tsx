'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface BucketIngestButtonProps {
  onResult?: (result: any) => void;
}

export default function BucketIngestButton({ onResult }: BucketIngestButtonProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleIngest = async () => {
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/ingest-bucket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bucketName: 'docs' }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`✅ ${data.message}`);
        onResult?.({ 
          success: true, 
          message: data.message, 
          summary: data.summary 
        });
      } else {
        setResult(`❌ ${data.error}`);
        onResult?.({ success: false, error: data.error });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ingestion failed';
      setResult(`❌ ${errorMessage}`);
      onResult?.({ success: false, error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <Button 
        onClick={handleIngest} 
        disabled={loading}
        size="sm"
        className="w-full"
      >
        {loading ? 'Ingesting...' : 'Ingest All Documents from "docs" Bucket'}
      </Button>
      {result && (
        <p className={`text-sm ${result.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {result}
        </p>
      )}
    </div>
  );
} 