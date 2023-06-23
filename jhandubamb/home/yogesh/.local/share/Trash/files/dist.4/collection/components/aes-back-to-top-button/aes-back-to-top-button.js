import { Component, Host, h, Listen } from '@stencil/core';
import { IconType } from '../../utils/enums';
/**
 * The button that brings the user back to the top of the page when they click it.
 * @element aes-back-to-top-button
 * @slot defaultSlot
 */
export class AesBackToTopButton {
  private(e) {
    e.preventDefault();
    scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (h(Host, null,
      h("aes-icon", { icon: IconType.ARROW_UP }),
      h("slot", null)));
  }
  static get is() { return "aes-back-to-top-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-back-to-top-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-back-to-top-button.css"]
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "private",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
