self.addEventListener('install', (e) => {
  console.log('TecnoPlus Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  // Permite que la app cargue online siempre
  e.respondWith(fetch(e.request));
});
