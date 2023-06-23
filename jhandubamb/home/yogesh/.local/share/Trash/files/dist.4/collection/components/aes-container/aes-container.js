import { Component, Host, h, Prop } from '@stencil/core';
/**
 * The page container component.
 *
 * @element aes-container
 * @slot defaultSlot
 */
export class AESContainer {
  constructor() {
    /**
     * Whether or not this is a nested container. If it's nested, remove padding.
     */
    this.isNested = false;
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "aes-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-container.css"]
  }; }
  static get properties() { return {
    "isNested": {
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
        "text": "Whether or not this is a nested container. If it's nested, remove padding."
      },
      "attribute": "is-nested",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
