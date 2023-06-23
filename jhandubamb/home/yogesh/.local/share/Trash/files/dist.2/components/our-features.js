import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './card.js';

const ourFeaturesCss = "";

const ourFeatures = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    let Users = [
      {
        name: "Deepak",
        rollNo: "123",
        colorClass: "color-blue"
      },
      {
        name: "Yash",
        rollNo: "124",
        colorClass: "color-green"
      }
    ];
    return (h("div", { class: "ourfeatures" }, Users.map((e) => {
      return (
      // <Info name={e.name} rollNo={e.rollNo} />
      h("main-card", { heading: e.name, "sub-heading": e.rollNo, colorClass: e.colorClass }));
    })));
  }
  static get style() { return ourFeaturesCss; }
}, [0, "our-features"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["our-features", "main-card"];
  components.forEach(tagName => { switch (tagName) {
    case "our-features":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ourFeatures);
      }
      break;
    case "main-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OurFeatures = ourFeatures;
const defineCustomElement = defineCustomElement$1;

export { OurFeatures, defineCustomElement };
