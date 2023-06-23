'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesMenuDropdownContentCss = ":host{display:-ms-inline-flexbox;display:inline-flex}.left,.right{-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box;width:18rem}.left{display:block}@media (min-width: 1024px){.left{padding-left:3rem}}.right{display:none}@media (min-width: 1024px){.right{display:block;margin-left:2rem;padding-left:2rem;display:block;border-width:0;border-left-width:1px;border-style:solid;--border-opacity:1;border-color:rgb(229, 229, 229);border-color:rgba(229, 229, 229, var(--border-opacity))}}@media (min-width: 1024px){::slotted(aes-submenu-title[slot='left']){--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));--transform-translate-x:-3rem}}";

const AesMenuDropdownContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.hasRightSlot =
      this.hostElement.querySelector('[slot="right"]') !== null;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "left" }, index.h("slot", { name: "left" })), this.hasRightSlot && (index.h("div", { class: "right" }, index.h("slot", { name: "right" })))));
  }
  get hostElement() { return index.getElement(this); }
};
AesMenuDropdownContent.style = aesMenuDropdownContentCss;

exports.aes_menu_dropdown_content = AesMenuDropdownContent;
