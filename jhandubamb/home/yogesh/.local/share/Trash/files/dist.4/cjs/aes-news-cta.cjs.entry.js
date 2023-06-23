'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesNewsCtaCss = ":host {\n  display: block;\n}\n\naes-card {\n    @media (min-width: 640px) {\n  :host([news-type='external']) & {\n      -ms-flex-direction: row;\n      flex-direction: row\n  }\n    }\n}\n\ndiv[slot='content'] {\n    @media (min-width: 640px) {\n  :host([news-type='external']) & {\n      margin-left: 1.25rem\n  }\n    }\n}\n\nhr {\n  width: 33.333333%;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  margin-left: 0;\n}\n";

const AesNewsCta = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The type of news release. 'press' or 'external'
     */
    this.newsType = 'press';
  }
  render() {
    return (index.h(index.Host, null, index.h("aes-card", null, index.h("slot", { name: "multimedia", slot: "multimedia" }), index.h("div", { slot: "content" }, index.h("slot", { name: "contentTop" }), index.h("hr", null), index.h("slot", { name: "contentBottom" })))));
  }
};
AesNewsCta.style = aesNewsCtaCss;

exports.aes_news_cta = AesNewsCta;
