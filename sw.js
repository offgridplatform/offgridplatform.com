if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>a(e,i),f={module:{uri:i},exports:n,require:r};s[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/E9UQquoeLuAU0hShz1kar/_buildManifest.js",revision:"8de61ec35095904172bc92be6defff6c"},{url:"/_next/static/E9UQquoeLuAU0hShz1kar/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1194-1f7cbe273c3e0208.js",revision:"1f7cbe273c3e0208"},{url:"/_next/static/chunks/1330.dc00c1bfc9f39e7e.js",revision:"dc00c1bfc9f39e7e"},{url:"/_next/static/chunks/1641-b5b6623b1ae527bf.js",revision:"b5b6623b1ae527bf"},{url:"/_next/static/chunks/1891-01d184c885b6a0d8.js",revision:"01d184c885b6a0d8"},{url:"/_next/static/chunks/1926.379ef45e848160ab.js",revision:"379ef45e848160ab"},{url:"/_next/static/chunks/1bfc9850-b7d3dd618d4cf989.js",revision:"b7d3dd618d4cf989"},{url:"/_next/static/chunks/2717-711b8cd5d04e3f7a.js",revision:"711b8cd5d04e3f7a"},{url:"/_next/static/chunks/2764-4aacff473526aa7d.js",revision:"4aacff473526aa7d"},{url:"/_next/static/chunks/2951-bd5b2ae47ddd4e11.js",revision:"bd5b2ae47ddd4e11"},{url:"/_next/static/chunks/3136-ded845f2d4e5b623.js",revision:"ded845f2d4e5b623"},{url:"/_next/static/chunks/3295.d34186d7e9d72814.js",revision:"d34186d7e9d72814"},{url:"/_next/static/chunks/3342.f185fd0734d1940c.js",revision:"f185fd0734d1940c"},{url:"/_next/static/chunks/3381-f58fd70748015407.js",revision:"f58fd70748015407"},{url:"/_next/static/chunks/3382.e40e48fb00285dad.js",revision:"e40e48fb00285dad"},{url:"/_next/static/chunks/4146-041e1de7ccd2d0cd.js",revision:"041e1de7ccd2d0cd"},{url:"/_next/static/chunks/4684.02adc550417ecffe.js",revision:"02adc550417ecffe"},{url:"/_next/static/chunks/5502-eaf33fd7dde093d4.js",revision:"eaf33fd7dde093d4"},{url:"/_next/static/chunks/6099-48bfedc59bfbe2e4.js",revision:"48bfedc59bfbe2e4"},{url:"/_next/static/chunks/6736.11b576775ada7491.js",revision:"11b576775ada7491"},{url:"/_next/static/chunks/6843-87570e2018565a13.js",revision:"87570e2018565a13"},{url:"/_next/static/chunks/7078.f102ffd8e59c6f1a.js",revision:"f102ffd8e59c6f1a"},{url:"/_next/static/chunks/7309.a4e086d401457fef.js",revision:"a4e086d401457fef"},{url:"/_next/static/chunks/7915.41928125ee4fbe8d.js",revision:"41928125ee4fbe8d"},{url:"/_next/static/chunks/9197-dcd7fbe36ea72be3.js",revision:"dcd7fbe36ea72be3"},{url:"/_next/static/chunks/fec483df-443a26b090b240a9.js",revision:"443a26b090b240a9"},{url:"/_next/static/chunks/framework-4ed89e9640adfb9e.js",revision:"4ed89e9640adfb9e"},{url:"/_next/static/chunks/main-ef5ff1a3ac830f06.js",revision:"ef5ff1a3ac830f06"},{url:"/_next/static/chunks/pages/_app-fda6942cb395e645.js",revision:"fda6942cb395e645"},{url:"/_next/static/chunks/pages/_error-f2496e8b9fdedb89.js",revision:"f2496e8b9fdedb89"},{url:"/_next/static/chunks/pages/about-a5c2e268a8c6bb5d.js",revision:"a5c2e268a8c6bb5d"},{url:"/_next/static/chunks/pages/affiliates-2e0199eec5105646.js",revision:"2e0199eec5105646"},{url:"/_next/static/chunks/pages/apps-f514ab83147be8e5.js",revision:"f514ab83147be8e5"},{url:"/_next/static/chunks/pages/apps/arbitrage-tracker-dceb2293a70292b5.js",revision:"dceb2293a70292b5"},{url:"/_next/static/chunks/pages/apps/bot-maker-f3bf1ba49276b82d.js",revision:"f3bf1ba49276b82d"},{url:"/_next/static/chunks/pages/apps/bulk-sender-441699f476963b2b.js",revision:"441699f476963b2b"},{url:"/_next/static/chunks/pages/apps/bulk-wallet-generator-a3fee20fe0424fb3.js",revision:"a3fee20fe0424fb3"},{url:"/_next/static/chunks/pages/apps/coder-9f2a42b7964f932b.js",revision:"9f2a42b7964f932b"},{url:"/_next/static/chunks/pages/apps/combo-maker-c32ea06f5e9592fc.js",revision:"c32ea06f5e9592fc"},{url:"/_next/static/chunks/pages/apps/faucet-c838bdd24a1401da.js",revision:"c838bdd24a1401da"},{url:"/_next/static/chunks/pages/apps/ipfs-3c9972c767311e76.js",revision:"3c9972c767311e76"},{url:"/_next/static/chunks/pages/apps/portfolio-3ffd07b38c367d79.js",revision:"3ffd07b38c367d79"},{url:"/_next/static/chunks/pages/apps/revoke-allowance-ac5f7e1b4c684a8c.js",revision:"ac5f7e1b4c684a8c"},{url:"/_next/static/chunks/pages/apps/transaction-inspector-c1d2404023bca3c4.js",revision:"c1d2404023bca3c4"},{url:"/_next/static/chunks/pages/apps/transaction-replays-c4f2c5e339725ff3.js",revision:"c4f2c5e339725ff3"},{url:"/_next/static/chunks/pages/index-54357be879c1e7d8.js",revision:"54357be879c1e7d8"},{url:"/_next/static/chunks/pages/media-da2728939ea249ae.js",revision:"da2728939ea249ae"},{url:"/_next/static/chunks/pages/partners-5741257a189260a8.js",revision:"5741257a189260a8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/reactPlayerDailyMotion.1b77bf5ff57384ae.js",revision:"1b77bf5ff57384ae"},{url:"/_next/static/chunks/reactPlayerFacebook.e5becaf1cbc24abe.js",revision:"e5becaf1cbc24abe"},{url:"/_next/static/chunks/reactPlayerFilePlayer.b9991ef2dd7b0904.js",revision:"b9991ef2dd7b0904"},{url:"/_next/static/chunks/reactPlayerKaltura.1ea2d5170779f755.js",revision:"1ea2d5170779f755"},{url:"/_next/static/chunks/reactPlayerMixcloud.5130a000858347b2.js",revision:"5130a000858347b2"},{url:"/_next/static/chunks/reactPlayerPreview.fff53f2b0a2b14ee.js",revision:"fff53f2b0a2b14ee"},{url:"/_next/static/chunks/reactPlayerSoundCloud.ba60edf2d94191c0.js",revision:"ba60edf2d94191c0"},{url:"/_next/static/chunks/reactPlayerStreamable.aa7b6e52e340ffa9.js",revision:"aa7b6e52e340ffa9"},{url:"/_next/static/chunks/reactPlayerTwitch.528328a6b1c28eaf.js",revision:"528328a6b1c28eaf"},{url:"/_next/static/chunks/reactPlayerVidyard.01c4de85d7456fe6.js",revision:"01c4de85d7456fe6"},{url:"/_next/static/chunks/reactPlayerVimeo.487f9c3115b09388.js",revision:"487f9c3115b09388"},{url:"/_next/static/chunks/reactPlayerWistia.69a19a923232e5c2.js",revision:"69a19a923232e5c2"},{url:"/_next/static/chunks/reactPlayerYouTube.b28b33f2f304bbb1.js",revision:"b28b33f2f304bbb1"},{url:"/_next/static/chunks/webpack-48ad1878b9b30094.js",revision:"48ad1878b9b30094"},{url:"/_next/static/css/daf7d606a431520c.css",revision:"daf7d606a431520c"},{url:"/manifest.json",revision:"a24afa6ec031c9987747c4dbc4166bfb"},{url:"/static/images/android-chrome-192x192.png",revision:"21686c4c678b5352f56a140364df49ac"},{url:"/static/images/android-chrome-512x512.png",revision:"03c00e25ad32bb250e0c1eb4ffa3eb01"},{url:"/static/images/apple-touch-icon.png",revision:"48a7181b88d54daeaa92e48878bbe052"},{url:"/static/images/bulk-sender-app-logo.png",revision:"0c49345135abaf81d16dbcc335457081"},{url:"/static/images/bulk-sender-logo.svg",revision:"b6aa889f1cc4c0325e1121c76e297a6f"},{url:"/static/images/favicon-16x16.png",revision:"49ac43e38956f9f1f457989969790c55"},{url:"/static/images/favicon-32x32.png",revision:"7205ae6ac2e659fb9e6f2c5b686f8199"},{url:"/static/images/favicon.ico",revision:"35fa58f59faf7379ce0eb987950cd807"},{url:"/static/images/logo-white.svg",revision:"4d3d01fc54fae2287cb08dfaf6394ea0"},{url:"/static/images/logo.svg",revision:"6bf16fe824760433bc170efbde999f77"},{url:"/static/images/product-bulk-sender-screen-1.png",revision:"88f6f1bec3ebd549fafad6aec62c4edc"},{url:"/static/images/product-bulk-sender-screen-2.png",revision:"7c11a886918de5d63684b7062035fb4e"},{url:"/static/images/www.offgridplatform.com.png",revision:"8083996fea2776633f1dc7ff92ce6669"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
