import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesHeroSlideCss = ":host{display:block}.eyebrow{padding-bottom:2rem}.title{padding-bottom:5rem}";

const AesHeroSlide = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.parseCtaData(this.cta);
  }
  parseCtaData(newValue) {
    if (typeof newValue === 'string') {
      this.ctaData = JSON.parse(newValue);
      return;
    }
    this.ctaData = newValue;
  }
  render() {
    var _a;
    return (h(Host, null, h("aes-heading", { class: "eyebrow", sub: true, level: 3 }, this.eyebrow), h("aes-heading", { class: "title", level: 2, levelStyle: 3 }, this.headline), ((_a = this === null || this === void 0 ? void 0 : this.ctaData) === null || _a === void 0 ? void 0 : _a.url) && (h("aes-button", { url: this.ctaData.url, variant: "primary", shouldDisplayArrow: true }, this.ctaData.text))));
  }
  static get watchers() { return {
    "cta": ["parseCtaData"]
  }; }
};
AesHeroSlide.style = aesHeroSlideCss;

export { AesHeroSlide as aes_hero_slide };
