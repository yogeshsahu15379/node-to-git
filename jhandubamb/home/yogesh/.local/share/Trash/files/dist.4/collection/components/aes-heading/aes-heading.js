import { Component, Prop, h } from '@stencil/core';
/**
 * The Heading component.
 * @element aes-heading
 * @slot defaultSlot
 */
export class AESHeading {
  constructor() {
    /**
     * The heading tag to apply: 1 | 2 | 3 | 4
     */
    this.level = 2;
    /**
     * The heading level style to apply. Optional override to default styles for a given level
     */
    this.levelStyle = this.level;
    /**
     * The smaller, decorative subheading style
     */
    this.sub = false;
  }
  render() {
    // classNames object for dynamic classes
    const headingClasses = {
      heading: !this.sub,
      [`heading-${this.levelStyle}`]: !this.sub,
      // Warning: there is no style for subheadline-4!
      subheadline: this.sub,
      [`subheadline-${this.levelStyle}`]: this.sub,
    };
    switch (this.level) {
      case 1:
        return (h("h1", { class: headingClasses },
          h("slot", null)));
      case 2:
        return (h("h2", { class: headingClasses },
          h("slot", null)));
      case 3:
        return (h("h3", { class: headingClasses },
          h("slot", null)));
      case 4:
        return (h("h4", { class: headingClasses },
          h("slot", null)));
    }
  }
  static get is() { return "aes-heading"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-heading.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-heading.css"]
  }; }
  static get properties() { return {
    "level": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "AllowedHeadingLevels",
        "resolved": "1 | 2 | 3 | 4",
        "references": {
          "AllowedHeadingLevels": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The heading tag to apply: 1 | 2 | 3 | 4"
      },
      "attribute": "level",
      "reflect": false,
      "defaultValue": "2"
    },
    "levelStyle": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "AllowedHeadingLevels",
        "resolved": "1 | 2 | 3 | 4",
        "references": {
          "AllowedHeadingLevels": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The heading level style to apply. Optional override to default styles for a given level"
      },
      "attribute": "level-style",
      "reflect": false,
      "defaultValue": "this.level"
    },
    "sub": {
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
        "text": "The smaller, decorative subheading style"
      },
      "attribute": "sub",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
