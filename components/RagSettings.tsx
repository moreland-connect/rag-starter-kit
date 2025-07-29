'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RagSettingsProps {
  onSettingsChange: (settings: { model: string; systemPrompt: string }) => void;
}

const defaultSystemPrompt = `You are a helpful assistant with access to a knowledge base of database documentation and schema information.

IMPORTANT INSTRUCTIONS:
1. When a user asks a question, ALWAYS use the getInformation tool first to search your knowledge base
2. Only answer questions using information found in your knowledge base
3. If no relevant information is found, respond with "Sorry, I don't have information about that in my knowledge base."
4. When you find relevant information, provide detailed, helpful answers based on that information
5. For database questions, provide specific SQL examples when possible
6. Always cite the source of your information when possible
7. If the user asks about joining tables, look for information about the specific tables and their relationship keys

Your knowledge base contains database schema documentation, table definitions, and relationship information. Use the getInformation tool to search through them before answering any questions.`;

const availableModels = [
  'gpt-4.1-2025-04-14',
  'gpt-4o',
  'gpt-4o-mini',
  'gpt-4-turbo',
  'gpt-3.5-turbo'
];

export default function RagSettings({ onSettingsChange }: RagSettingsProps) {
  const [model, setModel] = useState('gpt-4.1-2025-04-14');
  const [systemPrompt, setSystemPrompt] = useState(defaultSystemPrompt);

  const handleSave = () => {
    onSettingsChange({ model, systemPrompt });
  };

  const handleReset = () => {
    setModel('gpt-4.1-2025-04-14');
    setSystemPrompt(defaultSystemPrompt);
    onSettingsChange({ model: 'gpt-4.1-2025-04-14', systemPrompt: defaultSystemPrompt });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="model">Model</Label>
          <select
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
          >
            {availableModels.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="systemPrompt">System Prompt</Label>
          <textarea
            id="systemPrompt"
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            rows={12}
            className="w-full p-2 border rounded-md mt-1 font-mono text-sm"
            placeholder="Enter your custom system prompt..."
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSave}>
            Save Settings
          </Button>
          <Button onClick={handleReset} variant="outline">
            Reset to Default
          </Button>
        </div>
      </div>
    </div>
  );
} 