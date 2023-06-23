import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesBgCss = ":host{display:block;overflow:visible}:host([color='neutrals-white']){--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity))}:host([color='neutrals-gray1']){--bg-opacity:1;background-color:rgb(245, 245, 245);background-color:rgba(245, 245, 245, var(--bg-opacity))}:host([color='neutrals-gray2']){--bg-opacity:1;background-color:rgb(229, 229, 229);background-color:rgba(229, 229, 229, var(--bg-opacity))}:host([color='neutrals-gray3']){--bg-opacity:1;background-color:rgb(191, 191, 191);background-color:rgba(191, 191, 191, var(--bg-opacity))}:host([color='neutrals-gray4']){--bg-opacity:1;background-color:rgb(102, 102, 102);background-color:rgba(102, 102, 102, var(--bg-opacity))}:host([color='neutrals-black']){--bg-opacity:1;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, var(--bg-opacity))}:host([color='transparent']){background-color:transparent}:host([image-url][image-position='top-right']){background-repeat:no-repeat;background-position:right top;background-size:cover;padding-top:100%}@media (min-width: 768px){:host([image-url][image-position='top-right']){background-size:calc((7 / 12) * 100%);padding-top:40%}}:host([image-url][image-position='bottom']){background-repeat:no-repeat;background-position:bottom;background-size:cover;padding-bottom:100%}@media (min-width: 768px){:host([image-url][image-position='bottom']){padding-bottom:25%}}";

const AesBg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The image to apply to the background
     */
    this.imageUrl = '';
  }
  render() {
    return (h(Host, { style: { backgroundImage: `url('${this.imageUrl}')` } }, h("slot", null)));
  }
};
AesBg.style = aesBgCss;

export { AesBg as aes_bg };
