// this.addEventListener('install', function(event){
// 	event.waitUntil(
// 		caches.create('static-v1').then(function(cache){
// 			return cache.add({
// 				  '/js',
// 				  '/js/app.js',
// 				  '/js/module.js',
// 				  '/js/service-worker.js',
// 				  '/js/tickets.js',
// 				  '/partials/dashboard.html',
// 				  '/index.html',
// 				  '/server/index.js',
// 				  'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js',
// 				  'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js',
// 				  'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-rc.0/angular-resource.min.js',
// 				  '/socket.io/socket.io.js'
// 			});
// 		});
// 	);
// });


this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
          '/js',
		  '/js/app.js',
		  '/js/module.js',
		  '/js/service-worker.js',
		  '/js/tickets.js',
		  '/partials/dashboard.html',
		  '/index.html',
		  '/server/index.js'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );
});