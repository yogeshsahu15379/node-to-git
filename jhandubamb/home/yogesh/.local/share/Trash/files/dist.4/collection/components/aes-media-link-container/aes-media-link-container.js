import { Component, Host, Prop, h } from '@stencil/core';
/**
 * The AES Media Link Container component
 * @element aes-media-link-container
 * @slot media-links - The media link slot. Contains a links to resource documents.
 * @slot title - The title slot; the text displayed in the left column of container.
 */
export class AesMediaLinkContainer {
  constructor() {
    /**
     * Which brand color should be used as the background of this container?
     */
    this.bgColor = 'neutrals-gray1';
  }
  render() {
    return (h(Host, null,
      h("aes-bg", { color: this.bgColor },
        h("aes-grid", { gapSize: "small" },
          h("aes-column", { class: "title", "content-align": "top", "col-span-default": "12", "col-span-md": "5" },
            h("slot", { name: "title" })),
          h("aes-column", { class: "links", "content-align": "middle", "col-span-default": "12", "col-span-md": "5" },
            h("slot", { name: "media-links" }))))));
  }
  static get is() { return "aes-media-link-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-media-link-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-media-link-container.css"]
  }; }
  static get properties() { return {
    "bgColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "NeutralColor",
        "resolved": "\"neutrals-black\" | \"neutrals-gray1\" | \"neutrals-gray2\" | \"neutrals-gray3\" | \"neutrals-gray4\" | \"neutrals-gray5\" | \"neutrals-white\" | \"transparent\"",
        "references": {
          "NeutralColor": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which brand color should be used as the background of this container?"
      },
      "attribute": "bg-color",
      "reflect": false,
      "defaultValue": "'neutrals-gray1'"
    }
  }; }
}
