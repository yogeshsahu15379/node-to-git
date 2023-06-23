'use strict';

const index = require('./index-376f6f27.js');

/*
 Stencil Client Patch Browser v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-component.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["main-card_2.cjs",[[0,"our-features"],[0,"main-card",{"heading":[1],"subHeading":[1,"sub-heading"],"colorClass":[1,"color-class"]}]]]], options);
});
