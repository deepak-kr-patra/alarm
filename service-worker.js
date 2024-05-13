importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');


const bgSyncPlugin = new BackgroundSyncPlugin('myQueueName', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        plugins: [bgSyncPlugin],
    })
);