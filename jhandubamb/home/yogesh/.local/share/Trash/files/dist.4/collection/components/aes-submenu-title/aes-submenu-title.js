import { Component, Host, h, Prop } from '@stencil/core';
/**
 * The Submenu Title element. Important note: This is hidden on mobile.
 * @element aes-submenu-title
 * @slot defaultSlot
 */
export class AesSubmenuTitle {
  render() {
    return (h(Host, null,
      h("aes-icon", { icon: this.icon }),
      h("aes-heading", { sub: true, level: 3 },
        h("slot", null))));
  }
  static get is() { return "aes-submenu-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-submenu-title.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-submenu-title.css"]
  }; }
  static get properties() { return {
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconType",
        "resolved": "IconType",
        "references": {
          "IconType": {
            "location": "import",
            "path": "../../utils/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The icon to display next to the text."
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
