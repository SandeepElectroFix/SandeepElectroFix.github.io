/* ==================================
   Sandeep ElectroFix Service Worker
================================== */

const CACHE_NAME = "sandeep-electrofix-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",

  "./logo.png",

  "./work1.jpg",
  "./work2.jpg",
  "./work3.jpg",
  "./work4.jpg",

  "./before.jpg",
  "./after.jpg"
];


/* Install */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

  self.skipWaiting();

});


/* Activate */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys =>

      Promise.all(

        keys.map(key => {

          if (key !== CACHE_NAME) {

            return caches.delete(key);

          }

        })

      )

    )

  );

  self.clients.claim();

});


/* Fetch */

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        return response || fetch(event.request)

          .then(networkResponse => {

            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === "basic"
            ) {

              const responseClone = networkResponse.clone();

              caches.open(CACHE_NAME).then(cache => {

                cache.put(event.request, responseClone);

              });

            }

            return networkResponse;

          })

          .catch(() => caches.match("./index.html"));

      })

  );

});
