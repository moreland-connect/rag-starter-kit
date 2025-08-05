'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import RagSettings from '@/components/RagSettings';

interface RagConfig {
  id: number;
  name: string;
  system_prompt: string;
  model: string;
  temperature: string;
  max_tokens: number;
  chunks_to_retrieve: number;
  similarity_threshold: string;
  retrieval_type: string;
  is_default: boolean;
  is_active: boolean;
}

export default function RagSettingsPage() {
  const [currentConfig, setCurrentConfig] = useState<RagConfig | null>(null);

  const handleConfigChange = (config: RagConfig | null) => {
    setCurrentConfig(config);
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
              <h1 className="text-3xl font-bold text-gray-900">RAG Settings</h1>
              <p className="text-gray-600">Configure your RAG system parameters and behavior</p>
            </div>
          </div>
        </div>

        {/* Full Width RAG Configuration */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <RagSettings onConfigChange={handleConfigChange} />
          </div>
        </div>
      </div>
    </div>
  );
} 