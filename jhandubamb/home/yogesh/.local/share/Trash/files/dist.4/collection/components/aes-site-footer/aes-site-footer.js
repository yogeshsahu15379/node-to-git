import { Component, Host, h } from '@stencil/core';
/**
 * The site footer component.
 * @element aes-site-footer
 * @slot logo - The logo element to display in the site footer.
 * @slot menus - The slot that is expecting menus.
 * @slot social-links - The list of social links.
 * @slot lang-select - The language selection button.
 * @slot copyright - The area to display copyright information.
 */
export class AesSiteFooter {
  render() {
    return (h(Host, null,
      h("aes-container", { role: "footertop", class: "footer-top" },
        h("slot", { name: "footer-top" })),
      h("nav", null,
        h("aes-grid", { "gap-size": "none", "gap-size-md": "small" },
          h("slot", { name: "menus" }))),
      h("aes-container", null,
        h("div", { class: "interactions" },
          h("slot", { name: "social-links" }),
          h("slot", { name: "lang-select" })),
        h("slot", { name: "copyright" }))));
  }
  static get is() { return "aes-site-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-site-footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-site-footer.css"]
  }; }
}
