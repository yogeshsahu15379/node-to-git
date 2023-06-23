import { r as registerInstance, h, H as Host } from './index-abd53505.js';
import { I as IconType } from './enums-3680f0a7.js';

const aesI18nSelectCss = ":host{display:block;position:relative}aes-icon{width:1.25rem;height:1.25rem;position:absolute;left:0;--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));--transform-translate-y:-50%;--transform-translate-x:1.5rem;top:50%}select{all:unset;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:4rem;padding-right:4rem;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border-style:none;--bg-opacity:1;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, var(--bg-opacity));border-radius:9999px;font-size:1rem;--text-opacity:1;color:rgb(255, 255, 255);color:rgba(255, 255, 255, var(--text-opacity));line-height:1.25;outline:2px solid transparent;outline-offset:2px;background-image:url(\"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 14'%3E%3Cpath d='M2 2l10 10L22 2' stroke='white' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3C/svg%3E%0A\");background-repeat:no-repeat, repeat;background-position:right 2rem top 50%, 0 0;background-size:0.75rem auto, 100%}select+aes-icon.white{display:block}select+aes-icon.gray{display:none}.hidden{display:none}select:hover{--bg-opacity:1;background-color:rgb(33, 74, 222);background-color:rgba(33, 74, 222, var(--bg-opacity))}select:disabled{background-image:url(\"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 14'%3E%3Cpath d='M2 2l10 10L22 2' stroke='rgb(191, 191, 191)' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3C/svg%3E%0A\");--bg-opacity:1;background-color:rgb(229, 229, 229);background-color:rgba(229, 229, 229, var(--bg-opacity));--text-opacity:1;color:rgb(191, 191, 191);color:rgba(191, 191, 191, var(--text-opacity))}select:disabled+aes-icon.white{display:none}select:disabled+aes-icon.gray{display:block}";

const AesI18nSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Whether or not the select box is disabled.
     */
    this.disabled = false;
    this.optionList = JSON.parse(this.options);
    this.redirectUser = this.redirectUser.bind(this);
  }
  redirectUser(event) {
    console.log('@@@@@@@@@@@@@', event);
    window.location.href = event.target.value;
  }
  render() {
    return (h(Host, null, h("label", { class: "hidden" }, "option"), h("select", { name: "option", onChange: this.redirectUser, disabled: this.disabled }, this.optionList.map(v => (h("option", { value: v.url, selected: v.url === this.value }, v.value)))), h("aes-icon", { icon: IconType.I18N_WHITE, class: "white" }), h("aes-icon", { icon: IconType.I18N_GRAY, class: "gray" })));
  }
};
AesI18nSelect.style = aesI18nSelectCss;

export { AesI18nSelect as aes_i18n_select };
