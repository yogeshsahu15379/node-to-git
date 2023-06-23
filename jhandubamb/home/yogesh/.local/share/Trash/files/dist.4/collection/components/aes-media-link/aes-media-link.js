import { Component, Host, h, Prop } from '@stencil/core';
import { IconType } from '../../utils/enums';
/**
 * The AES Media Link component
 * @element aes-media-link
 * @slot default - The slot to render as the component link text.
 */
export class AesMediaLink {
  constructor() {
    /**
     * Whether to show the document icon
     */
    this.shouldDisplayIcon = true;
    /**
     * The icon to show next to the link.
     */
    this.icon = IconType.DOCUMENT_DEFAULT;
    /**
     * The target to use for the link, used in conjunction with the url.
     * Always open in a new tab because this should always link to a document.
     */
    this.target = '_blank';
  }
  render() {
    return (h(Host, null,
      this.shouldDisplayIcon && (h("aes-icon", { class: "media-link-icon", icon: this.icon })),
      h("aes-button", { url: this.url, variant: "arrow-link", "should-display-arrow": true, target: this.target },
        h("slot", null))));
  }
  static get is() { return "aes-media-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-media-link.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-media-link.css"]
  }; }
  static get properties() { return {
    "shouldDisplayIcon": {
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
        "text": "Whether to show the document icon"
      },
      "attribute": "should-display-icon",
      "reflect": true,
      "defaultValue": "true"
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconType",
        "resolved": "IconType",
        "references": {
          "IconType": {
            "location": "import",
            "path": "../../utils/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The icon to show next to the link."
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "IconType.DOCUMENT_DEFAULT"
    },
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
        "text": "The url to use for the link. This will render an anchor element."
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
        "text": "The target to use for the link, used in conjunction with the url.\nAlways open in a new tab because this should always link to a document."
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_blank'"
    }
  }; }
}
