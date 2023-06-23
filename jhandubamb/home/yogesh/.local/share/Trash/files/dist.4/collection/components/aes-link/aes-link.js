import { Component, h, Prop } from '@stencil/core';
/**
 * The AES Link component
 * @element aes-link
 * @slot defaultSlot
 */
export class AESLink {
  constructor() {
    /**
     * The <a> target attribute
     */
    this.target = '_self';
  }
  render() {
    return (h("a", { "aria-label": this.href, href: this.href, target: this.target, rel: this.target === '_blank' ? 'noreferrer  noopener' : this.rel },
      h("slot", null)));
  }
  static get is() { return "aes-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-link.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-link.css"]
  }; }
  static get properties() { return {
    "href": {
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
        "text": "The <a> href attribute"
      },
      "attribute": "href",
      "reflect": false
    },
    "rel": {
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
        "text": "The <a> rel attribute"
      },
      "attribute": "rel",
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
        "text": "The <a> target attribute"
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    }
  }; }
}
