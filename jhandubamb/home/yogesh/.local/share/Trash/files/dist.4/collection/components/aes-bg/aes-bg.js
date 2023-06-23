import { Component, Host, Prop, h } from '@stencil/core';
/**
 * A component to handle setting background colors for children in the shadow DOM
 * @element aes-bg
 * @slot defaultSlot
 */
export class AesBg {
  constructor() {
    /**
     * The image to apply to the background
     */
    this.imageUrl = '';
  }
  render() {
    return (h(Host, { style: { backgroundImage: `url('${this.imageUrl}')` } },
      h("slot", null)));
  }
  static get is() { return "aes-bg"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-bg.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-bg.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "NeutralColor",
        "resolved": "\"neutrals-black\" | \"neutrals-gray1\" | \"neutrals-gray2\" | \"neutrals-gray3\" | \"neutrals-gray4\" | \"neutrals-gray5\" | \"neutrals-white\" | \"transparent\"",
        "references": {
          "NeutralColor": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The neutral color to apply to the background"
      },
      "attribute": "color",
      "reflect": true
    },
    "imageUrl": {
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
        "text": "The image to apply to the background"
      },
      "attribute": "image-url",
      "reflect": true,
      "defaultValue": "''"
    },
    "imagePosition": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top-right' | 'bottom'",
        "resolved": "\"bottom\" | \"top-right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The position of the image."
      },
      "attribute": "image-position",
      "reflect": true
    }
  }; }
}
