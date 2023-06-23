'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesLogoCss = ":host{display:inline-block}img{height:1.5rem}";

const AESLogo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("img", { src: this.logo, alt: 'this.logo' });
  }
};
AESLogo.style = aesLogoCss;

exports.aes_logo = AESLogo;
