'use client';

import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import BucketIngest from '@/components/BucketIngest';
import BucketIngestButton from '@/components/BucketIngestButton';
import ClearDataButton from '@/components/ClearDataButton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function IngestionPage() {
  const [ingestionResults, setIngestionResults] = useState<any[]>([]);

  const handleIngestionResult = (result: any) => {
    setIngestionResults(prev => [...prev, { ...result, timestamp: new Date().toLocaleTimeString() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Chat
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Document Ingestion</h1>
              <p className="text-gray-600">Upload and manage your knowledge base documents</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Ingestion Methods */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Ingestion Methods</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">1. Upload Files</h3>
                  <FileUpload onResult={handleIngestionResult} />
                </div>

                <div>
                  <h3 className="font-medium mb-2">2. Ingest from Supabase Bucket</h3>
                  <BucketIngestButton onResult={handleIngestionResult} />
                </div>

                <div>
                  <h3 className="font-medium mb-2">3. Manual Content Entry</h3>
                  <BucketIngest onResult={handleIngestionResult} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Data Management</h2>
              <ClearDataButton onResult={handleIngestionResult} />
            </div>
          </div>

          {/* Right Column - Results & Status */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Ingestion Results</h2>
              
              {ingestionResults.length === 0 ? (
                <p className="text-gray-500 text-sm">No ingestion results yet. Start by uploading documents or ingesting from your bucket.</p>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {ingestionResults.map((result, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{result.timestamp}</span>
                        {result.success ? (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Success</span>
                        ) : (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Error</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700">{result.message || result.error}</p>
                      {result.file && (
                        <p className="text-xs text-gray-500 mt-1">File: {result.file}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Supported Formats</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Text Files:</strong> .txt, .md</p>
                <p><strong>Data Files:</strong> .json</p>
                <p><strong>Size Limit:</strong> 10MB per file</p>
                <p><strong>Storage:</strong> Supabase bucket integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 