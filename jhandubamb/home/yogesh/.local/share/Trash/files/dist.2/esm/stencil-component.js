import { p as promiseResolve, b as bootstrapLazy } from './index-c49ba09d.js';

/*
 Stencil Client Patch Browser v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["main-card_2",[[0,"our-features"],[0,"main-card",{"heading":[1],"subHeading":[1,"sub-heading"],"colorClass":[1,"color-class"]}]]]], options);
});
