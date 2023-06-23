import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesSubmenuTitleCss = ":host{display:none}@media (min-width: 1024px){:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:1rem}}aes-icon{width:2rem;height:2rem;margin-right:1rem}";

const AesSubmenuTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("aes-icon", { icon: this.icon }), h("aes-heading", { sub: true, level: 3 }, h("slot", null))));
  }
};
AesSubmenuTitle.style = aesSubmenuTitleCss;

export { AesSubmenuTitle as aes_submenu_title };
