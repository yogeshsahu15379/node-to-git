import { Component, h, Prop } from '@stencil/core';
/**
 * The logo component.
 * @element aes-logo
 */
export class AESLogo {
  render() {
    return h("img", { src: this.logo, alt: 'this.logo' });
  }
  static get is() { return "aes-logo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-logo.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-logo.css"]
  }; }
  static get properties() { return {
    "logo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LogoType",
        "resolved": "LogoType",
        "references": {
          "LogoType": {
            "location": "import",
            "path": "../../utils/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The logo type to display from ./assets."
      },
      "attribute": "logo",
      "reflect": false
    },
    "market": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Markets",
        "resolved": "Markets.GLOBAL | Markets.INDIANA | Markets.OHIO",
        "references": {
          "Markets": {
            "location": "import",
            "path": "../../utils/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The market associated with the logo."
      },
      "attribute": "market",
      "reflect": false
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LogoVariants",
        "resolved": "LogoVariants.LOGO_BLACK | LogoVariants.LOGO_MONO | LogoVariants.LOGO_RGB | LogoVariants.LOGO_WHITE",
        "references": {
          "LogoVariants": {
            "location": "import",
            "path": "../../utils/enums"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The style of the logo to use."
      },
      "attribute": "variant",
      "reflect": false
    }
  }; }
}
