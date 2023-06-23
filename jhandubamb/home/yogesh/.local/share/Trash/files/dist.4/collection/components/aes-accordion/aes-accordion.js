import { Component, Prop, h } from '@stencil/core';
import { IconType } from '../../utils/enums';
/**
 * The AES Accordion element for high levels of editorial control
 * @element aes-accordion
 * @slot summary - The slot to render the accordion summary or title.
 * @slot content - The primary slot to render the accordion contents.
 */
export class AesAccordion {
  constructor() {
    /**
     * Whether to display the accordion in open or close state
     */
    this.isOpen = false;
  }
  render() {
    return (h("details", { class: "accordion", open: this.isOpen },
      h("summary", { class: "summary" },
        h("slot", { name: "summary" }),
        h("aes-icon", { class: "toggle toggle-open", icon: IconType.CHEVRON_DOWN }),
        h("aes-icon", { class: "toggle toggle-close", icon: IconType.CHEVRON_UP })),
      h("div", { class: "content" },
        h("slot", { name: "content" }))));
  }
  static get is() { return "aes-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-accordion.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-accordion.css"]
  }; }
  static get properties() { return {
    "isOpen": {
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
        "text": "Whether to display the accordion in open or close state"
      },
      "attribute": "is-open",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
