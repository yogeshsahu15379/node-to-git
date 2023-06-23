import { r as registerInstance, h, H as Host } from './index-abd53505.js';

const aesMediaLinkContainerCss = ":host{display:block}@media (min-width: 768px){.title{grid-column-start:2}}@media (min-width: 768px){.links{grid-column-start:7}}aes-bg{padding-top:4rem;padding-bottom:4rem}";

const AesMediaLinkContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Which brand color should be used as the background of this container?
     */
    this.bgColor = 'neutrals-gray1';
  }
  render() {
    return (h(Host, null, h("aes-bg", { color: this.bgColor }, h("aes-grid", { gapSize: "small" }, h("aes-column", { class: "title", "content-align": "top", "col-span-default": "12", "col-span-md": "5" }, h("slot", { name: "title" })), h("aes-column", { class: "links", "content-align": "middle", "col-span-default": "12", "col-span-md": "5" }, h("slot", { name: "media-links" }))))));
  }
};
AesMediaLinkContainer.style = aesMediaLinkContainerCss;

export { AesMediaLinkContainer as aes_media_link_container };
