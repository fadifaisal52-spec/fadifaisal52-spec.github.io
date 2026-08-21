/* Shameli PWA service worker */
const CACHE_NAME = 'shamel-v6';
const PRECACHE_URLS = ['/', '/dashboard', '/login', '/auth/callback', '/manifest.json', '/icon-192.png', '/icon-512.png', '/favicon.ico'];

/* ---- Web Push notifications ---- */
self.addEventListener('push', (event) => {
  let data = { title: 'شامل', body: '', url: '/notifications', type: 'info' };
  try {
    if (event.data) {
      const parsed = event.data.json();
      data = { ...data, ...parsed };
    }
  } catch {
    // Not JSON — fall back to raw text.
    data.body = event.data ? event.data.text() : '';
  }

  const options = {
    body: data.body || '',
    icon: data.type === 'warning' ? '/icon-192.png' : '/icon-192.png',
    badge: '/icon-192.png',
    data: { url: data.url || '/notifications' },
    dir: 'rtl',
    lang: 'ar',
  };

  event.waitUntil(self.registration.showNotification(data.title || 'شامل', options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/notifications';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    }),
  );
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {}),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) =>
      clients.forEach((client) => client.navigate(client.url)),
    ),
  );
});

/* App shell first, with network fallback for navigation requests. */
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never cache API / Supabase / gateway calls.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname.includes('supabase') || url.pathname.includes('.output')) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('/').then((r) => r || caches.match('/dashboard'))),
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
    }),
  );
});