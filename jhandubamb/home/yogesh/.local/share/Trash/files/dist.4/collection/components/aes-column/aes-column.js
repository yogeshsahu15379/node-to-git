import { Component, Host, h, Prop } from '@stencil/core';
/**
 * The content column component. This is intended to be a helper that works with the `<aes-grid>` component.
 *
 * @element aes-column
 * @slot defaultSlot
 */
export class AesColumn {
  constructor() {
    /**
     * The number of columns wide this column should be.
     */
    this.colSpanDefault = 12;
    /**
     * The vertical placement of content inside of the column.
     */
    this.contentAlign = 'middle';
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "aes-column"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-column.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-column.css"]
  }; }
  static get properties() { return {
    "colSpanDefault": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "colSpanRange",
        "resolved": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {
          "colSpanRange": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The number of columns wide this column should be."
      },
      "attribute": "col-span-default",
      "reflect": true,
      "defaultValue": "12"
    },
    "colSpanSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "colSpanRange",
        "resolved": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {
          "colSpanRange": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The number of columns wide this column should be on small+ screens."
      },
      "attribute": "col-span-sm",
      "reflect": true
    },
    "colSpanMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "colSpanRange",
        "resolved": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {
          "colSpanRange": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The number of columns wide this column should be on medium+ screens."
      },
      "attribute": "col-span-md",
      "reflect": true
    },
    "colSpanLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "colSpanRange",
        "resolved": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {
          "colSpanRange": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The number of columns wide this column should be on large+ screens."
      },
      "attribute": "col-span-lg",
      "reflect": true
    },
    "colSpanXl": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "colSpanRange",
        "resolved": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {
          "colSpanRange": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The number of columns wide this column should be on extra large+ screens."
      },
      "attribute": "col-span-xl",
      "reflect": true
    },
    "colSpanXxl": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "colSpanRange",
        "resolved": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {
          "colSpanRange": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The number of columns wide this column should be on extra extra large+ screens."
      },
      "attribute": "col-span-xxl",
      "reflect": true
    },
    "contentAlign": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "VerticalAlignment",
        "resolved": "\"bottom\" | \"middle\" | \"top\"",
        "references": {
          "VerticalAlignment": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The vertical placement of content inside of the column."
      },
      "attribute": "content-align",
      "reflect": true,
      "defaultValue": "'middle'"
    }
  }; }
}
