import { r as registerInstance, h, H as Host } from './index-abd53505.js';
import { t as tailwindThemeConfig } from './resolved-tailwind-config-21fbcf50.js';
import { I as IconType } from './enums-3680f0a7.js';

const aesMenuDropdownCss = ":host{display:block;position:relative}.content-buffer{display:none}@media (min-width: 1024px){.content-buffer{position:absolute;padding-top:0.75rem;display:none;--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));--transform-translate-x:-4.5rem;top:100%}}.content{margin-top:1rem;padding-left:1rem}@media (min-width: 1024px){.content{padding:1.5rem;padding-bottom:2rem;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));min-width:200px;-webkit-box-shadow:0px 4px 24px rgba(0, 0, 0, 0.06);box-shadow:0px 4px 24px rgba(0, 0, 0, 0.06)}}.trigger{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.mobile-caret{width:0.5rem}@media (min-width: 1024px){.mobile-caret{display:none}}.caret-open{width:0.75rem}.show{display:block}";

const AesMenuDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: "trigger" }, h("slot", { name: "menu-item-trigger" }), h("aes-icon", { class: { 'mobile-caret': true, 'caret-open': this.open }, icon: this.open ? IconType.CHEVRON_DOWN : IconType.CHEVRON_RIGHT })), h("div", { class: {
        'content-buffer': true,
        'show': this.open,
      } }, h("div", { class: "content" }, h("slot", { name: "menu-item-content" })))));
  }
};
AesMenuDropdown.style = aesMenuDropdownCss;

export { AesMenuDropdown as aes_menu_dropdown };
