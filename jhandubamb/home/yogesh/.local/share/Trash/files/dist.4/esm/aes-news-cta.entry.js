import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesNewsCtaCss = ":host {\n  display: block;\n}\n\naes-card {\n    @media (min-width: 640px) {\n  :host([news-type='external']) & {\n      -ms-flex-direction: row;\n      flex-direction: row\n  }\n    }\n}\n\ndiv[slot='content'] {\n    @media (min-width: 640px) {\n  :host([news-type='external']) & {\n      margin-left: 1.25rem\n  }\n    }\n}\n\nhr {\n  width: 33.333333%;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  margin-left: 0;\n}\n";

const AesNewsCta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The type of news release. 'press' or 'external'
     */
    this.newsType = 'press';
  }
  render() {
    return (h(Host, null, h("aes-card", null, h("slot", { name: "multimedia", slot: "multimedia" }), h("div", { slot: "content" }, h("slot", { name: "contentTop" }), h("hr", null), h("slot", { name: "contentBottom" })))));
  }
};
AesNewsCta.style = aesNewsCtaCss;

export { AesNewsCta as aes_news_cta };
