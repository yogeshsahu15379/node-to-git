import { Component, Prop, State, Watch, Host, h } from '@stencil/core';
/**
 * The AES CTA component s
 * @element aes-cta
 * @slot header - The header slot expects a heading element to render on the left side of the CTA.
 * @slot multimedia - The multimedia slot expects an image element to render on the right side of the CTA. The consuming component is responsible for the responsiveness of the image.
 */
export class AESCta {
  constructor() {
    /**
     * Append a right arrow to the link text
     */
    this.displayLinkArrow = true;
  }
  componentWillLoad() {
    this.parseLinkData(this.link);
  }
  parseLinkData(newValue) {
    if (typeof newValue === 'string') {
      this.linkData = JSON.parse(newValue);
      return;
    }
    this.linkData = newValue;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "heading-image-container" },
        h("slot", { name: "header" }),
        h("slot", { name: "multimedia" })),
      h("aes-line", null),
      this.linkData && (h("aes-link", { href: this.linkData.url, target: this.linkData.target }, `${this.linkData.text}${this.displayLinkArrow ? ' \u2192' : ''}`))));
  }
  static get is() { return "aes-cta"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-cta.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-cta.css"]
  }; }
  static get properties() { return {
    "link": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CTALink",
        "resolved": "LinkType | string",
        "references": {
          "CTALink": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The link url and text"
      },
      "attribute": "link",
      "reflect": false
    },
    "displayLinkArrow": {
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
        "text": "Append a right arrow to the link text"
      },
      "attribute": "display-link-arrow",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "linkData": {}
  }; }
  static get watchers() { return [{
      "propName": "link",
      "methodName": "parseLinkData"
    }]; }
}
