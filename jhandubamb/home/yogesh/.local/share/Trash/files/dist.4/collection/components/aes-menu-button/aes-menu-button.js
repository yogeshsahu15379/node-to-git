import { Component, Prop, h } from '@stencil/core';
/*
 * The AES Button component. Renders a button or an anchor element based on the props it receives.
 * @element aes-button
 * @slot defaultSlot
 */
export class AesButton {
  constructor() {
    /**
     * Whether to display a right arrow after the slot
     */
    this.shouldDisplayArrow = false;
  }
  render() {
    return (h("aes-button", { variant: "none" },
      this.icon && h("aes-icon", { icon: this.icon }),
      h("span", { class: "button-text" },
        h("slot", null))));
  }
  static get is() { return "aes-menu-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-menu-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-menu-button.css"]
  }; }
  static get properties() { return {
    "url": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The url to use for a link. This will render an anchor element.\nDo not set this prop if you are using the clickAction prop."
      },
      "attribute": "url",
      "reflect": false
    },
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
        "text": "The name of the icon being used for the button."
      },
      "attribute": "icon",
      "reflect": false
    },
    "shouldDisplayArrow": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to display a right arrow after the slot"
      },
      "attribute": "should-display-arrow",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
