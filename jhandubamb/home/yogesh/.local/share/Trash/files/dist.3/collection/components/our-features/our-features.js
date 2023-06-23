import { h } from '@stencil/core';
export class ourFeatures {
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
  static get is() { return "our-features"; }
  static get originalStyleUrls() {
    return {
      "$": ["our-features.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["our-features.css"]
    };
  }
}
