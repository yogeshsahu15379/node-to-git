'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesSubmenuTitleCss = ":host{display:none}@media (min-width: 1024px){:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:1rem}}aes-icon{width:2rem;height:2rem;margin-right:1rem}";

const AesSubmenuTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("aes-icon", { icon: this.icon }), index.h("aes-heading", { sub: true, level: 3 }, index.h("slot", null))));
  }
};
AesSubmenuTitle.style = aesSubmenuTitleCss;

exports.aes_submenu_title = AesSubmenuTitle;
