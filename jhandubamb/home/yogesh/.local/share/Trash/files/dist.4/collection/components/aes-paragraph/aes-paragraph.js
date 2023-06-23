import { Component, Host, h } from '@stencil/core';
/**
 * A simple paragraph.
 *
 * @element aes-paragraph
 * @slot default - Any text to wrap in a <p/> tag. Only really used within
 *   Storybook for right now.
 */
export class AesParagraph {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "aes-paragraph"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-paragraph.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-paragraph.css"]
  }; }
}
