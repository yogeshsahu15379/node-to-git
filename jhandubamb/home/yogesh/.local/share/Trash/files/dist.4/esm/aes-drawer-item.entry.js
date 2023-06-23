import { r as registerInstance, h, H as Host } from './index-abd53505.js';
import { I as IconType } from './enums-3680f0a7.js';

const aesDrawerItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;height:4rem;--bg-opacity:1;background-color:rgb(245, 245, 245);background-color:rgba(245, 245, 245, var(--bg-opacity));padding-left:1rem;padding-right:1rem;-ms-flex-pack:justify;justify-content:space-between}.icon-custom{width:1.5rem;margin-right:1.5rem}.icon-chevron{width:0.5rem;--text-opacity:1;color:rgb(245, 245, 245);color:rgba(245, 245, 245, var(--text-opacity))}";

const AesDrawerItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("aes-button", { variant: "none" }, this.icon && h("aes-icon", { class: "icon-custom", icon: this.icon }), h("span", { class: "button-text" }, h("slot", null))), h("aes-icon", { class: "icon-chevron", icon: IconType.CHEVRON_RIGHT })));
  }
};
AesDrawerItem.style = aesDrawerItemCss;

export { AesDrawerItem as aes_drawer_item };