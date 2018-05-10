/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/styles.css",
    "revision": "69daf0ecd79026a3827348952d5db1e6"
  },
  {
    "url": "images/glasses.png",
    "revision": "4778fab609e673cb65a4e06ad58c2d14"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "cbfe00706fa776e21962803eaae08f63"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f2a8c4662ba4b7e874aae82edc8aa57f"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "d321afb42b775c9006a933cc3fc6d495"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "f2375b538d726a52bd265808b2471b32"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "20c071ae862df77bafe634db8da52156"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6971e3d3968048f688830079695bb856"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "c5fa5d9eff46e00959d4312f62149d6b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "05cca24494c6ff90aecdfde7b1f24c73"
  },
  {
    "url": "index.html",
    "revision": "7f38779c9ca801475287688e93ba4dce"
  },
  {
    "url": "index.js",
    "revision": "5ef9dd813e718f87f645f605ae0bf933"
  },
  {
    "url": "js/app.js",
    "revision": "a6be9722940298c3f7cc956d2c26e091"
  },
  {
    "url": "js/vendor/eye.js",
    "revision": "03da0fd0ea94f8a71a762244db2abfa1"
  },
  {
    "url": "js/vendor/face.js",
    "revision": "13750c249ed11c535aa407252ca2c2f7"
  },
  {
    "url": "js/vendor/mouth.js",
    "revision": "09fa38c7c199996d09143012e7321d9d"
  },
  {
    "url": "js/vendor/tracking.min.js",
    "revision": "cf9a4fdf0a7c4c61ba52ce231ec7f12a"
  },
  {
    "url": "js/vibrate.js",
    "revision": "e4cc4e0682aada6bc53273979917dbdf"
  },
  {
    "url": "js/voice-recognition.js",
    "revision": "dcc1ee1f79d8c2ea896929eb0eaf125c"
  },
  {
    "url": "manifest.json",
    "revision": "36987ec47950c57ab91ab1a725e29a22"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ plugins: [new workbox.expiration.Plugin({"maxEntries":10})] }), 'GET');

workbox.routing.registerRoute(
  /https:\/\/cdn.jsdelivr.net\/npm\/semantic-ui@2.3.1\/dist\/(.*)/,
  workbox.strategies.networkFirst(),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);
