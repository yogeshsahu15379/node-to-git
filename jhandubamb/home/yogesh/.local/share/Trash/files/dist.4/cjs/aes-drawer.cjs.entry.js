'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');
const enums = require('./enums-7b1793d0.js');

const aesDrawerCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";line-height:1.5;}*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor;}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#a0aec0}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}button,[role=\"button\"]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}:host{display:block}.trigger{all:unset;cursor:pointer}.hidden{display:none}.drawer{opacity:0;position:fixed;width:100%;right:0;top:0;height:100%;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));overflow-y:scroll;--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));--transform-translate-x:100%;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:300ms;transition-duration:300ms;z-index:50;-webkit-box-shadow:-4px 0px 48px 2px rgba(0, 0, 0, 0.06);box-shadow:-4px 0px 48px 2px rgba(0, 0, 0, 0.06)}@media (min-width: 768px){.drawer{width:400px}}.drawer__top{display:-ms-flexbox;display:flex;width:100%;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));height:5rem;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;-webkit-box-shadow:-4px 0px 24px 2px rgba(0, 0, 0, 0.06);box-shadow:-4px 0px 24px 2px rgba(0, 0, 0, 0.06)}.drawer__close{all:unset;padding:0.5rem}.drawer__close-icon{width:1rem;height:1rem;cursor:pointer}.drawer__content{padding:1rem}.show{opacity:1;--transform-translate-x:0}";

const AesDrawer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { "aria-expanded": this.open ? 'true' : 'false' }, index.h("button", { class: "trigger", role: "button", onClick: this.toggleOpen, "aria-haspopup": "true", tabindex: "0" }, index.h("slot", { name: "trigger" }, index.h("span", { class: "hidden" }, "trigger"))), index.h("aside", { role: "complementary", class: { drawer: true, show: this.open } }, index.h("div", { class: "drawer__top" }, index.h("button", { class: "drawer__close", onClick: this.toggleOpen, "aria-label": "Close" }, index.h("aes-icon", { class: "drawer__close-icon", icon: enums.IconType.CLOSE }))), index.h("div", { class: "drawer__content" }, index.h("slot", { name: "content" })))));
  }
};
AesDrawer.style = aesDrawerCss;

exports.aes_drawer = AesDrawer;
