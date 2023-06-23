import { Component, Prop, Host, h } from '@stencil/core';
export class AesProgress {
  render() {
    return (h(Host, null,
      h("div", { class: "value", style: { width: `${(this.value / this.max) * 100}%` } })));
  }
  static get is() { return "aes-progress"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-progress.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-progress.css"]
  }; }
  static get properties() { return {
    "max": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value of \"100%\""
      },
      "attribute": "max",
      "reflect": false
    },
    "value": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The actual progress of the bar"
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
}
