import { r as registerInstance, h, H as Host } from './index-abd53505.js';
import { I as IconType } from './enums-3680f0a7.js';

const aesBackToTopButtonCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;cursor:pointer}@media (min-width: 1024px){:host{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1.5rem;padding-right:1.5rem;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));border-radius:9999px}}aes-icon{width:1rem;height:1rem;padding:1rem;margin-right:-1rem}@media (min-width: 1024px){aes-icon{height:1.25rem;width:1.25rem;padding:0;margin-right:0}}slot{display:none}@media (min-width: 1024px){slot{display:inline;margin-left:0.5rem;line-height:1.25}}";

const AesBackToTopButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  private(e) {
    e.preventDefault();
    scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (h(Host, null, h("aes-icon", { icon: IconType.ARROW_UP }), h("slot", null)));
  }
};
AesBackToTopButton.style = aesBackToTopButtonCss;

export { AesBackToTopButton as aes_back_to_top_button };
