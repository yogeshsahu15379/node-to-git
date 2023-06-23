import { Component, Host, Prop, h } from '@stencil/core';
/**
 * A wrapper component that provides padding to any axis (t,r,b,l)
 *
 * @element aes-spacer
 * @slot default - Wrapped content that needs some padding on an axis.
 */
export class AesSpacer {
  constructor() {
    /**
     * Top spacing from Tailwind config
     */
    this.t = '0';
    /**
     * Right spacing from Tailwind config
     */
    this.r = '0';
    /**
     * Bottom spacing from Tailwind config
     */
    this.b = '0';
    /**
     * Left spacing from Tailwind config
     */
    this.l = '0';
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "aes-spacer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-spacer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-spacer.css"]
  }; }
  static get properties() { return {
    "t": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Top spacing from Tailwind config"
      },
      "attribute": "t",
      "reflect": true,
      "defaultValue": "'0'"
    },
    "r": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Right spacing from Tailwind config"
      },
      "attribute": "r",
      "reflect": true,
      "defaultValue": "'0'"
    },
    "b": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Bottom spacing from Tailwind config"
      },
      "attribute": "b",
      "reflect": true,
      "defaultValue": "'0'"
    },
    "l": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Left spacing from Tailwind config"
      },
      "attribute": "l",
      "reflect": true,
      "defaultValue": "'0'"
    }
  }; }
}
