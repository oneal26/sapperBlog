!function(){"use strict";const e=["client/client.ffc661c1.js","client/screenplay.1d287f49.js","client/visuals.e2ca0cff.js","client/index.9765f189.js","client/jams.af05ab2a.js","client/client.817cd0cb.js"].concat(["service-worker-index.html","IMG_3007.GIF","apple.png","applemusic.png","botanicalscreenplaycover.jpg","coop.ttf","cooperregular.ttf","favicon.png","global.css","great-success.png","icon.png","logo-192.png","logo-512.png","manifest.json","marketberri.png","pdf/Botanical.epub","pdf/Botanical.pages","pdf/BotanicalLocked.pdf","pdf/BotanicalUnlocked.pdf","pdf/botanicalVert.pdf","reedcat.png","rubber.png","soundcloud.png","spotify.png","tidal.jpg","vineberri.PNG"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1598907492350").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1598907492350"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1598907492350").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
