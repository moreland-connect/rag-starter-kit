'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Trash2, FileText, Database, Download, Upload } from 'lucide-react';

interface BucketFile {
  name: string;
  size: number;
  lastModified: string;
  createdAt: string;
  contentType: string;
  bucket: string;
}

interface DatabaseResource {
  id: number;
  fileName: string;
  fileType: string;
  fileSize: number;
  chunkCount: number;
  storagePath: string;
  createdAt: string;
  isIngested: boolean;
}

interface DocumentManagerProps {
  onResult?: (result: any) => void;
}

export default function DocumentManager({ onResult }: DocumentManagerProps) {
  const [bucketFiles, setBucketFiles] = useState<BucketFile[]>([]);
  const [resources, setResources] = useState<DatabaseResource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch bucket files and resources in parallel
      const [bucketResponse, resourcesResponse] = await Promise.all([
        fetch('/api/list-bucket-files'),
        fetch('/api/list-resources')
      ]);

      if (!bucketResponse.ok) {
        throw new Error('Failed to fetch bucket files');
      }
      if (!resourcesResponse.ok) {
        throw new Error('Failed to fetch resources');
      }

      const bucketData = await bucketResponse.json();
      const resourcesData = await resourcesResponse.json();

      setBucketFiles(bucketData.files || []);
      setResources(resourcesData.resources || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      onResult?.({ success: false, error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteBucketFile = async (fileName: string) => {
    if (!confirm(`Are you sure you want to delete "${fileName}" from the bucket?`)) {
      return;
    }

    try {
      const response = await fetch('/api/delete-bucket-file', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName })
      });

      const data = await response.json();

      if (response.ok) {
        onResult?.({ success: true, message: data.message });
        fetchData(); // Refresh the data
      } else {
        onResult?.({ success: false, error: data.error });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete file';
      onResult?.({ success: false, error: errorMessage });
    }
  };

  const handleDeleteResource = async (resourceId: number, fileName: string) => {
    if (!confirm(`Are you sure you want to delete the ingested data for "${fileName}"? This will remove all associated embeddings.`)) {
      return;
    }

    try {
      const response = await fetch('/api/delete-resource', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resourceId })
      });

      const data = await response.json();

      if (response.ok) {
        onResult?.({ success: true, message: data.message });
        fetchData(); // Refresh the data
      } else {
        onResult?.({ success: false, error: data.error });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete resource';
      onResult?.({ success: false, error: errorMessage });
    }
  };

  const handleIngestSingleFile = async (fileName: string) => {
    try {
      const response = await fetch('/api/ingest-bucket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bucketName: 'docs', fileName })
      });

      const data = await response.json();

      if (response.ok) {
        onResult?.({ success: true, message: `Successfully ingested "${fileName}"` });
        fetchData(); // Refresh the data
      } else {
        onResult?.({ success: false, error: data.error });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to ingest file';
      onResult?.({ success: false, error: errorMessage });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString() + ' ' + new Date(dateString).toLocaleTimeString();
  };

  // Create a combined view of files and their status
  const combinedData = bucketFiles.map(file => {
    const resource = resources.find(r => r.fileName === file.name);
    return {
      ...file,
      resource,
      isIngested: !!resource?.isIngested,
      lastIngestedAt: resource?.createdAt
    };
  });

  // Also include resources that might not have corresponding bucket files
  const orphanedResources = resources.filter(r => 
    !bucketFiles.some(f => f.name === r.fileName)
  );

  if (loading && bucketFiles.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-center py-8">
          <RefreshCw className="w-6 h-6 animate-spin mr-2" />
          <span>Loading documents...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Document Management</h2>
        <Button onClick={fetchData} disabled={loading} size="sm" variant="outline">
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{combinedData.length} files in bucket, {resources.length} ingested resources</span>
        </div>

        {/* Bucket Files with Ingestion Status */}
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Bucket Files
          </h3>
          
          {combinedData.length === 0 ? (
            <p className="text-gray-500 text-sm py-4">No files found in bucket</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {combinedData.map((file) => (
                <div key={file.name} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate">{file.name}</span>
                        {file.isIngested && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Ingested
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatFileSize(file.size)} • Modified: {formatDate(file.lastModified)}
                        {file.lastIngestedAt && (
                          <span> • Ingested: {formatDate(file.lastIngestedAt)}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      {!file.isIngested ? (
                        <Button
                          onClick={() => handleIngestSingleFile(file.name)}
                          size="sm"
                          variant="outline"
                        >
                          <Upload className="w-3 h-3 mr-1" />
                          Ingest
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleIngestSingleFile(file.name)}
                          size="sm"
                          variant="outline"
                        >
                          <RefreshCw className="w-3 h-3 mr-1" />
                          Re-ingest
                        </Button>
                      )}
                      
                      {file.resource && (
                        <Button
                          onClick={() => handleDeleteResource(file.resource!.id, file.name)}
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Database className="w-3 h-3 mr-1" />
                          Clear DB
                        </Button>
                      )}
                      
                      <Button
                        onClick={() => handleDeleteBucketFile(file.name)}
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Orphaned Resources */}
        {orphanedResources.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium text-gray-900 flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Orphaned Database Resources
            </h3>
            <p className="text-xs text-gray-600">Resources in database without corresponding bucket files</p>
            
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {orphanedResources.map((resource) => (
                <div key={resource.id} className="border rounded-lg p-3 bg-yellow-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate">{resource.fileName}</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Orphaned
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatFileSize(resource.fileSize)} • {resource.chunkCount} chunks • Created: {formatDate(resource.createdAt)}
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => handleDeleteResource(resource.id, resource.fileName)}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 ml-4"
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}