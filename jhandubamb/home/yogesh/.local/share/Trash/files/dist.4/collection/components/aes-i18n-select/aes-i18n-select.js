import { Component, h, Host, Prop, State } from '@stencil/core';
import { IconType } from '../../utils/enums';
/**
 * The language select button.
 * @element aes-i18n-select
 */
export class AesI18nSelect {
  constructor() {
    /**
     * Whether or not the select box is disabled.
     */
    this.disabled = false;
    this.optionList = JSON.parse(this.options);
    this.redirectUser = this.redirectUser.bind(this);
  }
  redirectUser(event) {
    console.log('@@@@@@@@@@@@@', event);
    window.location.href = event.target.value;
  }
  render() {
    return (h(Host, null,
      h("label", { class: "hidden" }, "option"),
      h("select", { name: "option", onChange: this.redirectUser, disabled: this.disabled }, this.optionList.map(v => (h("option", { value: v.url, selected: v.url === this.value }, v.value)))),
      h("aes-icon", { icon: IconType.I18N_WHITE, class: "white" }),
      h("aes-icon", { icon: IconType.I18N_GRAY, class: "gray" })));
  }
  static get is() { return "aes-i18n-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-i18n-select.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-i18n-select.css"]
  }; }
  static get properties() { return {
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
        "text": "Whether or not the select box is disabled."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
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
        "text": "The url that the user is on."
      },
      "attribute": "value",
      "reflect": false
    },
    "options": {
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
        "text": "The list of options that should be shown."
      },
      "attribute": "options",
      "reflect": false
    }
  }; }
  static get states() { return {
    "optionList": {}
  }; }
}
