import { p as promiseResolve, b as bootstrapLazy } from './index-c49ba09d.js';

/*
 Stencil Client Patch Esm v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["main-card_2",[[0,"our-features"],[0,"main-card",{"heading":[1],"subHeading":[1,"sub-heading"],"colorClass":[1,"color-class"]}]]]], options);
  });
};

export { defineCustomElements };
