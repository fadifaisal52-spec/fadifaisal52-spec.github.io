/* Shameli PWA service worker */
const CACHE_NAME = 'shamel-v41';
const PRECACHE_URLS = ['/', '/dashboard', '/login', '/auth/callback', '/offline', '/manifest.json', '/manifest-menu.json', '/cashier', '/menu', '/sales', '/expenses', '/purchases', '/products', '/loans', '/advances', '/returns', '/petty-cash', '/employee-portal', '/icon-192.png', '/icon-512.png', '/favicon.ico'];

/* ---- Offline-first data layer: cache Supabase reads, queue writes ----
   يغطي النظام كامل دون تعديل الصفحات: أي قراءة GET تُخبّأ لكل مستخدم،
   وأي كتابة دون اتصال تُحفظ في نفس صندوق التطبيق (IndexedDB) ليُزامنها. */
const API_CACHE_PREFIX = 'shamel-api-';
const OUTBOX_DB = 'shamel-offline';

function djb2(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  return h.toString(36);
}
function apiUserKey(req) {
  const auth = req.headers.get('authorization') || '';
  const key = req.headers.get('apikey') || '';
  return djb2(auth + '|' + key);
}
function restInfo(req) {
  try {
    const u = new URL(req.url);
    if (!u.pathname.includes('/rest/v1/')) return null;
    const after = u.pathname.split('/rest/v1/')[1] || '';
    const table = after.split('/')[0].split('?')[0];
    if (!table || table === 'rpc') return null;
    return { url: u, table };
  } catch {
    return null;
  }
}
function openOutboxDb() {
  return new Promise((resolve, reject) => {
    try {
      const r = indexedDB.open(OUTBOX_DB, 2);
      r.onupgradeneeded = () => {
        const db = r.result;
        if (!db.objectStoreNames.contains('outbox')) {
          const st = db.createObjectStore('outbox', { keyPath: 'id', autoIncrement: true });
          st.createIndex('by-status', 'status', { unique: false });
        }
        if (!db.objectStoreNames.contains('kv')) db.createObjectStore('kv', { keyPath: 'key' });
      };
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    } catch (e) {
      reject(e);
    }
  });
}
function idbAdd(entry) {
  return openOutboxDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        try {
          const t = db.transaction('outbox', 'readwrite');
          const q = t.objectStore('outbox').add(entry);
          q.onsuccess = () => resolve(q.result);
          q.onerror = () => reject(q.error);
          t.oncomplete = () => {
            try { db.close(); } catch {}
          };
        } catch (e) {
          try { db.close(); } catch {}
          reject(e);
        }
      }),
  );
}
function tempId() {
  return 'queued-' + Date.now().toString(36) + '-' + Math.floor(Math.random() * 1e6).toString(36);
}
async function queueMutation(req, info) {
  let body = null;
  try {
    body = await req.clone().json();
  } catch {
    body = null;
  }
  let recordId = null;
  try {
    for (const [, v] of info.url.searchParams) {
      const m = String(v).match(/^eq\.(.+)$/);
      if (m) { recordId = decodeURIComponent(m[1]); break; }
    }
  } catch {}
  const now = new Date().toISOString();
  const prefer = req.headers.get('prefer') || '';
  const wantsRows = prefer.indexOf('return=representation') >= 0;
  const method = req.method;
  const entries = [];
  const rows = [];
  if (method === 'DELETE') {
    entries.push({ table: info.table, op: 'delete', data: null, recordId, label: 'حذف دون اتصال: ' + info.table, created_at: now, status: 'pending', attempts: 0, error: null });
  } else if (body != null) {
    const list = Array.isArray(body) ? body : [body];
    const clientIds = [];
    for (const row of list) {
      const r = row && typeof row === 'object' ? { ...row } : { value: row };
      if (!r.id) r.id = tempId();
      if (!r.created_at) r.created_at = now;
      clientIds.push(String(r.id));
      rows.push(r);
    }
    if (method === 'PATCH' || method === 'PUT') {
      entries.push({ table: info.table, op: 'update', data: rows.length === 1 ? rows[0] : rows, recordId, clientIds, label: 'تعديل دون اتصال: ' + info.table, created_at: now, status: 'pending', attempts: 0, error: null });
    } else {
      entries.push({ table: info.table, op: 'insert', data: rows.length === 1 ? rows[0] : rows, recordId: null, clientIds, label: 'إضافة دون اتصال: ' + info.table, created_at: now, status: 'pending', attempts: 0, error: null });
    }
  } else {
    return new Response(JSON.stringify({ message: 'offline' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }
  for (const e of entries) {
    try {
      await idbAdd(e);
    } catch {
      return new Response(JSON.stringify({ message: 'offline queue full' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }
  }
  if (!wantsRows) return new Response(null, { status: method === 'POST' ? 201 : 204 });
  return new Response(JSON.stringify(method === 'DELETE' ? [] : rows), {
    status: method === 'POST' ? 201 : 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
async function cachedRestGet(req) {
  let cache = null;
  try {
    cache = await caches.open(API_CACHE_PREFIX + apiUserKey(req));
  } catch {
    cache = null;
  }
  try {
    const res = await fetch(req);
    if (res && res.status === 200 && cache) {
      try {
        await cache.put(req, res.clone());
        cache.keys().then((keys) => {
          if (keys.length > 300) keys.slice(0, keys.length - 300).forEach((k) => cache.delete(k).catch(() => {}));
        }).catch(() => {});
      } catch {}
    }
    return res;
    } catch (e) {
      if (cache) {
        const hit = await cache.match(req).catch(() => null);
        if (hit) return hit;
      }
      // لا كاش: 503 (وليس 200 فارغاً) حتى لا تُسمّم اللقطات المحلية بصفوف فارغة
      return new Response(JSON.stringify({ message: 'offline-no-cache' }), { status: 503, headers: { 'Content-Type': 'application/json', 'X-Offline-Cache': 'miss' } });
    }
}

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
    // نحافظ على كاش قراءات API (تعمل دون اتصال) ونحذف نسخ هيكل التطبيق القديمة فقط
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME && k.indexOf(API_CACHE_PREFIX) !== 0).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
  // لا نفرض إعادة تحميل التبويبات عند تحديث SW — كانت تمسح السلات والنماذج.
  // التحديث يتم عبر SKIP_WAITING + controllerchange في التطبيق.
});

/* App shell first, with network fallback for navigation requests. */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // طبقة البيانات دون اتصال (Supabase REST): قبل أي فحص origin لأن الخادم خارجي
  try {
    const info = restInfo(req);
    if (info) {
      if (req.method === 'GET') {
        event.respondWith(cachedRestGet(req));
        return;
      }
      if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT' || req.method === 'DELETE') {
        event.respondWith(
          fetch(req).catch(() => queueMutation(req, info)),
        );
        return;
      }
      return;
    }
  } catch {
    /* ignore */
  }

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