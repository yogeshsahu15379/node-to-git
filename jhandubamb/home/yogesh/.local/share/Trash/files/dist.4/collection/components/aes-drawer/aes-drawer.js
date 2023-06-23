import { Component, h, Host, Listen, State } from '@stencil/core';
import { IconType } from '../../utils/enums';
/**
 * Trigger the opening a closing of a side-drawer. Handles both the trigger
 * element and the content of the drawer
 *
 * @element aes-drawer
 * @slot trigger - Anything placed in here becomes a button that opens drawer content
 * @slot content - The markup to show in the fly-out drawer. Can be anything.
 */
export class AesDrawer {
  constructor() {
    this.open = false;
    this.toggleOpen = () => (this.open ? this.hide() : this.show());
  }
  show() {
    // Close all other drawers that may be open
    document
      .querySelectorAll('aes-drawer')
      .forEach(drawer => drawer.dispatchEvent(new Event('aes-drawer:hide')));
    // Now just open this drawer
    this.open = true;
  }
  hide() {
    this.open = false;
  }
  keyListener(ev) {
    if (ev.key === 'Escape') {
      this.hide();
    }
  }
  render() {
    return (h(Host, { "aria-expanded": this.open ? 'true' : 'false' },
      h("button", { class: "trigger", role: "button", onClick: this.toggleOpen, "aria-haspopup": "true", tabindex: "0" },
        h("slot", { name: "trigger" },
          h("span", { class: "hidden" }, "trigger"))),
      h("aside", { role: "complementary", class: { drawer: true, show: this.open } },
        h("div", { class: "drawer__top" },
          h("button", { class: "drawer__close", onClick: this.toggleOpen, "aria-label": "Close" },
            h("aes-icon", { class: "drawer__close-icon", icon: IconType.CLOSE }))),
        h("div", { class: "drawer__content" },
          h("slot", { name: "content" })))));
  }
  static get is() { return "aes-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-drawer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-drawer.css"]
  }; }
  static get states() { return {
    "open": {}
  }; }
  static get listeners() { return [{
      "name": "aes-drawer:show",
      "method": "show",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "aes-drawer:hide",
      "method": "hide",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "keyListener",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
