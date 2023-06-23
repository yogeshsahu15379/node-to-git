import { Component, Host, h, Prop, State } from '@stencil/core';
export class AesLanguageSelector {
  constructor() {
    this.value = '0';
    this.isActive = false;
  }
  // @Listen('appload', { target: 'window' })
  // private selectValue() {
  // }
  handleChange(event) {
    this.value = event.target.value;
    // console.log(`id: ${this.value}`);
  }
  //  set language id
  clickHandler(event) {
    this.value = event.target.id;
    this.customOption();
  }
  // set show class on selected language
  customOption() {
    this.isActive = this.isActive ? false : true;
    // console.log('fire');
  }
  // all languages stored into array
  render() {
    const list = JSON.parse(this.languageselector);
    return (h(Host, null,
      h("div", null,
        h("select", { class: `default_selector`, onChange: (e) => this.handleChange(e) }, this.languageselector &&
          list.map(languageSelectorItem => languageSelectorItem.title && (h("option", { value: languageSelectorItem.value }, languageSelectorItem.title))))),
      h("div", { class: 'custom_select mt-6' },
        h("div", { class: "display", onClick: this.customOption.bind(this) },
          h("div", null,
            "  ",
            list[this.value].title,
            " "),
          h("div", null,
            h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
              h("path", { d: "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" })))),
        h("div", { class: `option_section ${this.isActive ? 'show ' : 'hide '}` }, list.map((item) => h("div", { class: `item ${item.value == this.value ? 'language_selected' : ''}`, onClick: this.clickHandler.bind(this), id: item.value }, item.title))))));
  }
  static get is() { return "aes-language-selector"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-language-selector.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-language-selector.css"]
  }; }
  static get properties() { return {
    "languageselector": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "for language selector titles and links"
      },
      "attribute": "languageselector",
      "reflect": false
    }
  }; }
  static get states() { return {
    "value": {},
    "isActive": {}
  }; }
}
