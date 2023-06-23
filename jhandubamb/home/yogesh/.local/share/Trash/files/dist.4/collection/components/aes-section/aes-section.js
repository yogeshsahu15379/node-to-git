import { Component, Host, h, Prop } from '@stencil/core';
/**
 * The section component. This expands to the full width of whatever you place it in, but can be told to provide a container inside.
 *
 * @element aes-section
 * @slot defaultSlot
 */
export class AesSection {
  constructor() {
    /**
     * The background color (chosen from a given set of brand colors) of the section.
     */
    this.verticalPadding = 'small';
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "aes-section"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-section.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-section.css"]
  }; }
  static get properties() { return {
    "verticalPadding": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
        "references": {
          "Size": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The background color (chosen from a given set of brand colors) of the section."
      },
      "attribute": "vertical-padding",
      "reflect": false,
      "defaultValue": "'small'"
    }
  }; }
}
