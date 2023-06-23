import { Component, Host, h, Prop } from '@stencil/core';
/**
 * The text input form component.
 * @element aes-text-input
 */
export class AesTextInput {
  constructor() {
    /**
     * The type of text field.
     */
    this.fieldType = 'text';
  }
  render() {
    return (h(Host, null,
      h("label", { htmlFor: this.fieldName, class: { hide: this.hideLabel } }, this.labelText),
      h("input", Object.assign({ type: this.fieldType, name: this.fieldName, disabled: this.disabled, required: this.required, placeholder: this.hideLabel ? this.labelText : '' }, this.inputOptions))));
  }
  static get is() { return "aes-text-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-text-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-text-input.css"]
  }; }
  static get properties() { return {
    "required": {
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
        "text": "Whether or not this is a required field."
      },
      "attribute": "required",
      "reflect": true
    },
    "disabled": {
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
        "text": "Whether or not this is a disabled field."
      },
      "attribute": "disabled",
      "reflect": true
    },
    "hideLabel": {
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
        "text": "Whether or not the label should be hidden."
      },
      "attribute": "hide-label",
      "reflect": true
    },
    "labelText": {
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
        "text": "The text for the label."
      },
      "attribute": "label-text",
      "reflect": false
    },
    "fieldType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextInput",
        "resolved": "\"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\"",
        "references": {
          "TextInput": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of text field."
      },
      "attribute": "field-type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "fieldName": {
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
        "text": "The name of the field."
      },
      "attribute": "field-name",
      "reflect": false
    },
    "inputOptions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "InputOptions",
        "resolved": "{ [name: string]: string; }",
        "references": {
          "InputOptions": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Object of options for the input field. (Ex. { minlength: 5, maxlength: 10 })"
      }
    }
  }; }
}
