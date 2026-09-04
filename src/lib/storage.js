export const STORAGE_KEY = 'ape-study-v1';

function hasClaudeStorage() {
  return typeof window !== 'undefined'
    && window.storage
    && typeof window.storage.get === 'function'
    && typeof window.storage.set === 'function';
}

export async function readStoredProgress() {
  if (hasClaudeStorage()) {
    try {
      const result = await window.storage.get(STORAGE_KEY);
      if (result?.value) return { value: result.value, backend: 'artifact' };
    } catch {
      // Fall back to browser storage below.
    }
  }

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return { value, backend: 'browser' };
  } catch {
    return { value: null, backend: 'memory' };
  }
}

export async function writeStoredProgress(value) {
  let artifactSaved = false;

  if (hasClaudeStorage()) {
    try {
      const result = await window.storage.set(STORAGE_KEY, value);
      artifactSaved = Boolean(result);
    } catch {
      artifactSaved = false;
    }
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, value);
    return { ok: true, backend: artifactSaved ? 'artifact + browser' : 'browser' };
  } catch {
    return { ok: artifactSaved, backend: artifactSaved ? 'artifact' : 'memory' };
  }
}

export function downloadProgress(data) {
  const payload = {
    app: 'APE Study v2',
    exportedAt: new Date().toISOString(),
    data,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ape-study-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export async function parseProgressFile(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  return parsed?.data?.questions ? parsed.data : parsed;
}
