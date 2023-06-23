'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesSiteFooterCss = ":host{display:block;--bg-opacity:1;background-color:rgb(245, 245, 245);background-color:rgba(245, 245, 245, var(--bg-opacity));padding-top:1.5rem;padding-bottom:1.5rem}@media (min-width: 1024px){:host{padding-top:3rem;padding-bottom:3rem}}::slotted([slot='menus']){grid-column:span 12 / span 12}@media (min-width: 768px){::slotted([slot='menus']){grid-column:span 6 / span 6}}@media (min-width: 1024px){::slotted([slot='menus']){grid-column:span 3 / span 3}}::slotted(p[slot='copyright']){margin-top:1rem;margin-bottom:1rem}.footer-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1.5rem}::slotted(aes-menu-accordion){margin-bottom:2rem}@media (min-width: 768px){::slotted(aes-menu-accordion){margin-bottom:0}}.interactions{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-top:2.5rem;margin-bottom:2.5rem}@media (min-width: 768px){.interactions{-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:1;flex-shrink:1;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}}slot[name='social-links']{display:-ms-flexbox;display:flex;margin-top:2.5rem;margin-bottom:2.5rem;-ms-flex-pack:justify;justify-content:space-between}@media (min-width: 768px){slot[name='social-links']{-ms-flex-pack:start;justify-content:flex-start;margin-top:0;margin-bottom:0}}@media (min-width: 768px){::slotted([slot='social-links']){margin-right:2rem}}";

const AesSiteFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("aes-container", { role: "footertop", class: "footer-top" }, index.h("slot", { name: "footer-top" })), index.h("nav", null, index.h("aes-grid", { "gap-size": "none", "gap-size-md": "small" }, index.h("slot", { name: "menus" }))), index.h("aes-container", null, index.h("div", { class: "interactions" }, index.h("slot", { name: "social-links" }), index.h("slot", { name: "lang-select" })), index.h("slot", { name: "copyright" }))));
  }
};
AesSiteFooter.style = aesSiteFooterCss;

exports.aes_site_footer = AesSiteFooter;
