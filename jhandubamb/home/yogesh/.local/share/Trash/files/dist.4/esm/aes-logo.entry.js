import { r as registerInstance, h } from './index-abd53505.js';

const aesLogoCss = ":host{display:inline-block}img{height:1.5rem}";

const AESLogo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("img", { src: this.logo, alt: 'this.logo' });
  }
};
AESLogo.style = aesLogoCss;

export { AESLogo as aes_logo };
