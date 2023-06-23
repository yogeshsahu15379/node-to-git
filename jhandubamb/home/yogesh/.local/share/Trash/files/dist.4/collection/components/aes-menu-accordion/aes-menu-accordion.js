import { Component, Prop, h, Listen, State, Watch, Fragment, Element, } from '@stencil/core';
import tailwindThemeConfig from '../../resolved-tailwind-config';
import { IconType } from '../../utils/enums';
/**
 * The AES Accordion element for high levels of editorial control
 * @element aes-menu-accordion
 * @slot summary - The slot to render the accordion summary or title.
 * @slot content - The primary slot to render the accordion contents.
 */
export class AesMenuAccordion {
  constructor() {
    /**
     * Whether to display the accordion in open or close state
     */
    this.isOpen = false;
    /**
     * The variant of the accordion.
     */
    this.variant = 'primary';
    this.isCollapsible = true;
    this.hasChildren = true;
    this.resizeTimer = null;
  }
  componentDidLoad() {
    this.onWindow();
    if (this.variant === 'primary') {
      this.isOpen = true;
    }
    if (!this.el.querySelector(`[slot='menu']`)) {
      this.hasChildren = false;
      console.log(this.hasChildren);
    }
  }
  onWindowResize() {
    if (this.hasChildren) {
      this.onWindow();
    }
  }
  onWindow() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      const docWidth = document.documentElement.clientWidth;
      const breakpoint = parseInt(tailwindThemeConfig.screens.md.replace('px', ''));
      this.isCollapsible = docWidth < breakpoint;
    }, 200);
  }
  setOpen() {
    this.isOpen = !this.isCollapsible;
  }
  render() {
    const content = (h("ul", { class: "menu" },
      h("slot", { name: "menu" })));
    return this.isCollapsible && this.hasChildren ? (h("details", { class: "accordion", open: this.isOpen },
      h("summary", { class: "summary" },
        h("slot", { name: "summary" }),
        this.isCollapsible && (h(Fragment, null,
          h("aes-icon", { class: "toggle toggle-open", icon: IconType.CHEVRON_DOWN }),
          h("aes-icon", { class: "toggle toggle-close", icon: IconType.CHEVRON_UP })))),
      content)) : (h("div", { class: "accordion" },
      h("div", { class: "summary" },
        h("slot", { name: "summary" })),
      this.hasChildren && content));
  }
  static get is() { return "aes-menu-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-menu-accordion.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-menu-accordion.css"]
  }; }
  static get properties() { return {
    "isOpen": {
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
        "text": "Whether to display the accordion in open or close state"
      },
      "attribute": "is-open",
      "reflect": false,
      "defaultValue": "false"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "AccordionType",
        "resolved": "\"primary\" | \"secondary\"",
        "references": {
          "AccordionType": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The variant of the accordion."
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "'primary'"
    }
  }; }
  static get states() { return {
    "isCollapsible": {},
    "hasChildren": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "isCollapsible",
      "methodName": "setOpen"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
