// TODO : Get the version declared in the package.json file
VERSION = '1.0.0';

self.addEventListener('install', (event) =>
    // TODO : Get the list of all files in dist (if possible...)
    event.waitUntil(
        caches.open(`v${VERSION}`).then((cache) => cache.addAll([
            `/bundle.${VERSION}.js`,
            `/index.html`,
            `/`
        ]))
    )
);

self.addEventListener('fetch', (event) =>
    event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request) ))
);