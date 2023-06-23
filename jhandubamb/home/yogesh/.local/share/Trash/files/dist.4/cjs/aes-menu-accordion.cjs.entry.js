'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');
const resolvedTailwindConfig = require('./resolved-tailwind-config-112e9f66.js');
const enums = require('./enums-7b1793d0.js');

const aesMenuAccordionCss = ":host{display:block}.accordion:not([open]) .toggle-close{display:none}.accordion[open] .toggle-open{display:none}ul{list-style-type:none;font-size:1rem;line-height:2;padding:0}.summary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0;font-size:1rem;--text-opacity:1;color:rgb(0, 0, 0);color:rgba(0, 0, 0, var(--text-opacity));list-style-type:none}.summary::-webkit-details-marker{display:none}:host([variant='primary']) ::slotted([slot='summary']),:host([variant='secondary']) ::slotted([slot='summary']){font-weight:700 !important;line-height:1.625 !important}@media (min-width: 768px){:host([variant='primary']) ::slotted([slot='summary']){font-weight:400 !important;font-size:1.5rem !important;line-height:2 !important}}.toggle{position:absolute;width:1.5rem;right:0;fill:currentColor}";

const AesMenuAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      const breakpoint = parseInt(resolvedTailwindConfig.tailwindThemeConfig.screens.md.replace('px', ''));
      this.isCollapsible = docWidth < breakpoint;
    }, 200);
  }
  setOpen() {
    this.isOpen = !this.isCollapsible;
  }
  render() {
    const content = (index.h("ul", { class: "menu" }, index.h("slot", { name: "menu" })));
    return this.isCollapsible && this.hasChildren ? (index.h("details", { class: "accordion", open: this.isOpen }, index.h("summary", { class: "summary" }, index.h("slot", { name: "summary" }), this.isCollapsible && (index.h(index.Fragment, null, index.h("aes-icon", { class: "toggle toggle-open", icon: enums.IconType.CHEVRON_DOWN }), index.h("aes-icon", { class: "toggle toggle-close", icon: enums.IconType.CHEVRON_UP })))), content)) : (index.h("div", { class: "accordion" }, index.h("div", { class: "summary" }, index.h("slot", { name: "summary" })), this.hasChildren && content));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isCollapsible": ["setOpen"]
  }; }
};
AesMenuAccordion.style = aesMenuAccordionCss;

exports.aes_menu_accordion = AesMenuAccordion;
