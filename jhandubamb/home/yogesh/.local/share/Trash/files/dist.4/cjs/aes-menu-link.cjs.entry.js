'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesMenuLinkCss = ":host,.menu-link{display:inline-block}.menu-link,a{--text-opacity:1;color:rgb(0, 0, 0);color:rgba(0, 0, 0, var(--text-opacity));text-decoration:none;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem}:host([active]) a,.menu-link.active{--text-opacity:1;color:rgb(33, 74, 222);color:rgba(33, 74, 222, var(--text-opacity));border-width:0;border-bottom-width:2px;border-style:solid;--border-opacity:1;border-color:rgb(33, 74, 222);border-color:rgba(33, 74, 222, var(--border-opacity))}a:hover,.menu-link:hover{--text-opacity:1;color:rgb(33, 74, 222);color:rgba(33, 74, 222, var(--text-opacity))}";

const AesMenuLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The link target.
     */
    this.target = '_self';
  }
  render() {
    return (index.h("a", { href: this.url, target: this.target, "aria-current": this.active, rel: this.target === '_blank' ? 'noreferrer  noopener' : '' }, index.h("slot", null)));
  }
};
AesMenuLink.style = aesMenuLinkCss;

exports.aes_menu_link = AesMenuLink;