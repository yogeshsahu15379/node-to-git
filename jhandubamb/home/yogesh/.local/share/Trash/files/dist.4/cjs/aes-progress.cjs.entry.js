'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesProgressCss = ":host{display:-ms-flexbox;display:flex;width:100%;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));--bg-opacity:0.4;border-radius:9999px;height:6px}.value{--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));border-radius:9999px;}";

const AesProgress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "value", style: { width: `${(this.value / this.max) * 100}%` } })));
  }
};
AesProgress.style = aesProgressCss;

exports.aes_progress = AesProgress;
