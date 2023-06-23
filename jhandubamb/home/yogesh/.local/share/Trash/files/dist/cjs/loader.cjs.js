'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-376f6f27.js');

/*
 Stencil Client Patch Esm v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["main-card_2.cjs",[[0,"our-features"],[0,"main-card",{"heading":[1],"subHeading":[1,"sub-heading"],"colorClass":[1,"color-class"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
