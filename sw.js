const CACHE_NAME = "pomodoro-v1";

self.addEventListener("install", e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(cache=>{
return cache.addAll([
"./",
"./index.html",
"./manifest.json",
"./icon.png"
]);
})
);
self.skipWaiting();
});

self.addEventListener("activate", e=>{
e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", e=>{
e.respondWith(
caches.match(e.request).then(res=>{
return res || fetch(e.request);
})
);
});
