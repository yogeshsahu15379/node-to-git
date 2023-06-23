'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesCustomeLineCss = ".tm-scroll{position:relative;width:2px;height:100vh;background-color:#e5e5e5;overflow:hidden;margin:auto}.tm-scroll span{position:absolute;top:0;left:0;background-color:#77249e;width:100%;height:100%;-webkit-animation:scrollHelperFerro 2s ease-in-out;animation:scrollHelperFerro 2s ease-in-out}@-webkit-keyframes scrollHelperFerro{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes scrollHelperFerro{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}";

const AesCustomeLine = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "tm-scroll" }, index.h("span", null))));
  }
};
AesCustomeLine.style = aesCustomeLineCss;

exports.aes_custome_line = AesCustomeLine;
