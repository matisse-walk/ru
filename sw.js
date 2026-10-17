/* Matisse's Montparnasse: keep the walk available once it has been opened.
   HTML, CSS and JS: network first, cache as fallback. Audio, strips, artworks, GeoJSON: cache first.
   Map tiles and fonts are left to the browser. Bump CACHE on every deploy. */
const CACHE = 'mm-ru-1';
const CORE = ['index.html', 'app.css', 'app.js', 'content.js', 'style.css', 'map/route-short.geojson', 'map/route-long.geojson'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || e.request.method !== 'GET') return;
  const asset = /\/(audio|comic|art|map)\//.test(url.pathname);
  if (asset) {
    e.respondWith(caches.open(CACHE).then(async c => { const hit = await c.match(e.request); if (hit) return hit; const res = await fetch(e.request); if (res.ok && res.status === 200) c.put(e.request, res.clone()); return res; }));
  } else {
    e.respondWith(fetch(e.request).then(res => { if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; }).catch(() => caches.match(e.request)));
  }
});
