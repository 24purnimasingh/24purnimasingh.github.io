'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "431d9c952ebce50ed5dd7a3fb0f7f42c",
"index.html": "31c3d7d45341c6267dceb2d6646fbcc1",
"/": "31c3d7d45341c6267dceb2d6646fbcc1",
"styles.css": "01ddf5811b8593a3d721ede630e064d4",
"main.dart.js": "b05ae4f1568d56a146d44f8ed524cf21",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "eae20ce4ee65837e8a613b2246517803",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0145b2e0a4c0d85cf58372de0008558d",
"assets/AssetManifest.json": "6518850e611058a7f4ab760ccf339660",
"assets/NOTICES": "84690c13f2663fc0ebb5ebb5311cf821",
"assets/FontManifest.json": "c38b18d31bc2d3f8770cc40125860a0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "06abb9f0ab0a65408eb6a4255539a465",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/order_bg.png": "9296f45be363af6a8ba752325c698ae2",
"assets/assets/images/user.svg": "b33b29809523c756fea5a1d3c7ca18e4",
"assets/assets/images/login_illustration.png": "ce03b6c8a474f691386d7e563d198073",
"assets/assets/images/person.svg": "7a874b25251cc9226de73f27f9fa5435",
"assets/assets/images/edit_order.png": "ef5328fa99c682d6af6b20670f3f9da2",
"assets/assets/images/delivered_icon.png": "45767d0d493d79b9d4137d55679f936b",
"assets/assets/images/start-tracking-orders-vector.png": "9dde92fced9731d3f212f5dab669b15f",
"assets/assets/images/amazon_logo.png": "eecbed452b869d5d5cf053757d79e92b",
"assets/assets/images/add_button.svg": "aeb3411e4cc5cd076b452348ae77d6f5",
"assets/assets/images/Orders-off.svg": "31499787a7d75653524257aff85061e1",
"assets/assets/images/no_orders.png": "9b224fc6ff53d40abaf80cf22dc11383",
"assets/assets/images/profile-off.svg": "219e3eeeb9f86f6cec8452ba69c3b5c6",
"assets/assets/images/start-tracking-orders-vector@2x.png": "7f23a3333aa4f706ee0378d5d9bed214",
"assets/assets/images/on_boading_illustration_one.png": "dbca73c94835f2879f2136fb1281e865",
"assets/assets/images/google-icon@2x.png": "e7540c24d7b4a5f4237b35db8d5dd06e",
"assets/assets/images/in_transit_icon.png": "2aab648170fa294cee2cea587f0840ee",
"assets/assets/images/notification2.png": "434ebb16c392cf0b735f44d01f04f8c3",
"assets/assets/images/noun-time.png": "85dd210933ed0c6052fcc628ead10717",
"assets/assets/images/location_icon.png": "f1cbaf40ad723b0bd16d39e7624a5b79",
"assets/assets/images/on_order_detail_illustration.png": "30f366876366f033066438b941394153",
"assets/assets/images/google-icon@3x.png": "24f4283b1929d14a01b91d30d0335d3b",
"assets/assets/images/google-icon.png": "67633bda1d9b8d6a2d39305a1712d690",
"assets/assets/images/top_bg.svg": "89d12bcdd348e8f9d5dc54f4fcc26d60",
"assets/assets/images/dispatched_icon.png": "cc0381c4a7c12a209ae013810dcdce9a",
"assets/assets/images/start-tracking-orders-vector@3x.png": "d6703af59da24e5f9af9f40d86612e26",
"assets/assets/images/home-on.svg": "f4d6e161b4f17003044e8d7890274aab",
"assets/assets/images/no_product.png": "5c458d7d4594cb46caff7245b023b334",
"assets/assets/images/on_boarding_illustration_two.png": "fd4e5222a986f373cc257472ed1fd6ca",
"assets/assets/images/emptyOrderList.png": "763d79ac56919a2ae2a3d75a9a0e05f7",
"assets/assets/images/orderPlaceholderImage.png": "04c4c07e777e14e651993b4ba54c1d71",
"assets/assets/icons/accounts/my_account@2x.png": "c3b8bb1a4df0361b08cb5041f4f04309",
"assets/assets/icons/accounts/faqs.png": "3423f9486ce33c206e72699f77849709",
"assets/assets/icons/accounts/privacy_policy@3x.png": "148ddfbe43515d408b2c2d5907c821bf",
"assets/assets/icons/accounts/write_us.png": "260abcb7f696ebedac9054fffaea2cd0",
"assets/assets/icons/accounts/faqs@3x.png": "a88bde263fccf4484c2b9a9114353482",
"assets/assets/icons/accounts/faqs@2x.png": "66284b209053135fe011ca6311cbc05d",
"assets/assets/icons/accounts/privacy_policy@2x.png": "03d8f0952f710741ee87fb94902b079f",
"assets/assets/icons/accounts/editIcon.png": "329f2c5df70626b134b04d5b4f2f6de7",
"assets/assets/icons/accounts/my_account@3x.png": "7b56b4b0103cb5c98a509c6d1233f146",
"assets/assets/icons/accounts/my_account.png": "2a23a23059d447db9e7aea40f653cfe5",
"assets/assets/icons/accounts/my_address@3x.png": "bd6b4de80077fc700293aaa1404b1982",
"assets/assets/icons/accounts/logout.png": "bb6d5d0fdec4a7c6fbff3f0367ec56bf",
"assets/assets/icons/accounts/arrow.png": "42c2e4353be1b4f1e10f0dec015228a6",
"assets/assets/icons/accounts/my_address.png": "96755a09fe7ea28e50d223e5bda28149",
"assets/assets/icons/accounts/my_address@2x.png": "c5162941d87f3c9461a7eff8e0db3b08",
"assets/assets/icons/accounts/terms_of_use.png": "9562ea3d13f46e5c44d7170054a54e8f",
"assets/assets/icons/accounts/edit_profile.png": "e7021354ffc565c65f0e991e072a4bdf",
"assets/assets/icons/accounts/bg@2x.png": "2b62279fee38ac25a52d0c614a4de9d7",
"assets/assets/icons/accounts/bg@3x.png": "bb8d0ea3a037b784c51bea3e09c1d034",
"assets/assets/icons/accounts/user_2_fill.png": "d2d819ab6644563c8be36d7edf654822",
"assets/assets/icons/accounts/privacy_policy.png": "b1a28cb45a4cf3fbb2852ca47857c3d1",
"assets/assets/icons/accounts/feedback@3x.png": "b79f810a029c4cae763914ca68555b47",
"assets/assets/icons/accounts/terms_of_use@3x.png": "84615cb8042ac26ff13d1d97374876d8",
"assets/assets/icons/accounts/write_us@3x.png": "06ea862d556d7061bcd4781bb1603cbe",
"assets/assets/icons/accounts/logout@3x.png": "adccad4decd8b5ca01e9589cdb6ed9b7",
"assets/assets/icons/accounts/logout@2x.png": "cd43da378b0a7351200f3396498abf9e",
"assets/assets/icons/accounts/feedback.png": "ff62367bf4c39f74bd1a5d98ec7c59e6",
"assets/assets/icons/accounts/write_us@2x.png": "f1f8d7f8346d7c62ff4c7640ed6c4819",
"assets/assets/icons/accounts/terms_of_use@2x.png": "73a0ca6aef95a4a0dacff545f7676a77",
"assets/assets/icons/accounts/feedback@2x.png": "ad35dbd25748aa0ea9a579021b22a424",
"assets/assets/icons/accounts/bg.png": "e2eb016b72376536fec47fe8638c1e86",
"assets/assets/lottie/on_boarding_illustration_two_new.json": "80ff809c037437471b81f9225ae518bb",
"assets/assets/lottie/loading.json": "f0e612cf74d1af1f2935fef331431796",
"assets/assets/lottie/on_boarding_illustration_one_new.json": "b13100e080daa89e535b0cb1e0d67a9d",
"assets/assets/lottie/on_boarding_illustration_three_new.json": "6dff1aa014a81d5aecc4e3c8496d8a4c",
"assets/assets/lottie/loader_spark.json": "522916c48dd8324e5a2397868ddb183c",
"assets/assets/lottie/splash_interaction.json": "ade5b0c1d56694d36e0e98a5366a4ca4",
"assets/assets/fonts/poppins/poppins_semibold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/poppins_regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
