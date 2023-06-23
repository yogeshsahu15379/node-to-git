'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');
const enums = require('./enums-7b1793d0.js');

const aesMediaLinkCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.media-link-icon{width:2.5rem;-ms-flex-negative:0;flex-shrink:0;margin-right:1rem}";

const AesMediaLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Whether to show the document icon
     */
    this.shouldDisplayIcon = true;
    /**
     * The icon to show next to the link.
     */
    this.icon = enums.IconType.DOCUMENT_DEFAULT;
    /**
     * The target to use for the link, used in conjunction with the url.
     * Always open in a new tab because this should always link to a document.
     */
    this.target = '_blank';
  }
  render() {
    return (index.h(index.Host, null, this.shouldDisplayIcon && (index.h("aes-icon", { class: "media-link-icon", icon: this.icon })), index.h("aes-button", { url: this.url, variant: "arrow-link", "should-display-arrow": true, target: this.target }, index.h("slot", null))));
  }
};
AesMediaLink.style = aesMediaLinkCss;

exports.aes_media_link = AesMediaLink;
