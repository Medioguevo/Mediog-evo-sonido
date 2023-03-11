// Taked from: https://googlechrome.github.io/samples/service-worker/basic/// 

import type { ServiceWorker, ExtendableEvent } from './service-worker'

import { build, files, version } from '$service-worker';

const worker: ServiceWorker = self;

const INSTALLATION_CACHE = `static-cache-${version}`;
const RUNTIME_CACHE = 'runtime';

const FILES_FOR_INSTALLATION_CACHE = build.concat(files)
	.concat([`${worker.registration.scope}service-worker.js`])

const REQUESTS = FILES_FOR_INSTALLATION_CACHE.map(
	url => new Request(url, {headers: {"If-Range": ""}})
)

/**
 * For debugging only
 */
function showCacheContent() {
	caches.open(INSTALLATION_CACHE).then(function(cache) {
		cache.keys().then(function(requests) {
		var urls = requests.map(function(request) {
			return request.url;
		});
		console.log(urls.sort());
		});
	});
}


worker.addEventListener('install', (event: ExtendableEvent) => {
	event.waitUntil(
		caches.open(INSTALLATION_CACHE)
			.then( cache => cache.addAll(REQUESTS) )
			.then( worker.skipWaiting() )
	)
})

worker.addEventListener('activate', (event: ExtendableEvent) => {
	const currentCaches = [INSTALLATION_CACHE, RUNTIME_CACHE];
	event.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
			})
			.then(cachesToDelete => Promise.all(
					cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))
			))
			.then( () => worker.clients.claim() )
	);
});

worker.addEventListener('fetch', (event: ExtendableEvent) => {
	//showCacheContent() //For debugging only
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
		  caches.match(event.request)
		  	.then(cachedResponse => cachedResponse ? cachedResponse : caches.open(RUNTIME_CACHE)
				.then(cache => fetch(event.request)
					.then(response => cache.put(event.request, response.clone())
							.then(() => response)
				))
			)
		)
	}
	
});