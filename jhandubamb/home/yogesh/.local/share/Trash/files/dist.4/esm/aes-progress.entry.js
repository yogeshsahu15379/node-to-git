import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesProgressCss = ":host{display:-ms-flexbox;display:flex;width:100%;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));--bg-opacity:0.4;border-radius:9999px;height:6px}.value{--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));border-radius:9999px;}";

const AesProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "value", style: { width: `${(this.value / this.max) * 100}%` } })));
  }
};
AesProgress.style = aesProgressCss;

export { AesProgress as aes_progress };
