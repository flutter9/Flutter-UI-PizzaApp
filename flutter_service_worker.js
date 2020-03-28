'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/assets/aussie_barbeque_veg.png": "8038f97ba915f5d03549f833063f9b06",
"/assets/assets/bag_icon.png": "2686231b71be263141a85aebb1596b5d",
"/assets/assets/indi_tandoori_paneer.png": "a6ae67cbf009a1768352c57513fd28a5",
"/assets/assets/jamaican_jerk_veg.png": "57c694025f3e40747abf2e14c0af96c6",
"/assets/assets/sweet_and_tangy.png": "a3e0f424b3c14c78b3d4e054238a323e",
"/assets/assets/pizza.png": "62ce2c10f75efe7a429f18366edede22",
"/assets/assets/home_icon.png": "25e1ae9292d511970527b85ec5ceb94e",
"/assets/assets/african_peri_peri.png": "32f37f8dcf000d84379a10d117531b4d",
"/main.dart.js": "b28559f6a93b37805a07753e0152ae5d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
