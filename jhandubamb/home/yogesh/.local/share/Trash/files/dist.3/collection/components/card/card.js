import { h } from "@stencil/core";
// import 'card.css';
export class card {
  constructor() {
    this.heading = '';
    this.subHeading = '';
    this.colorClass = undefined;
  }
  render() {
    return (h("div", { class: `card ${this.colorClass}` }, h("div", { class: "card_left" }, h("h1", null, this.heading), h("p", null, this.subHeading, " "), h("button", null, "Get started")), h("div", { class: "card_right" }, h("img", { class: "card_img", src: "https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg", alt: "image" }))));
  }
  static get is() { return "main-card"; }
  static get originalStyleUrls() {
    return {
      "$": ["card.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card.css"]
    };
  }
  static get properties() {
    return {
      "heading": {
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
          "text": ""
        },
        "attribute": "heading",
        "reflect": false,
        "defaultValue": "''"
      },
      "subHeading": {
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
          "text": ""
        },
        "attribute": "sub-heading",
        "reflect": false,
        "defaultValue": "''"
      },
      "colorClass": {
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
          "text": ""
        },
        "attribute": "color-class",
        "reflect": false
      }
    };
  }
}
