import { Component, Host, h, State, Element } from '@stencil/core';
export class AesMenuDropdownContent {
  componentWillLoad() {
    this.hasRightSlot =
      this.hostElement.querySelector('[slot="right"]') !== null;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "left" },
        h("slot", { name: "left" })),
      this.hasRightSlot && (h("div", { class: "right" },
        h("slot", { name: "right" })))));
  }
  static get is() { return "aes-menu-dropdown-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-menu-dropdown-content.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-menu-dropdown-content.css"]
  }; }
  static get states() { return {
    "hasRightSlot": {}
  }; }
  static get elementRef() { return "hostElement"; }
}
