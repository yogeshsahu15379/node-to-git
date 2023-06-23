import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesTextInputCss = ":host{display:block}label{display:block;margin-bottom:0.5rem;font-size:1rem}label.hide{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([disabled='true']) label,:host([disabled='']) label{--text-opacity:1;color:rgb(102, 102, 102);color:rgba(102, 102, 102, var(--text-opacity))}:host([required='true']) label:after,:host([required='']) label:after{--text-opacity:1;color:rgb(225, 9, 9);color:rgba(225, 9, 9, var(--text-opacity));content:' *'}input{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));-webkit-box-shadow:none;box-shadow:none;border-width:1px;border-style:solid;--border-opacity:1;border-color:rgb(191, 191, 191);border-color:rgba(191, 191, 191, var(--border-opacity));font-size:1rem;padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem;border-radius:0.25rem}input:disabled{--bg-opacity:1;background-color:rgb(229, 229, 229);background-color:rgba(229, 229, 229, var(--bg-opacity));--text-opacity:1;color:rgb(102, 102, 102);color:rgba(102, 102, 102, var(--text-opacity))}input:invalid{--border-opacity:1;border-color:rgb(225, 9, 9);border-color:rgba(225, 9, 9, var(--border-opacity))}input:focus{--border-opacity:1;border-color:rgb(33, 74, 222);border-color:rgba(33, 74, 222, var(--border-opacity));outline:2px solid transparent;outline-offset:2px}";

const AesTextInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The type of text field.
     */
    this.fieldType = 'text';
  }
  render() {
    return (h(Host, null, h("label", { htmlFor: this.fieldName, class: { hide: this.hideLabel } }, this.labelText), h("input", Object.assign({ type: this.fieldType, name: this.fieldName, disabled: this.disabled, required: this.required, placeholder: this.hideLabel ? this.labelText : '' }, this.inputOptions))));
  }
};
AesTextInput.style = aesTextInputCss;

export { AesTextInput as aes_text_input };
