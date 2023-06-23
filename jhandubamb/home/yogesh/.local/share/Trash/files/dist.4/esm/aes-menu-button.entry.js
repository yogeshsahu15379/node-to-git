import { r as registerInstance, h } from './index-abd53505.js';

const aesMenuButtonCss = ":host{display:block}.button-text{display:none;margin-left:0.75rem}@media (min-width: 1280px){.button-text{display:inline}}aes-icon{display:inline-block;width:1.5rem}";

const AesButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Whether to display a right arrow after the slot
     */
    this.shouldDisplayArrow = false;
  }
  render() {
    return (h("aes-button", { variant: "none" }, this.icon && h("aes-icon", { icon: this.icon }), h("span", { class: "button-text" }, h("slot", null))));
  }
};
AesButton.style = aesMenuButtonCss;

export { AesButton as aes_menu_button };
