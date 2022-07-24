'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cbb90f7a6b251a8bfa8ac65a7548485e",
".git/config": "8c6eafc0d4804d4986f3531e44141a6e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ee6d80c1d9d1e58536f912c991de42e8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "771c472998ece4c3438617b04f861be8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "556693b633def25474c2bc0e22575edc",
".git/logs/refs/heads/master": "556693b633def25474c2bc0e22575edc",
".git/logs/refs/remotes/origin/master": "733408eba9668df6868ddeb39e22c826",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/3baa9d1459e5e5c92c6e57f2a2171b5cba63aa": "9e59e59a2f7c34a62efa2297ea97d24c",
".git/objects/08/c8dadf3167ed753f596887c36d09e483dc0418": "8a7e960b8a1750b77a7435c798c7c817",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/18/b4347653f35a71ee7facf7d7d8a298ffdc7c3d": "1e3e7f53c53fbc34333686e12cead465",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/d92c24af178a6da9160d3effe3cd534a75b6e9": "cfdfed8e1d80d2832276dc50e25a3e49",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/2b8a42ec532552bffe94ff1342a5979ca451f4": "82ce4314eaaa7bdd01394bd91ba61b2a",
".git/objects/33/56f4c68440eecdcf04d4c559bfa89d4b70257e": "c063ef8fd5bc3d54f87176e4ef335c95",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/edbd0faf9ac9bdb3ab835542c4f0a41a297c03": "f0e6f868fc4b72164da050d84f40c333",
".git/objects/4c/5ffdfce48b712d864c3fe23e7ed6a9a6d3cda5": "01cf33013b12300c1cbd2521da47a50a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/6f8949a0c69a848fd4060faf16e4e8404efad7": "8c6372e65c6572886855feebc4b04317",
".git/objects/56/8d0ceb397d533ed77067dd6ade04fc74fc7491": "b0e65cd3150140a513cd2bceb1f1dc71",
".git/objects/6b/f5c448c7179d5d614e0e2b4d1b01ed6c0f804c": "a4de34cfd4f7ad85a1b8f6f2b9022bd2",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9e579e1abbca85064f4e8ffbd3b964c7fbec6d": "082f28f6cb1d9f1f375562c21c2120a0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/22d9cfe709f805cb2bc45ac64a90dab22effac": "ff807a40ae1207ea61bb339560ede36f",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/9e/6d9731094f8f20191064ffc2994d7e9aca4aba": "717bcd0013f8281cf18dbad2e4309d42",
".git/objects/a0/972f4e3b7ecaae4522a4666bad44ad77e91e1f": "b1b162cb7dd00a09d155761607608d75",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/481e494e301c0c8063bb61217eaee3fe0b3127": "6e6278756ce6a20aa83b737309101bec",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/c352ef89776bf211b25616f01a3c952a688d8a": "ba5bfd9b9dc10c6d7d9afdcf3ed644cc",
".git/objects/b3/ed33e3d85dfae7152d56eee429c27a22111a7d": "b24dbaca48db53c401cf7f38f7338c0f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7007ccd06099ca8aec616ed31eabda1806509b": "91a86ccaa316fc831e75c32a5d658f37",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/79d26513616d52965fa8a6d191d00ec1130f13": "ef879833538b0a106f51eaa35a8f07ee",
".git/objects/d2/14f3097010801468b3f021670af4c15e8c2786": "e26b6c042119735e902b8c12becd6934",
".git/objects/d4/fb16fdef00138ad6006c5740207969cfe435de": "073f46d501ba4d7b38668e114181fe07",
".git/objects/d5/ffebd31c040250a5ebe43603e126c604d96168": "084c6f80a17de203f7ad4d714469b8ac",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/e266ae3b6e4fb02872c33e00f881d1fdb36671": "69a0e28dac4e08395f0e28059102f32b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/042c2649708571eb43b6e4b7606a25847be355": "60c124f831929a7410014389c89ff7dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/f1d39f44700886bb6f6f6a76a8328b7c5e2aa2": "57e6269e23b154bf233040b1670a9bd2",
".git/ORIG_HEAD": "dc121d64f6ec70aa1c3e5dc9f6cbe97d",
".git/refs/heads/master": "dc121d64f6ec70aa1c3e5dc9f6cbe97d",
".git/refs/remotes/origin/master": "dc121d64f6ec70aa1c3e5dc9f6cbe97d",
"assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/assets/logo.png": "9c2ef52f9d6e5dbf70b1b4202738de76",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6dc3cf4b4b81e9ec24d7c9a42d1170f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon-16x16.png": "855290461ec5b4069dc08b95a2cc060a",
"favicon-32x32.png": "14cab75bcd80989de7a18ab90e270d4a",
"favicon.ico": "ffc63ce5ffccc7dabdb6546c4ac36ac4",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-chrome-192x192.png": "553a22f80d1be6065273ff33dcc7f661",
"icons/android-chrome-512x512.png": "9aef0d3428451a19b80c784b8399a61c",
"icons/apple-touch-icon.png": "6436f47567d561b80a3f976cc01f9e9f",
"index.html": "9d1ecc05a2151a1bc41c522d46d007ed",
"/": "9d1ecc05a2151a1bc41c522d46d007ed",
"main.dart.js": "010ab49b747564b0bf27b6e3a5b924bb",
"manifest.json": "40df819b7f4b20ac3c94ae34165cabe8",
"version.json": "763174fa2ccabcd00468484504da97ee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
