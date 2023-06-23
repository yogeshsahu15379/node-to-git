import { Component, h, Host } from '@stencil/core';
/**
 * The text input form component.
 * @element aes-custome-line
 */
export class AesCustomeLine {
  render() {
    return (h(Host, null,
      h("div", { class: "tm-scroll" },
        h("span", null))));
  }
  static get is() { return "aes-custome-line"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-custome-line.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-custome-line.css"]
  }; }
}
