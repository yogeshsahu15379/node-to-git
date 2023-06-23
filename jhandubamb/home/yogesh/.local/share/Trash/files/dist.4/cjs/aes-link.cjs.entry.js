'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesLinkCss = "a{text-decoration:none;font-family:neue-haas-grotesk-text, Helvetica, Arial, sans-serif;--text-opacity:1;color:rgb(33, 74, 222);color:rgba(33, 74, 222, var(--text-opacity));-webkit-transition-property:background-color, border-color, color, fill, stroke;transition-property:background-color, border-color, color, fill, stroke;-webkit-transition-duration:300ms;transition-duration:300ms}a:visited,a:hover{--text-opacity:1;color:rgb(140, 92, 242);color:rgba(140, 92, 242, var(--text-opacity))}";

const AESLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The <a> target attribute
     */
    this.target = '_self';
  }
  render() {
    return (index.h("a", { "aria-label": this.href, href: this.href, target: this.target, rel: this.target === '_blank' ? 'noreferrer  noopener' : this.rel }, index.h("slot", null)));
  }
};
AESLink.style = aesLinkCss;

exports.aes_link = AESLink;
