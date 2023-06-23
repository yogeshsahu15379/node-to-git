import { Component, Host, Prop, h } from '@stencil/core';
/**
 * The Hero component
 * @element aes-hero
 * @slot multimedia - The multimedia slot; expects either an `<img>` tag or a responsive `<picture>` element.
 * @slot title - The title slot; the text that should be shown in the header.
 */
export class AESHero {
  constructor() {
    /**
     * Should the dark overlay sit over top of the bg image
     */
    this.overlay = true;
  }
  render() {
    return (h(Host, null,
      h("slot", { name: "multimedia" }),
      h("aes-grid", { class: { overlay: this.overlay } },
        h("aes-column", { "content-align": "middle", "col-span-default": "10" },
          h("slot", { name: "title" })))));
  }
  static get is() { return "aes-hero"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-hero.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-hero.css"]
  }; }
  static get properties() { return {
    "overlay": {
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
        "text": "Should the dark overlay sit over top of the bg image"
      },
      "attribute": "overlay",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
}
