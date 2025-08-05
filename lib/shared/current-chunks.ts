// Shared state for current chunks
let currentChunks: any[] = [];

export function updateCurrentChunks(chunks: any[]) {
  currentChunks = chunks;
}

export function getCurrentChunks() {
  return currentChunks;
}