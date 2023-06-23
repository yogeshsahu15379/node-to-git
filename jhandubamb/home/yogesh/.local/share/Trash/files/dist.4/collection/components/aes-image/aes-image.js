import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';
import { jarallax } from 'jarallax';
/**
 * The image component, with support for parallax scrolling.
 * @element aes-image
 *
 * @slot multimedia - The image to be presented.
 * @slot caption - The caption text for the image.
 */
export class AesImage {
  toggleParallax() {
    if (this.parallax) {
      // Start Jarallax.js
      jarallax(this.parallaxContainer, {
        speed: '0.5',
        imgElement: this.el.querySelector('img'),
      });
    }
    else {
      jarallax(this.parallaxContainer, 'destroy');
    }
  }
  componentDidLoad() {
    this.toggleParallax();
  }
  render() {
    return (h(Host, null,
      h("figure", { ref: el => (this.parallaxContainer = el) },
        h("slot", { name: "multimedia" })),
      h("figcaption", null,
        h("slot", { name: "caption" }))));
  }
  static get is() { return "aes-image"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-image.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-image.css"]
  }; }
  static get properties() { return {
    "parallax": {
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
        "text": "Should this image be a parallax instance?"
      },
      "attribute": "parallax",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "parallax",
      "methodName": "toggleParallax"
    }]; }
}
