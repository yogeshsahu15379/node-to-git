import { Component, Host, h, Prop } from '@stencil/core';
import { IconType } from '../../utils/enums';
export class AesDrawerItem {
  render() {
    return (h(Host, null,
      h("aes-button", { variant: "none" },
        this.icon && h("aes-icon", { class: "icon-custom", icon: this.icon }),
        h("span", { class: "button-text" },
          h("slot", null))),
      h("aes-icon", { class: "icon-chevron", icon: IconType.CHEVRON_RIGHT })));
  }
  static get is() { return "aes-drawer-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-drawer-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-drawer-item.css"]
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
        "text": "Choose which predefined icon to add to the link"
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
