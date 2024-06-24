'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9d779299b9b8df580850f5e82397e44",
".git/config": "72c174b911d81fa80933052b73bfa8bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "42ff64f54f4e037c05af05671edf7cbb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fff76c57c0f041d1ccb4fe64ce5d82f0",
".git/logs/refs/heads/main": "9c61009ba10be70964f469b2a7803287",
".git/logs/refs/remotes/origin/main": "48a0a9248ffce34990dbb82c6701ab65",
".git/objects/07/37372a35fced7f609d7efcce66862d4bda7acd": "9f772d3728d50eda2d10013d1cb2a0b8",
".git/objects/09/f27d7194ee80b1361146afee1acd8a1497d22e": "0529d55ed46a1355db2b1d907370c6b5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/eb35bb49430e1188f727ecfd3a669b2815e2d1": "4ca2c5b1cfb4254dcee3739a810bbe38",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/92b4c1a2be8f50a3a31022d64876ccf40801df": "ad41550ddd75897957b90fa7a4b44fe6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/d2254ce3179230868f32a6f16d62b77e780824": "fe57dc223a468ffe4d2ce693a63c53fe",
".git/objects/2b/8105c32cecc34ddfacba374f2064974d1fce61": "46074844582763518ccc0094bf95481a",
".git/objects/37/08c75b2d37259b1afb04145acf14f6bcf843e2": "eae299a487983034545432a02c40709e",
".git/objects/38/0ea275f94e831d156cd06a6c295530d9e36904": "f3908d7a82e4548d15403cc69047b33e",
".git/objects/39/ca9543467ce3e2496f9a14e8fe845ef4fa3c5a": "5662957c93fd7fb858bf655e9d4f65b6",
".git/objects/46/352f2239507a4482bc0be35137561c14a2f4d8": "50d85646706a7a12a31e49576149382d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/51/412b65341d2c3ed0799bd14e3df76c5d6f0e6d": "dd21e67da4b65c622ac23bf0f7d19c78",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/9de53135fd7523f431857a3a6f7a7fd387c7e1": "d458dbfb8dd8ada451cc61341ccfe661",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/7b38c430892c80a6ae272624c045b41bc73fa5": "6f0212d228276f89bd72724f896341f4",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/cd1473d5f48e4e808a900d63a7d3540c5ca1d7": "f8baa115ea9e0383864e87f1166755e6",
".git/objects/67/8b2c3e78e05dc07ad537e26b4850f604ad27fb": "2c83619d354049418b08aa39f63da6ab",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/3235a348f11a165006bd15bb8fb24e7e4955c8": "bc8814f532bb4ecb1df15047cbefeb03",
".git/objects/75/d7347d619aa25e9071d4e1fa97aef707481c13": "457d60c454e14d1ddd30ae2eb7a46f71",
".git/objects/77/d07dd572de8c342a874b615e94589afb33b44b": "eb79cf9195fee1847c0b00f725e0b75e",
".git/objects/82/296a3daf1e9fdcafa4ed92bd391a998c26d53f": "d0c4974c0c65fd387f1bc0ab415a7599",
".git/objects/84/0ec3454a0ac11c075ebfa1aa240df93cdd1279": "b6c07a9d28cbe894bf3a096575ff69cc",
".git/objects/84/50f8b9c9ec46a0b3759c917d2a58c6377f7f28": "0d29418992eebbd526141b8fbe0d0db5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/d916fe07410c9cd7ca250985e61cddf7bec8d2": "0bd289dcb693b7c9048f5b64201b9ecf",
".git/objects/8f/6d7592c1f01a55f7091155a6e8be459331793f": "0b59ef4955c9f7f52fbfa73795c98c6b",
".git/objects/90/73a0047c9aada11f69cc0e2dcae8570cf4673a": "20ba306129e1556351e81104a5478a68",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/0d29b7119651f0f50e17af9be281d6685b17f6": "b9a2aa7be0aa1b14f5d7ab43668c9e41",
".git/objects/9f/81c1d8dfa3f4c5cc059628c32c6adc06f64413": "e87a4001ebc2024c00aed0d90de05e41",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a3/a3632877843e6c832d5ca22a70c77eeb368ce0": "f9b67daa316d8db052713388acced8b6",
".git/objects/a4/32f1bec1ff66d9c185fdd9d94cc6bf0b1be898": "075f07153d6a053d8e5d9e1ecfda1630",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/eaadee2964676386239eb85523586e98dba7c4": "16f4b358b9cd133f204190cee43ef88c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/6761834bc5ad8c1c9e50a933c51f9aba0f8ff0": "c3ae2f511c5692310b6c11d02ea6fd96",
".git/objects/ba/86e908072074e9f2375ef98f972665e99efbcc": "29a6c56813426687e575b281b6a8efbe",
".git/objects/bb/7d8a3915a5bbfe7c08b818992839c5923c9ac7": "24b22ca96fc99eb28f62059063c2b458",
".git/objects/bd/240666b99fdd19cb939219534da1d892cbb854": "41680c1f838f0eb330cf587ac4556d97",
".git/objects/be/36be1eb2068734c6a9601ffdc5f3a393776b5a": "11271eace609661cdfcfa25d143b4e10",
".git/objects/c2/4d0e23597cc4d826408affcdf613ea7d5fa874": "a62b2278de667d0b70abb086cc88c039",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/83182747f91f9bccbe81eea4d77159333b205c": "df37f0063f0c7d59d84f8f59e9835749",
".git/objects/ce/c3f1f6ba5d485c98a7176649d2468e5bc6eaa3": "5104eae6bb77667ba6808c7ba55f7685",
".git/objects/cf/c2e46ca3de48401dc90af84f041be8e3fb4017": "919b4045c305534e41984be8256ed792",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/a7c2a89ad979255018c572d6fb1fb3c100c61f": "2794635224881df44d38c1b3760d6bab",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e5/4fe05e7e84af29c0a2bdd0617d1c2d08d2d81a": "035e2d76db941cc739e614ee2e040eef",
".git/objects/e6/412b227e48e17b6c847004a2f54346950b21b2": "b92ade082a110f32694008791b5c4c56",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cbd3278c3140cd3fba03d3714990dc14adc249": "3a54fae27f343f35ac0d3196e141b309",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/8045e77ab4c2c7da2a47228f360fa57aa504e3": "49e3bd0ff033d3c41c4a5a331b74939c",
".git/refs/heads/main": "2de918f8dfcde144e21830855152bd50",
".git/refs/remotes/origin/main": "2de918f8dfcde144e21830855152bd50",
"assets/AssetManifest.bin": "d6bd935bf274ef893f0c028ba6ffdb8d",
"assets/AssetManifest.bin.json": "041f472d49e859854ff058645973f179",
"assets/AssetManifest.json": "369e8a2e13b68279a698512e309c6936",
"assets/assets/images/active.png": "140645426e1eb7626834aea2d86bed79",
"assets/assets/images/appbar_logo.png": "f45a7eedeef20a6365052da278f4d432",
"assets/assets/images/cover.png": "338556d3a96fc9705b89921fb1dc58b5",
"assets/assets/images/cover1.png": "c8ead3b365ce59d917e8e6c862ded073",
"assets/assets/images/inactive.png": "cec2249a240bd63c15b95ce049907d3a",
"assets/assets/images/staff.png": "e871f266ec5c1ced83627525817fc26f",
"assets/assets/images/staff2.png": "7ee7e779afbfddcb619b106194e82c17",
"assets/assets/images/student.png": "e2123a640a4cc881b7f9aeaa62dda114",
"assets/assets/images/student2.png": "839e8e18914555a525445fa49498e350",
"assets/assets/images/user.png": "70fcd936deef342cf02c212096607f21",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e63092f09f27d3717955878174f1dcdd",
"assets/NOTICES": "8ca5d46e9d511b487b4076e966fb6698",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2579814899fb7bec904ed911d2e0184b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e322deb64bce95e83abb063b7311f628",
"/": "e322deb64bce95e83abb063b7311f628",
"main.dart.js": "9b87be2d030ac39aeeda12eedd2243da",
"manifest.json": "a56b92299f44cb7bc73398d7e775c355",
"version.json": "2729fb892bfbf62dbf2d2245b5834424"};
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
