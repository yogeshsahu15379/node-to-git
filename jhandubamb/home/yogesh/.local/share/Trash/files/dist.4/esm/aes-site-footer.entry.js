import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesSiteFooterCss = ":host{display:block;--bg-opacity:1;background-color:rgb(245, 245, 245);background-color:rgba(245, 245, 245, var(--bg-opacity));padding-top:1.5rem;padding-bottom:1.5rem}@media (min-width: 1024px){:host{padding-top:3rem;padding-bottom:3rem}}::slotted([slot='menus']){grid-column:span 12 / span 12}@media (min-width: 768px){::slotted([slot='menus']){grid-column:span 6 / span 6}}@media (min-width: 1024px){::slotted([slot='menus']){grid-column:span 3 / span 3}}::slotted(p[slot='copyright']){margin-top:1rem;margin-bottom:1rem}.footer-top{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1.5rem}::slotted(aes-menu-accordion){margin-bottom:2rem}@media (min-width: 768px){::slotted(aes-menu-accordion){margin-bottom:0}}.interactions{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-top:2.5rem;margin-bottom:2.5rem}@media (min-width: 768px){.interactions{-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:1;flex-shrink:1;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}}slot[name='social-links']{display:-ms-flexbox;display:flex;margin-top:2.5rem;margin-bottom:2.5rem;-ms-flex-pack:justify;justify-content:space-between}@media (min-width: 768px){slot[name='social-links']{-ms-flex-pack:start;justify-content:flex-start;margin-top:0;margin-bottom:0}}@media (min-width: 768px){::slotted([slot='social-links']){margin-right:2rem}}";

const AesSiteFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("aes-container", { role: "footertop", class: "footer-top" }, h("slot", { name: "footer-top" })), h("nav", null, h("aes-grid", { "gap-size": "none", "gap-size-md": "small" }, h("slot", { name: "menus" }))), h("aes-container", null, h("div", { class: "interactions" }, h("slot", { name: "social-links" }), h("slot", { name: "lang-select" })), h("slot", { name: "copyright" }))));
  }
};
AesSiteFooter.style = aesSiteFooterCss;

export { AesSiteFooter as aes_site_footer };
