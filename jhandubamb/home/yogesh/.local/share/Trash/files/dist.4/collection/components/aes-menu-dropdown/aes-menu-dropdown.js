import { Component, Host, State, Listen, h } from '@stencil/core';
import tailwindThemeConfig from '../../resolved-tailwind-config';
import { IconType } from '../../utils/enums';
export class AesMenuDropdown {
  constructor() {
    this.open = false;
    this.isDevice = true;
    this.resizeTimer = null;
  }
  componentDidLoad() {
    this.onWindow();
  }
  onWindowResize() {
    this.onWindow();
  }
  onWindow() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      const docWidth = document.documentElement.clientWidth;
      const breakpoint = parseInt(tailwindThemeConfig.screens.lg.replace('px', ''));
      this.isDevice = docWidth < breakpoint;
      this.open = false;
    }, 200);
  }
  // Enable menu showing on hover for desktop only.
  show() {
    if (!this.isDevice) {
      this.open = true;
    }
  }
  // Enable menu hiding on blur for desktop only.
  hide() {
    if (!this.isDevice) {
      this.open = false;
    }
  }
  // Enable menu showing/hiding on click for mobile only.
  click() {
    if (this.isDevice) {
      this.open = !this.open;
    }
  }
  render() {
    return (h(Host, null,
      h("div", { class: "trigger" },
        h("slot", { name: "menu-item-trigger" }),
        h("aes-icon", { class: { 'mobile-caret': true, 'caret-open': this.open }, icon: this.open ? IconType.CHEVRON_DOWN : IconType.CHEVRON_RIGHT })),
      h("div", { class: {
          'content-buffer': true,
          'show': this.open,
        } },
        h("div", { class: "content" },
          h("slot", { name: "menu-item-content" })))));
  }
  static get is() { return "aes-menu-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-menu-dropdown.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-menu-dropdown.css"]
  }; }
  static get states() { return {
    "open": {},
    "isDevice": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "mouseenter",
      "method": "show",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "hide",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "click",
      "method": "click",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
