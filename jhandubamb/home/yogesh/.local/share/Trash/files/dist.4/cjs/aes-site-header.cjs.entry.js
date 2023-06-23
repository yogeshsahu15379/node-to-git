'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');
const enums = require('./enums-7b1793d0.js');

const aesSiteHeaderCss = ":host{display:block;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));-webkit-box-shadow:-4px 0px 24px 2px rgba(0, 0, 0, 0.06);box-shadow:-4px 0px 24px 2px rgba(0, 0, 0, 0.06)}button{background-color:transparent;border-style:none}.wrapper{height:5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:1.5rem;padding-right:1.5rem}::slotted([slot='logo']){display:block;position:relative;margin-right:2rem;z-index:40;-ms-flex-positive:1;flex-grow:1}@media (min-width: 1024px){::slotted([slot='logo']){-ms-flex:none;flex:none}}.menu-open{margin-right:-1rem}.menu-close{position:absolute;top:0;right:0;padding:0.5rem}@media (min-width: 1024px){.menu-open,.menu-close{display:none}}aes-icon{display:inline-block;width:1.5rem}aes-logo{display:inline-block}.search-open{display:none}@media (min-width: 1024px){.search-open{display:block;margin-right:-1rem}}.overlay{position:absolute;z-index:30;top:0;right:0;bottom:0;left:0;--bg-opacity:1;background-color:rgb(245, 245, 245);background-color:rgba(245, 245, 245, var(--bg-opacity));display:none}@media (min-width: 1024px){.overlay{display:block;position:relative;background-color:transparent;-ms-flex-positive:1;flex-grow:1}}.overlay.open{display:block;max-height:100vh}.nav-wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;padding-top:5rem;padding-left:2.5rem;padding-right:2.5rem;height:100%}@media (min-width: 1024px){.nav-wrapper{padding-top:0;padding-left:0;padding-right:0}}.nav-scrollable{height:100%;overflow-y:auto;overflow-x:hidden\n  }@media (min-width: 1024px){.nav-scrollable{overflow:visible}}.search{margin-top:1rem;margin-bottom:1rem}@media (min-width: 1024px){.search{display:none;position:absolute;left:0;z-index:20;width:100%;--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));--transform-translate-y:-50%;top:50%}}@media (min-width: 1024px){.search.open{display:block}}ul{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;list-style-type:none;margin:0;padding:0}@media (min-width: 1024px){ul{-ms-flex-direction:row;flex-direction:row}}::slotted(li){font-size:1.25rem;margin-top:1rem;margin-bottom:1rem}@media (min-width: 1024px){::slotted(li){font-size:1rem;margin-left:1.5rem;margin-right:1.5rem;margin-top:0;margin-bottom:0}}";

const AesSiteHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Whether or not the menu is open. (Med- only.)
     */
    this.menuIsOpen = false;
    /**
     * Whether or not the search is open. (Large+ only.)
     */
    this.searchIsOpen = false;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
  toggleSearch() {
    this.searchIsOpen = !this.searchIsOpen;
  }
  render() {
    return (index.h(index.Host, null, index.h("header", null, index.h("aes-container", { class: "wrapper" }, index.h("slot", { name: "logo" }), index.h("div", { class: {
        open: this.menuIsOpen,
        overlay: true,
      } }, index.h("aes-container", { class: "nav-wrapper" }, index.h("div", { class: "nav-scrollable" }, index.h("div", { class: {
        open: this.searchIsOpen,
        search: true,
      } }, index.h("slot", { name: "search-form" })), index.h("nav", { role: "navigation", "aria-label": "main navigation" }, index.h("ul", null, index.h("slot", { name: "nav" }))), index.h("aes-button", { class: "menu-close", onClick: this.toggleMenu, "aria-label": "Close Menu", variant: "none" }, index.h("aes-icon", { icon: enums.IconType.CLOSE }))))), index.h("slot", { name: "user-buttons" }), index.h("aes-button", { class: "menu-open", onClick: this.toggleMenu, "aria-label": "Open Menu", variant: "none" }, index.h("aes-icon", { class: "w-6", icon: enums.IconType.AES_HAMBURGER })), index.h("slot", { name: "language-selector" })))));
  }
};
AesSiteHeader.style = aesSiteHeaderCss;

exports.aes_site_header = AesSiteHeader;
