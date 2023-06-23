import { Component, Host, h, Prop } from '@stencil/core';
/**
 * The grid component.
 *
 * @element aes-grid
 * @slot defaultSlot
 */
export class AesGrid {
  constructor() {
    /**
     * How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)
     */
    this.gapSize = 'small';
    /**
     * Whether or not this is a nested grid. If it's nested, remove padding from the container.
     */
    this.isNested = false;
  }
  render() {
    return (h(Host, null,
      h("aes-container", { "is-nested": this.isNested },
        h("slot", null))));
  }
  static get is() { return "aes-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-grid.css"]
  }; }
  static get properties() { return {
    "gapSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
        "references": {
          "Size": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)"
      },
      "attribute": "gap-size",
      "reflect": true,
      "defaultValue": "'small'"
    },
    "gapSizeSm": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
        "references": {
          "Size": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "How much of a gap should exist between columns on small+ screens? (This affects both the vertical and horizontal column/row gaps.)"
      },
      "attribute": "gap-size-sm",
      "reflect": true
    },
    "gapSizeMd": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
        "references": {
          "Size": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "How much of a gap should exist between columns on medium+ screens? (This affects both the vertical and horizontal column/row gaps.)"
      },
      "attribute": "gap-size-md",
      "reflect": true
    },
    "gapSizeLg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
        "references": {
          "Size": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "How much of a gap should exist between columns on large+ screens? (This affects both the vertical and horizontal column/row gaps.)"
      },
      "attribute": "gap-size-lg",
      "reflect": true
    },
    "gapSizeXl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
        "references": {
          "Size": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "How much of a gap should exist between columns on extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)"
      },
      "attribute": "gap-size-xl",
      "reflect": true
    },
    "gapSizeXxl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
        "references": {
          "Size": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "How much of a gap should exist between columns on extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)"
      },
      "attribute": "gap-size-xxl",
      "reflect": true
    },
    "isNested": {
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
        "text": "Whether or not this is a nested grid. If it's nested, remove padding from the container."
      },
      "attribute": "is-nested",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
