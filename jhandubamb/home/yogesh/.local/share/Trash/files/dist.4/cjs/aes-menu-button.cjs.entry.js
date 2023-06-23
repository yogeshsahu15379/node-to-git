'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesMenuButtonCss = ":host{display:block}.button-text{display:none;margin-left:0.75rem}@media (min-width: 1280px){.button-text{display:inline}}aes-icon{display:inline-block;width:1.5rem}";

const AesButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Whether to display a right arrow after the slot
     */
    this.shouldDisplayArrow = false;
  }
  render() {
    return (index.h("aes-button", { variant: "none" }, this.icon && index.h("aes-icon", { icon: this.icon }), index.h("span", { class: "button-text" }, index.h("slot", null))));
  }
};
AesButton.style = aesMenuButtonCss;

exports.aes_menu_button = AesButton;
