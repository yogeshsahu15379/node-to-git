import { Component, h, Prop } from '@stencil/core';
import { IconType } from '../../utils/enums';
/*
 * The AES Button component. Renders a button or an anchor element based on the props it receives.
 * @element aes-button
 * @slot defaultSlot
 */
export class AesButton {
  constructor() {
    /**
     * The target to use for a link, used in conjunction with the url attribute.
     */
    this.target = '_self';
    /**
     * The button style variant to use.
     */
    this.variant = 'primary';
    /**
     * Whether to display a right arrow after the slot
     */
    this.shouldDisplayArrow = false;
  }
  render() {
    const arrowImage = ['arrow-link', 'secondary'].includes(this.variant)
      ? IconType.ARROW_RIGHT_BLUE
      : IconType.ARROW_RIGHT_WHITE;
    return this.url !== undefined ? (h("a", { class: `btn ${this.variant}`, href: this.url, target: this.target, rel: this.target === '_blank' ? 'noreferrer  noopener' : '' },
      h("slot", null),
      this.shouldDisplayArrow && (h("aes-icon", { class: "arrow", icon: arrowImage })))) : (h("button", { class: `btn ${this.variant}`, disabled: this.disabled },
      h("slot", null),
      this.shouldDisplayArrow && (h("aes-icon", { class: "arrow", icon: arrowImage }))));
  }
  static get is() { return "aes-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-button.css"]
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
        "text": "The url to use for a link. This will render an anchor element.\nDo not set this prop if you want to render a button element."
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
        "text": "The target to use for a link, used in conjunction with the url attribute."
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonVariant",
        "resolved": "\"arrow-link\" | \"none\" | \"primary\" | \"secondary\"",
        "references": {
          "ButtonVariant": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The button style variant to use."
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "'primary'"
    },
    "disabled": {
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
        "text": "Whether the button is disabled. Only applies to\nimplementations not using the url prop"
      },
      "attribute": "disabled",
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
