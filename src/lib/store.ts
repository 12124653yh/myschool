export interface GuestbookEntry {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
}

// In-memory server store attached to globalThis to persist across dev reloads
declare global {
  // eslint-disable-next-line no-var
  var __guestbookStore: GuestbookEntry[] | undefined;
}

if (!globalThis.__guestbookStore) {
  globalThis.__guestbookStore = [];
}

export function getEntries(): GuestbookEntry[] {
  return globalThis.__guestbookStore ?? [];
}

export function addEntry(nickname: string, content: string): GuestbookEntry {
  const trimmedNickname = nickname.trim().slice(0, 20);
  const trimmedContent = content.trim().slice(0, 300);

  const entry: GuestbookEntry = {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
    nickname: trimmedNickname,
    content: trimmedContent,
    createdAt: new Date().toISOString(),
  };

  if (!globalThis.__guestbookStore) {
    globalThis.__guestbookStore = [];
  }

  // Prepend newest entry to the top
  globalThis.__guestbookStore.unshift(entry);
  return entry;
}
