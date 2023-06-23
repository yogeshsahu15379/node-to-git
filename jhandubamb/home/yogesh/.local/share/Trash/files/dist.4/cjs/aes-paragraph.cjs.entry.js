'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesParagraphCss = "@apply base; :host{display:block;font-family:neue-haas-grotesk-text, Helvetica, Arial, sans-serif;font-size:1.125rem;margin-top:1rem;margin-bottom:1rem}";

const AesParagraph = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
AesParagraph.style = aesParagraphCss;

exports.aes_paragraph = AesParagraph;
