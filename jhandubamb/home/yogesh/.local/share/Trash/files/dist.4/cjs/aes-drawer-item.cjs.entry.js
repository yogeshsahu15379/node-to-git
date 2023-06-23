'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');
const enums = require('./enums-7b1793d0.js');

const aesDrawerItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;height:4rem;--bg-opacity:1;background-color:rgb(245, 245, 245);background-color:rgba(245, 245, 245, var(--bg-opacity));padding-left:1rem;padding-right:1rem;-ms-flex-pack:justify;justify-content:space-between}.icon-custom{width:1.5rem;margin-right:1.5rem}.icon-chevron{width:0.5rem;--text-opacity:1;color:rgb(245, 245, 245);color:rgba(245, 245, 245, var(--text-opacity))}";

const AesDrawerItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("aes-button", { variant: "none" }, this.icon && index.h("aes-icon", { class: "icon-custom", icon: this.icon }), index.h("span", { class: "button-text" }, index.h("slot", null))), index.h("aes-icon", { class: "icon-chevron", icon: enums.IconType.CHEVRON_RIGHT })));
  }
};
AesDrawerItem.style = aesDrawerItemCss;

exports.aes_drawer_item = AesDrawerItem;
