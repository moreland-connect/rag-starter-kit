'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronDown, ChevronRight } from 'lucide-react';

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

interface RagSettingsProps {
  onConfigChange: (config: RagConfig | null) => void;
}

const availableModels = [
  'gpt-4.1-2025-04-14',
  'o3',
  'gpt-4.1-mini',
  'o4-mini'
];



export default function RagSettings({ onConfigChange }: RagSettingsProps) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [config, setConfig] = useState<RagConfig | null>(null);
  const [localConfig, setLocalConfig] = useState<Partial<RagConfig>>({});
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Load default/active config
  useEffect(() => {
    loadDefaultConfig();
  }, []);

  const loadDefaultConfig = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/rag-configs?activeOnly=true');
      const data = await response.json();
      
      if (data.success && data.configurations.length > 0) {
        const defaultConfig = data.configurations.find((c: RagConfig) => c.is_default) || data.configurations[0];
        setConfig(defaultConfig);
        setLocalConfig(defaultConfig);
        onConfigChange(defaultConfig);
      }
    } catch (error) {
      console.error('Failed to load RAG config:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!config) return;
    
    try {
      setSaving(true);
      
      // Only send the fields we actually want to update
      const configToSave: any = {};
      
      if (localConfig.model !== undefined) {
        configToSave.model = localConfig.model;
      }
      if (localConfig.system_prompt !== undefined) {
        configToSave.system_prompt = localConfig.system_prompt;
      }
      if (localConfig.temperature !== undefined) {
        configToSave.temperature = parseFloat(localConfig.temperature.toString());
      }
      if (localConfig.max_tokens !== undefined) {
        configToSave.max_tokens = parseInt(localConfig.max_tokens.toString());
      }
      
      const response = await fetch(`/api/rag-configs/${config.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(configToSave)
      });
      
      const data = await response.json();
      if (data.success) {
        setConfig(data.configuration);
        setLocalConfig(data.configuration);
        onConfigChange(data.configuration);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Failed to save RAG config:', error);
      alert('Failed to save configuration');
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    if (config) {
      setLocalConfig(config);
    }
  };

  if (loading) {
    return <div className="p-4">Loading configuration...</div>;
  }

  if (!config) {
    return <div className="p-4">No configuration found</div>;
  }

  return (
    <div className="space-y-8">
      {/* Instructions */}
      <div className="border-b pb-6">
        <h2 className="text-2xl font-semibold mb-3">Configure Your RAG System</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• <strong>System Prompt:</strong> Define how the AI behaves and responds to queries</p>
                     <p>• <strong>Model Selection:</strong> Choose your preferred LLM (4.1 = newest GPT-4, o3 = reasoning, mini = economical)</p>
          <p>• <strong>Advanced Settings:</strong> Fine-tune response creativity and length</p>
          <p className="text-amber-600 font-medium mt-3">Note: RAG retrieval uses 6 chunks with 0.1 similarity threshold (hardcoded for now)</p>
        </div>
      </div>

      {/* System Prompt */}
      <div>
        <Label htmlFor="systemPrompt" className="text-lg font-medium">System Prompt</Label>
        <p className="text-sm text-gray-500 mb-3">Instructions that define how the AI should behave and respond to user queries</p>
        <textarea
          id="systemPrompt"
          value={localConfig.system_prompt || ''}
          onChange={(e) => setLocalConfig(prev => ({ ...prev, system_prompt: e.target.value }))}
          rows={14}
          className="w-full p-4 border rounded-lg mt-1 font-mono text-sm resize-y"
          placeholder="Enter your custom system prompt..."
        />
      </div>

      {/* Model Selection */}
      <div>
        <Label htmlFor="model" className="text-lg font-medium">Model</Label>
                 <p className="text-sm text-gray-500 mb-3">Choose your preferred LLM model (4.1 = newest GPT-4, o3 = reasoning, o4-mini/4.1-mini = economical)</p>
        <select
          id="model"
          value={localConfig.model || ''}
          onChange={(e) => setLocalConfig(prev => ({ ...prev, model: e.target.value }))}
          className="w-full p-3 border rounded-lg text-base"
        >
          {availableModels.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Advanced Settings Dropdown */}
      <div className="border rounded-lg">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors"
        >
          <div>
            <h3 className="text-lg font-medium">Advanced Settings</h3>
            <p className="text-sm text-gray-500">Fine-tune response parameters</p>
          </div>
          {showAdvanced ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        {showAdvanced && (
          <div className="border-t p-4 space-y-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="temperature" className="text-base font-medium">Temperature</Label>
                <Input
                  id="temperature"
                  type="number"
                  min="0"
                  max="2"
                  step="0.1"
                  value={localConfig.temperature || ''}
                  onChange={(e) => setLocalConfig(prev => ({ ...prev, temperature: e.target.value }))}
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-2">Controls randomness (0 = deterministic, 1 = balanced, 2 = very creative)</p>
              </div>
              
              <div>
                <Label htmlFor="maxTokens" className="text-base font-medium">Max Tokens</Label>
                <Input
                  id="maxTokens"
                  type="number"
                  min="100"
                  max="4000"
                  value={localConfig.max_tokens || ''}
                  onChange={(e) => setLocalConfig(prev => ({ ...prev, max_tokens: parseInt(e.target.value) }))}
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-2">Maximum response length (higher = longer responses)</p>
              </div>
            </div>

            {/* Current Configuration Display */}
            {config && (
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium mb-3">Current Configuration</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Model:</span>
                    <div className="font-medium">{config.model}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Temperature:</span>
                    <div className="font-medium">{config.temperature}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Max Tokens:</span>
                    <div className="font-medium">{config.max_tokens}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Prompt Length:</span>
                    <div className="font-medium">{config.system_prompt?.length || 0} chars</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Save Actions */}
      <div className="flex gap-3 pt-4 border-t">
        <Button onClick={handleSave} disabled={saving} size="lg" className="px-8">
          {saving ? 'Saving...' : 'Save Configuration'}
        </Button>
        <Button onClick={handleReset} variant="outline" disabled={saving} size="lg">
          Reset Changes
        </Button>
      </div>
    </div>
  );
} 