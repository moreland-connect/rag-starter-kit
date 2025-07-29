'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import RagSettings from '@/components/RagSettings';
import RagDebug from '@/components/RagDebug';

export default function RagSettingsPage() {
  const [settings, setSettings] = useState({
    model: 'gpt-4.1-2025-04-14',
    systemPrompt: `You are a helpful assistant with access to a knowledge base of database documentation and schema information.

IMPORTANT INSTRUCTIONS:
1. When a user asks a question, ALWAYS use the getInformation tool first to search your knowledge base
2. Only answer questions using information found in your knowledge base
3. If no relevant information is found, respond with "Sorry, I don't have information about that in my knowledge base."
4. When you find relevant information, provide detailed, helpful answers based on that information
5. For database questions, provide specific SQL examples when possible
6. Always cite the source of your information when possible
7. If the user asks about joining tables, look for information about the specific tables and their relationship keys

Your knowledge base contains database schema documentation, table definitions, and relationship information. Use the getInformation tool to search through them before answering any questions.`
  });

  const handleSettingsChange = (newSettings: { model: string; systemPrompt: string }) => {
    setSettings(newSettings);
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - RAG Configuration */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <RagSettings onSettingsChange={handleSettingsChange} />
            </div>
          </div>

          {/* Right Column - System Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <RagDebug />
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Current Configuration</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Model:</strong> {settings.model}
                </div>
                <div>
                  <strong>System Prompt Length:</strong> {settings.systemPrompt.length} characters
                </div>
                <div>
                  <strong>Vector Search:</strong> Enabled (pgvector)
                </div>
                <div>
                  <strong>Max Steps:</strong> 3
                </div>
                <div>
                  <strong>Max Results:</strong> 6 chunks
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">How to Use</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p>1. <strong>Select Model:</strong> Choose the LLM model for responses</p>
                <p>2. <strong>Customize Prompt:</strong> Modify the system instructions</p>
                <p>3. <strong>Save Settings:</strong> Apply changes to new conversations</p>
                <p>4. <strong>Test:</strong> Return to chat to test your configuration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 