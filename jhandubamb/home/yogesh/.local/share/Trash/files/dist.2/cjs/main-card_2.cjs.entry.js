'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-376f6f27.js');

const cardCss = "*{font-family:sans-serif}.card{max-width:1300px;background-color:#ffcc01;display:flex;padding:50px;border-radius:30px;margin:auto;margin-top:30px}.color-blue{background-color:blue}.color-green{background-color:green}.card_left{width:50%;margin:auto}.card_right{width:40%;margin:auto}.card_img{width:100%;border-radius:30px}h1{font-size:4.6rem}p{font-size:2.1rem}h1::after{content:\"\";height:3px;width:100%;display:block;background-color:black;margin-top:40px}button{padding:10px 30px;font-size:20px;border-radius:30px;border:2px solid black;transition:all .5s}button:hover,img:hover{transition:all .5s;background-color:#ffcc01;box-shadow:0 27px 30px -20px #000000}button:hover{scale:1.1;transform:rotate(5deg)}img:hover{transform:rotate(-5deg)}";

const card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.heading = '';
    this.subHeading = '';
    this.colorClass = undefined;
  }
  render() {
    return (index.h("div", { class: `card ${this.colorClass}` }, index.h("div", { class: "card_left" }, index.h("h1", null, this.heading), index.h("p", null, this.subHeading, " "), index.h("button", null, "Get started")), index.h("div", { class: "card_right" }, index.h("img", { class: "card_img", src: "https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg", alt: "image" }))));
  }
};
card.style = cardCss;

const ourFeaturesCss = "";

const ourFeatures = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: "ourfeatures" }, Users.map((e) => {
      return (
      // <Info name={e.name} rollNo={e.rollNo} />
      index.h("main-card", { heading: e.name, "sub-heading": e.rollNo, colorClass: e.colorClass }));
    })));
  }
};
ourFeatures.style = ourFeaturesCss;

exports.main_card = card;
exports.our_features = ourFeatures;
