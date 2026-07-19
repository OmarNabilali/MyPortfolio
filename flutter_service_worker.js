'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e5a2acfe71aeb44bf8323de8f0536d35",
"assets/AssetManifest.bin.json": "ca8288e68c4b2adfd4aeb1b7ef1e1185",
"assets/assets/AssetManifest.bin": "e5a2acfe71aeb44bf8323de8f0536d35",
"assets/assets/AssetManifest.bin.json": "ca8288e68c4b2adfd4aeb1b7ef1e1185",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/fonts/MaterialIcons-Regular.otf": "cc04caaaf5d119b358cefb03aed6fd17",
"assets/assets/images/curamind/1.jpeg": "892ff78df0bbd735a63ff9713c11f252",
"assets/assets/images/curamind/10.jpeg": "e7d93fd83da144de93a75a4159f6feae",
"assets/assets/images/curamind/11.jpeg": "ebfb5b076a90fb71b5639da0323152b8",
"assets/assets/images/curamind/12.jpeg": "1ceb0509ff6ef5468e2a768b4229c97d",
"assets/assets/images/curamind/13.jpeg": "cba40210529e4d2e6a4da4fccdc82640",
"assets/assets/images/curamind/14.jpeg": "9bb194555a0fd909907c3287ae25970c",
"assets/assets/images/curamind/15.jpeg": "4645170232b2d7e492f89cf2b1ecd0ee",
"assets/assets/images/curamind/16.jpeg": "4c34f92cd8d22b74105c43ff79d6007b",
"assets/assets/images/curamind/17.jpeg": "332ceb1b185a7fca38e0f8a98e9b81b5",
"assets/assets/images/curamind/18.jpeg": "4934f81fe9dfff3e1f3b2b43286f9782",
"assets/assets/images/curamind/19.jpeg": "b44fccc2e47664249f84e1ff52c6dfe5",
"assets/assets/images/curamind/2.jpeg": "cee95856dae86beb1a2926e08c9cd3f2",
"assets/assets/images/curamind/20.jpeg": "5b96a123af4d4e513020a125f27b4d2e",
"assets/assets/images/curamind/3.jpeg": "16095d5bf2a436653aa80961899b27b2",
"assets/assets/images/curamind/4.jpeg": "e59e4bb2edbdcdd4afd6799154370fd7",
"assets/assets/images/curamind/5.jpeg": "284c098aa45f3f269580eea3ebeadedb",
"assets/assets/images/curamind/6.jpeg": "077c8c50aec3d9c3f8bc726dbcfb200e",
"assets/assets/images/curamind/7.jpeg": "e328a2366553f331c96aa9416ae6a7bc",
"assets/assets/images/curamind/8.jpeg": "f69078414be4ee3b02325bc2ee6ddac5",
"assets/assets/images/curamind/9.jpeg": "f69078414be4ee3b02325bc2ee6ddac5",
"assets/assets/images/fruits_hup/1.jpeg": "8fd28279fe9a752802c9631f660a6abb",
"assets/assets/images/fruits_hup/10.jpeg": "c4c17f036364ac21d421cd8e33c094a1",
"assets/assets/images/fruits_hup/11.jpeg": "1d6b8597e4afde57176c64b578761e9f",
"assets/assets/images/fruits_hup/12.jpeg": "d2465732427c31e1dd44b18133480a1c",
"assets/assets/images/fruits_hup/2.jpeg": "7a82efed1b33d781bfb2b38dcea6863d",
"assets/assets/images/fruits_hup/3.jpeg": "ce8fc314849e9bb14e9ad3239bd51eac",
"assets/assets/images/fruits_hup/4.jpeg": "90cb8b216a1488b4aaf8724c975d5298",
"assets/assets/images/fruits_hup/5.jpeg": "7cb37db81e33aafc493438281b2dfc9c",
"assets/assets/images/fruits_hup/6.jpeg": "10777970dc88554c0635af43c03d3bbd",
"assets/assets/images/fruits_hup/7.jpeg": "6921858dba351d7755ba1abd01212139",
"assets/assets/images/fruits_hup/8.jpeg": "26a1bc08ab1438fba14b4415abfd6f53",
"assets/assets/images/fruits_hup/9.jpeg": "c717faadbf4bb56855fca3ea2a8176b7",
"assets/assets/NOTICES": "15d8bf68d194124dc3c249888c63dcd4",
"assets/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cc04caaaf5d119b358cefb03aed6fd17",
"assets/NOTICES": "15d8bf68d194124dc3c249888c63dcd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "09fff08e32414702ebc9e83c16c61fbd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86292769f8731850a5d8600b76065d4b",
"/": "86292769f8731850a5d8600b76065d4b",
"main.dart.js": "57cabb6eb3f9da7558b82f313b3eccaf",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
