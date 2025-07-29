'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BucketIngestProps {
  onResult?: (result: any) => void;
}

export default function BucketIngest({ onResult }: BucketIngestProps) {
  const [fileName, setFileName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleIngest = async () => {
    if (!fileName.trim() || !content.trim()) {
      setResult('❌ Please provide both file name and content');
      return;
    }

    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: fileName.trim(),
          content: content.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`✅ ${data.message}`);
        setFileName('');
        setContent('');
        onResult?.({ success: true, message: data.message, file: fileName });
      } else {
        setResult(`❌ ${data.error}`);
        onResult?.({ success: false, error: data.error, file: fileName });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ingestion failed';
      setResult(`❌ ${errorMessage}`);
      onResult?.({ success: false, error: errorMessage, file: fileName });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="fileName">File Name</Label>
        <Input
          id="fileName"
          type="text"
          placeholder="document.md"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <textarea
          id="content"
          placeholder="Paste your document content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded-md mt-1 resize-none"
        />
      </div>

      <Button 
        onClick={handleIngest} 
        disabled={loading || !fileName.trim() || !content.trim()}
        size="sm"
        className="w-full"
      >
        {loading ? 'Ingesting...' : 'Ingest Content'}
      </Button>

      {result && (
        <p className={`text-sm ${result.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {result}
        </p>
      )}
    </div>
  );
} 