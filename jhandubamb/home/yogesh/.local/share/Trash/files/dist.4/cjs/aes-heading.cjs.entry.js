'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesHeadingCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";line-height:1.5;}*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor;}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#a0aec0}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}button,[role=\"button\"]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.heading{display:block;font-weight:300;line-height:1.25;font-family:neue-haas-grotesk-display, Helvetica, Arial, sans-serif}.heading-1{font-size:2.5rem}@media (min-width: 1024px){.heading-1{font-size:6.5rem;line-height:1;font-weight:200 }}.heading-2{font-size:2rem}@media (min-width: 1024px){.heading-2{font-size:5.5rem;line-height:1 }}.heading-3{font-size:2rem}@media (min-width: 1024px){.heading-3{font-size:4.5rem;line-height:1.25 }}.heading-4{font-size:2rem}@media (min-width: 1024px){.heading-4{font-size:3.5rem;line-height:1.25 }}.subheadline{display:block;font-family:neue-haas-grotesk-display, Helvetica, Arial, sans-serif;line-height:1.25}.subheadline-1{font-size:1.5rem}@media (min-width: 1024px){.subheadline-1{font-size:2.5rem}}.subheadline-2{font-size:1.5rem}@media (min-width: 1024px){.subheadline-2{font-size:2rem}}.subheadline-3{font-size:1.5rem}@media (min-width: 1024px){.subheadline-3{font-size:1.5rem}}:host{display:block}";

const AESHeading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The heading tag to apply: 1 | 2 | 3 | 4
     */
    this.level = 2;
    /**
     * The heading level style to apply. Optional override to default styles for a given level
     */
    this.levelStyle = this.level;
    /**
     * The smaller, decorative subheading style
     */
    this.sub = false;
  }
  render() {
    // classNames object for dynamic classes
    const headingClasses = {
      heading: !this.sub,
      [`heading-${this.levelStyle}`]: !this.sub,
      // Warning: there is no style for subheadline-4!
      subheadline: this.sub,
      [`subheadline-${this.levelStyle}`]: this.sub,
    };
    switch (this.level) {
      case 1:
        return (index.h("h1", { class: headingClasses }, index.h("slot", null)));
      case 2:
        return (index.h("h2", { class: headingClasses }, index.h("slot", null)));
      case 3:
        return (index.h("h3", { class: headingClasses }, index.h("slot", null)));
      case 4:
        return (index.h("h4", { class: headingClasses }, index.h("slot", null)));
    }
  }
};
AESHeading.style = aesHeadingCss;

exports.aes_heading = AESHeading;
