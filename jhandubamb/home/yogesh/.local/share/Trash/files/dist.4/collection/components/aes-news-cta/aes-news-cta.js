import { Component, Host, Prop, h } from '@stencil/core';
/**
 * The AES News CTA component
 * @element aes-news-cta
 * @slot contentTop - The contentTop slot expects content to render above the horizontal rul
 * @slot contentBottom - The contentBottom slot expects content to render above the horizontal rul
 */
export class AesNewsCta {
  constructor() {
    /**
     * The type of news release. 'press' or 'external'
     */
    this.newsType = 'press';
  }
  render() {
    return (h(Host, null,
      h("aes-card", null,
        h("slot", { name: "multimedia", slot: "multimedia" }),
        h("div", { slot: "content" },
          h("slot", { name: "contentTop" }),
          h("hr", null),
          h("slot", { name: "contentBottom" })))));
  }
  static get is() { return "aes-news-cta"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-news-cta.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-news-cta.css"]
  }; }
  static get properties() { return {
    "newsType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'press' | 'external'",
        "resolved": "\"external\" | \"press\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of news release. 'press' or 'external'"
      },
      "attribute": "news-type",
      "reflect": false,
      "defaultValue": "'press'"
    }
  }; }
}
