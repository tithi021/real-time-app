


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '*' }).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};



// var CACHE_NAME = 'my-site-cache-v1';
// // The files we want to cache
// var urlsToCache = [
//   '/js/app.js',
//   '/js/module.js',
//   '/js/service-worker.js',
//   '/js/tickets.js',
//   '/partials/dashboard.html',
//   '/index.html',
//   '/server/index.js',
//   'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js',
//   'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js',
//   'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-rc.0/angular-resource.min.js',
//   '/socket.io/socket.io.js'
// ];


