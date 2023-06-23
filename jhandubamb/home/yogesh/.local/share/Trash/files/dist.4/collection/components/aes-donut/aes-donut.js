import { Component, Prop, Host, h } from '@stencil/core';
import tailwindThemeConfig from '../../resolved-tailwind-config';
/**
 * The "donut" radial percentage graph element
 *
 * @element aes-donut
 */
export class AesDonut {
  constructor() {
    /**
     * Thickness of stroke
     */
    this.strokeWidth = 5;
    /**
     * Percent of circumference color line fills
     */
    this.percent = 65;
    /**
     * Only accepts the 4 signature colors
     */
    this.color = 'signature-purple1';
    /**
     * We want circumference to always be 100
     */
    this.circumference = 100;
    /**
     * Therefore circle
     */
    this.radius = this.circumference / (Math.PI * 2);
    /**
     * But viewbox and x/y must adjust for stroke width (stroke grows out)
     */
    this.center = this.radius + this.strokeWidth;
    /**
     * Sets our viewport size
     */
    this.bounds = this.center * 2;
    /**
     * Dashed strokes start at 3 o'clock, we need to rotate them back to 12 o'clock
     */
    this.dashOffset = 25;
    /**
     * Thin line between sections
     */
    this.border = 0.5;
    /**
     * Generates the stroke-dasharray string, ie '75 25', takes into account border
     * @param val
     */
    this.dashArrayString = val => `${val - this.border} ${100 - val + this.border}`;
    /**
     * stroke-dashoffset lets us start/stop the dash at different places on circle
     * @param previous
     */
    this.dashOffsetString = previous => this.dashOffset + (previous ? 100 - previous : 0);
  }
  render() {
    return (h(Host, null,
      h("svg", { viewBox: `0 0 ${this.bounds} ${this.bounds}` },
        [this.percent, 100 - this.percent].map((val, i, dashes) => (h("circle", { fill: "transparent", cx: this.center, cy: this.center, r: this.radius, stroke: i !== 0 && val !== 0
            ? tailwindThemeConfig.colors.neutrals.gray2
            : null, "stroke-width": this.strokeWidth, "stroke-dasharray": this.dashArrayString(val), "stroke-dashoffset": this.dashOffsetString(dashes[i - 1]) }))),
        h("text", { x: "50%", y: "50%", "alignment-baseline": "middle", "text-anchor": "middle", "stroke-width": "0", "font-size": "8", class: `this.color` },
          this.percent,
          "%"))));
  }
  static get is() { return "aes-donut"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-donut.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-donut.css"]
  }; }
  static get properties() { return {
    "strokeWidth": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Thickness of stroke"
      },
      "attribute": "stroke-width",
      "reflect": false,
      "defaultValue": "5"
    },
    "percent": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Percent of circumference color line fills"
      },
      "attribute": "percent",
      "reflect": false,
      "defaultValue": "65"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SignaturePrimaryColor",
        "resolved": "\"signature-aqua1\" | \"signature-blue1\" | \"signature-green1\" | \"signature-purple1\"",
        "references": {
          "SignaturePrimaryColor": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Only accepts the 4 signature colors"
      },
      "attribute": "color",
      "reflect": true,
      "defaultValue": "'signature-purple1'"
    }
  }; }
}
