import { r as registerInstance, h, F as Fragment, g as getElement } from './index-abd53505.js';
import { t as tailwindThemeConfig } from './resolved-tailwind-config-21fbcf50.js';
import { I as IconType } from './enums-3680f0a7.js';

const aesMenuAccordionCss = ":host{display:block}.accordion:not([open]) .toggle-close{display:none}.accordion[open] .toggle-open{display:none}ul{list-style-type:none;font-size:1rem;line-height:2;padding:0}.summary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0;font-size:1rem;--text-opacity:1;color:rgb(0, 0, 0);color:rgba(0, 0, 0, var(--text-opacity));list-style-type:none}.summary::-webkit-details-marker{display:none}:host([variant='primary']) ::slotted([slot='summary']),:host([variant='secondary']) ::slotted([slot='summary']){font-weight:700 !important;line-height:1.625 !important}@media (min-width: 768px){:host([variant='primary']) ::slotted([slot='summary']){font-weight:400 !important;font-size:1.5rem !important;line-height:2 !important}}.toggle{position:absolute;width:1.5rem;right:0;fill:currentColor}";

const AesMenuAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const content = (h("ul", { class: "menu" }, h("slot", { name: "menu" })));
    return this.isCollapsible && this.hasChildren ? (h("details", { class: "accordion", open: this.isOpen }, h("summary", { class: "summary" }, h("slot", { name: "summary" }), this.isCollapsible && (h(Fragment, null, h("aes-icon", { class: "toggle toggle-open", icon: IconType.CHEVRON_DOWN }), h("aes-icon", { class: "toggle toggle-close", icon: IconType.CHEVRON_UP })))), content)) : (h("div", { class: "accordion" }, h("div", { class: "summary" }, h("slot", { name: "summary" })), this.hasChildren && content));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isCollapsible": ["setOpen"]
  }; }
};
AesMenuAccordion.style = aesMenuAccordionCss;

export { AesMenuAccordion as aes_menu_accordion };
