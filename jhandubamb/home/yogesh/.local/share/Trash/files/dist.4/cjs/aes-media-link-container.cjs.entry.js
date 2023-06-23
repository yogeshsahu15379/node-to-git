'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesMediaLinkContainerCss = ":host{display:block}@media (min-width: 768px){.title{grid-column-start:2}}@media (min-width: 768px){.links{grid-column-start:7}}aes-bg{padding-top:4rem;padding-bottom:4rem}";

const AesMediaLinkContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Which brand color should be used as the background of this container?
     */
    this.bgColor = 'neutrals-gray1';
  }
  render() {
    return (index.h(index.Host, null, index.h("aes-bg", { color: this.bgColor }, index.h("aes-grid", { gapSize: "small" }, index.h("aes-column", { class: "title", "content-align": "top", "col-span-default": "12", "col-span-md": "5" }, index.h("slot", { name: "title" })), index.h("aes-column", { class: "links", "content-align": "middle", "col-span-default": "12", "col-span-md": "5" }, index.h("slot", { name: "media-links" }))))));
  }
};
AesMediaLinkContainer.style = aesMediaLinkContainerCss;

exports.aes_media_link_container = AesMediaLinkContainer;
