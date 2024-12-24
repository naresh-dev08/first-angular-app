
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://naresh-dev08.github.io/first-angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://naresh-dev08.github.io/first-angular-app"
  }
],
  assets: {
    'index.csr.html': {size: 569, hash: '49f9087a9d3bf6d6e29233ac07006003bc79e58cad43354643faadba93207269', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: '2424bf8540f17738427c30ddf6a6d0a5f08d695d806f773d21b8774322231050', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 858, hash: 'adcd6d98da086e2e7d2dd2ff51d15dc9e64aa8923273c96eab96b9c35ca59cf0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
