import { Component, Host, h, State } from '@stencil/core';
import { IconType } from '../../utils/enums';
/**
 * The site header component.
 * @element aes-site-header
 * @slot logo - The logo element to display in the site header.
 * @slot nav - The list items to be included in the primary navigation.
 * @slot search-form - The markup for the search form.
 * @slot user-buttons - The area in which user account and language buttons can be placed.
 */
export class AesSiteHeader {
  constructor() {
    /**
     * Whether or not the menu is open. (Med- only.)
     */
    this.menuIsOpen = false;
    /**
     * Whether or not the search is open. (Large+ only.)
     */
    this.searchIsOpen = false;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
  toggleSearch() {
    this.searchIsOpen = !this.searchIsOpen;
  }
  render() {
    return (h(Host, null,
      h("header", null,
        h("aes-container", { class: "wrapper" },
          h("slot", { name: "logo" }),
          h("div", { class: {
              open: this.menuIsOpen,
              overlay: true,
            } },
            h("aes-container", { class: "nav-wrapper" },
              h("div", { class: "nav-scrollable" },
                h("div", { class: {
                    open: this.searchIsOpen,
                    search: true,
                  } },
                  h("slot", { name: "search-form" })),
                h("nav", { role: "navigation", "aria-label": "main navigation" },
                  h("ul", null,
                    h("slot", { name: "nav" }))),
                h("aes-button", { class: "menu-close", onClick: this.toggleMenu, "aria-label": "Close Menu", variant: "none" },
                  h("aes-icon", { icon: IconType.CLOSE }))))),
          h("slot", { name: "user-buttons" }),
          h("aes-button", { class: "menu-open", onClick: this.toggleMenu, "aria-label": "Open Menu", variant: "none" },
            h("aes-icon", { class: "w-6", icon: IconType.AES_HAMBURGER })),
          h("slot", { name: "language-selector" })))));
  }
  static get is() { return "aes-site-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-site-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-site-header.css"]
  }; }
  static get states() { return {
    "menuIsOpen": {},
    "searchIsOpen": {}
  }; }
}
