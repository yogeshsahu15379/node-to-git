import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesParagraphCss = "@apply base; :host{display:block;font-family:neue-haas-grotesk-text, Helvetica, Arial, sans-serif;font-size:1.125rem;margin-top:1rem;margin-bottom:1rem}";

const AesParagraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
AesParagraph.style = aesParagraphCss;

export { AesParagraph as aes_paragraph };
