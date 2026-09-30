export type CommunityImage = { id: string; name: string; src: string; alt: string };
export type CommunityDraft = { body: string; images: CommunityImage[]; youtube: string };

export function youtubeVideoId(value: string): string | null {
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return null;
    const parts = url.pathname.split('/').filter(Boolean);
    let id: string | null = null;
    if (['youtu.be', 'www.youtu.be'].includes(url.hostname) && parts.length === 1) id = parts[0];
    if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com'].includes(url.hostname)) {
      if (url.pathname === '/watch') id = url.searchParams.get('v');
      else if (['shorts', 'embed', 'live'].includes(parts[0]) && parts.length === 2) id = parts[1];
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch { return null; }
}

export async function communityDraftStorage(locale: string, value?: CommunityDraft | null): Promise<CommunityDraft | undefined> {
  const db = await new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('bannaa-community-preview', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('drafts');
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  try {
    return await new Promise((resolve, reject) => {
      const transaction = db.transaction('drafts', value === undefined ? 'readonly' : 'readwrite');
      const store = transaction.objectStore('drafts');
      const request = value === undefined ? store.get(locale) : value === null ? store.delete(locale) : store.put(value, locale);
      transaction.oncomplete = () => resolve(value === undefined ? request.result as CommunityDraft | undefined : undefined);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } finally { db.close(); }
}
