self.addEventListener('install', function(event){
    // fires when the browser installs the app
    // logging the event and the contents of the object passed to the event.
    // the purpose of this event is to give the service worker a place to setup the
    // local environment after the installation completes.
    console.log(`SW: Event fired: ${event.type}`);
});

self.addEventListener('activate', function(event){
    // fires after the service worker completes its installation.
    // a place for the service worker to clean up from
    // previous service worker versions.
    console.log(`SW: Event fired: ${event.type}`);
});

self.addEventListener('fetch', function(event){
    // fires when the app requests a resource (file or data)
    console.log(`SW: Fetching ${event.request.url}`);
    // next get the requested resource from the network
    event.respondWith(fetch(event.request));
});