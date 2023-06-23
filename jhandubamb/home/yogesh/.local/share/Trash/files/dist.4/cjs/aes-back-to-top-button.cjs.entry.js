'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');
const enums = require('./enums-7b1793d0.js');

const aesBackToTopButtonCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;cursor:pointer}@media (min-width: 1024px){:host{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1.5rem;padding-right:1.5rem;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));border-radius:9999px}}aes-icon{width:1rem;height:1rem;padding:1rem;margin-right:-1rem}@media (min-width: 1024px){aes-icon{height:1.25rem;width:1.25rem;padding:0;margin-right:0}}slot{display:none}@media (min-width: 1024px){slot{display:inline;margin-left:0.5rem;line-height:1.25}}";

const AesBackToTopButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  private(e) {
    e.preventDefault();
    scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("aes-icon", { icon: enums.IconType.ARROW_UP }), index.h("slot", null)));
  }
};
AesBackToTopButton.style = aesBackToTopButtonCss;

exports.aes_back_to_top_button = AesBackToTopButton;
