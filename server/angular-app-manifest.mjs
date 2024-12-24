
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/first-angular-app/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/first-angular-app/browser"
  }
],
  assets: {
    'index.csr.html': {size: 567, hash: '5ecfa1b6352a057543229395017eed994e0c13fe86c349c1ac2b5a71cc081207', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: 'faf68b9e8062e21876b61c149d0532e55d5b03e1e49a66da70a70bfcfccfcd37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 856, hash: 'ba88a16210895b5cebec19d7112493f3fcbf720aad13c3b5211ca12087bc9603', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
