const CACHE_NAME = 'samruddhi-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'news_detail.html',
  'post_ad.html',
  'order_poster.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});