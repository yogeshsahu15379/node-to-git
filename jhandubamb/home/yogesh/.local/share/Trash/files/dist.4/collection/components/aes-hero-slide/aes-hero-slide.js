import { Component, Host, Prop, h, State, Watch } from '@stencil/core';
/**
 * A slide object in the hero slider.
 * @element aes-hero-slide
 */
export class AesHeroSlide {
  componentWillLoad() {
    this.parseCtaData(this.cta);
  }
  parseCtaData(newValue) {
    if (typeof newValue === 'string') {
      this.ctaData = JSON.parse(newValue);
      return;
    }
    this.ctaData = newValue;
  }
  render() {
    var _a;
    return (h(Host, null,
      h("aes-heading", { class: "eyebrow", sub: true, level: 3 }, this.eyebrow),
      h("aes-heading", { class: "title", level: 2, levelStyle: 3 }, this.headline),
      ((_a = this === null || this === void 0 ? void 0 : this.ctaData) === null || _a === void 0 ? void 0 : _a.url) && (h("aes-button", { url: this.ctaData.url, variant: "primary", shouldDisplayArrow: true }, this.ctaData.text))));
  }
  static get is() { return "aes-hero-slide"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-hero-slide.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-hero-slide.css"]
  }; }
  static get properties() { return {
    "eyebrow": {
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
        "text": "Text that appears above the headline"
      },
      "attribute": "eyebrow",
      "reflect": false
    },
    "headline": {
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
        "text": "The main headline"
      },
      "attribute": "headline",
      "reflect": false
    },
    "cta": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CTAProps | string",
        "resolved": "string | { text: string; url: string; }",
        "references": {
          "CTAProps": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Link and text for button"
      },
      "attribute": "cta",
      "reflect": false
    }
  }; }
  static get states() { return {
    "ctaData": {}
  }; }
  static get watchers() { return [{
      "propName": "cta",
      "methodName": "parseCtaData"
    }]; }
}
