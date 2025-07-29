'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FileUploadProps {
  onResult?: (result: any) => void;
}

export default function FileUpload({ onResult }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult('');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (response.ok) {
        setResult(`✅ ${data.message}`);
        onResult?.({ success: true, message: data.message, file: file.name });
      } else {
        setResult(`❌ ${data.error}`);
        onResult?.({ success: false, error: data.error, file: file.name });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      setResult(`❌ ${errorMessage}`);
      onResult?.({ success: false, error: errorMessage, file: file.name });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Input
          type="file"
          accept=".md,.json,.txt"
          onChange={handleFileChange}
          className="flex-1"
        />
        <Button 
          onClick={handleUpload} 
          disabled={!file || uploading}
          size="sm"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      </div>
      <p className="text-xs text-gray-500">
        Supported: .md, .json, .txt (max 10MB)
      </p>
      {result && (
        <p className={`text-sm ${result.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {result}
        </p>
      )}
    </div>
  );
} 