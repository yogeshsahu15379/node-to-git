import { Component, h, Prop } from '@stencil/core';
/*
 * The AES Menu Link component. Renders an anchor for the menu.
 * @element aes-menu-link
 * @slot defaultSlot
 */
export class AesMenuLink {
  constructor() {
    /**
     * The link target.
     */
    this.target = '_self';
  }
  render() {
    return (h("a", { href: this.url, target: this.target, "aria-current": this.active, rel: this.target === '_blank' ? 'noreferrer  noopener' : '' },
      h("slot", null)));
  }
  static get is() { return "aes-menu-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-menu-link.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-menu-link.css"]
  }; }
  static get properties() { return {
    "active": {
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
        "text": "Whether or not the link is active."
      },
      "attribute": "active",
      "reflect": true
    },
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
        "text": "The link URL."
      },
      "attribute": "url",
      "reflect": false
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LinkTarget",
        "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
        "references": {
          "LinkTarget": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The link target."
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    }
  }; }
}
