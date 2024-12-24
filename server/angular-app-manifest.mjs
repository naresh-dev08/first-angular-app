
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/first-angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/first-angular-app"
  }
],
  assets: {
    'index.csr.html': {size: 559, hash: '4711d845c4de8d1e6cd87c2f13abb8c80caaf16ea41602588565f8e98a36d116', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '1e42c0e079fb57007bbe5c6eb4d0f59ba3b0cc8b6af574c0ae0508c294eb26d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 848, hash: 'baa9cffdc637113e3b43dd196d9306104c239b99eceb6db78143460b199d77b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
