'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "88f3a4a6a534db73eb4787459eb87e6a",
"assets/AssetManifest.bin.json": "80cbe7cb19686c6d5bc83bb797f8fa3a",
"assets/AssetManifest.json": "ea4950f7af180cd46fdcb78c1961dc95",
"assets/assets/ai-generated-welder.jpg": "50164f1b7cbe3c476ea34b9a3b625e8d",
"assets/assets/AluminiumWorks.jpg": "9845df9174d7537f271c37aabea97409",
"assets/assets/construction.jpg": "789da029c017ac2e89353b5fae7204bf",
"assets/assets/cover.jpg": "c27dce342e57829f965bd866bacee9e2",
"assets/assets/furniture.jpg": "d54acf0ad12b0c6bebe8a8ddab5c9ecb",
"assets/assets/furniture2.jpg": "1cc9297ba8c6806656b12a9539095c8d",
"assets/assets/GardenPergola.jpg": "0255834a1e2e153198ea146a97722dbe",
"assets/assets/grant-UhpYKnqZwE8-unsplash.jpg": "7982abef4c99850b95536e1b6fafca49",
"assets/assets/grill.jpg": "3b585f78c512a498766976c6465b6d62",
"assets/assets/jean-philippe-delberghe-feijc-nqWKM-unsplash.jpg": "f0296ccf404021b2d8655f0aaf42d906",
"assets/assets/jinen-shah-Pjp0b-X5I5w-unsplash.jpg": "c84eae3275d8aeb8ead484aac78d5ddb",
"assets/assets/liam-shorter-5VaF7hzo4wc-unsplash.jpg": "51af3573eb8e40c41ac318b0f7400107",
"assets/assets/metal-gate.jpg": "d94ee910db03e1afcf1f9857a137741a",
"assets/assets/pawel-czerwinski-ea559pHiN-g-unsplash.jpg": "00774d628fc618806eb333a2df09c673",
"assets/assets/pexels-jan-van-der-wolf-11680885-12143394.jpg": "ed576e112ec0e4233fd12091ef08a40a",
"assets/assets/pexels-karolina-grabowska-4195603.jpg": "eead6b97982c05313a0990f034e20a75",
"assets/assets/pexels-milivigerova-5984690.jpg": "8c1a007949c9e0cab4fe0a6a1331fe46",
"assets/assets/pexels-natfernandezceo-13697541.jpg": "f506f03dc3f2896c508b6161987e5a3b",
"assets/assets/pexels-skylar-kang-6045084.jpg": "ca18fff60493861b07a5a04b6a70784e",
"assets/assets/pexels-unaizat97-14005126.jpg": "ff8ca4d3c059410418eb4c0940b68d01",
"assets/assets/pexels-valeriya-827518.jpg": "aaa58904cb4f795dc2e7cce9c7311258",
"assets/assets/raling.jpg": "5eba0fd038bbe2f9fd3b820038378d4d",
"assets/assets/sheds.jpg": "67b74a9d8cb0fdc05328104d0cebf383",
"assets/assets/sheds2.jpg": "e2aef237330ed29f4dcff4a153310f85",
"assets/assets/Shutter.jpg": "37ed233b74ecacaf2cac2fa212a0c978",
"assets/assets/StainlessSteelGates.jpg": "880b69f222b80d3928af6b0c996f9917",
"assets/assets/TreeGuard.jpg": "9b7c4ef679c9312e49aebd8661b84e91",
"assets/assets/UnipoleStructure.jpg": "9a59cd4291ec93e365afab0625562d99",
"assets/assets/welder.png": "9b9dded654dd09d565ac265f49d76490",
"assets/assets/welding.jpg": "a6fd6d31d5a94b2e94a9597768f7cbe9",
"assets/assets/wire-fencing.jpg": "d0b66ec11d2152017d32faef8813762e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5447f8ae82afa802ee6af26ad301d7ba",
"assets/NOTICES": "5bd53180479abe14731119df2092e664",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "acc2285688e4e5cc2766e023721a041e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8dc376e5c041410b5dbebf0f4e3161f0",
"icons/Icon-192.png": "32dbec0ff1ea0e33adbc9db35ab655d5",
"icons/Icon-512.png": "043755f963f5193825d6a0f3f8e059c4",
"icons/Icon-maskable-192.png": "32dbec0ff1ea0e33adbc9db35ab655d5",
"icons/Icon-maskable-512.png": "043755f963f5193825d6a0f3f8e059c4",
"index.html": "3f610d6d0312a7970cbea136c16dcce4",
"/": "3f610d6d0312a7970cbea136c16dcce4",
"main.dart.js": "7cd7f79a35e88674952508d0df2ce483",
"manifest.json": "bc1dce63ef479135e98d3472e3eb3d27",
"version.json": "1909007268f3fa369891c243fe1c89e2"};
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
