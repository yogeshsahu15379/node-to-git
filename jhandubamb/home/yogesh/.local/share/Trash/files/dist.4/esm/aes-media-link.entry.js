import { r as registerInstance, h, H as Host } from './index-abd53505.js';
import { I as IconType } from './enums-3680f0a7.js';

const aesMediaLinkCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.media-link-icon{width:2.5rem;-ms-flex-negative:0;flex-shrink:0;margin-right:1rem}";

const AesMediaLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Whether to show the document icon
     */
    this.shouldDisplayIcon = true;
    /**
     * The icon to show next to the link.
     */
    this.icon = IconType.DOCUMENT_DEFAULT;
    /**
     * The target to use for the link, used in conjunction with the url.
     * Always open in a new tab because this should always link to a document.
     */
    this.target = '_blank';
  }
  render() {
    return (h(Host, null, this.shouldDisplayIcon && (h("aes-icon", { class: "media-link-icon", icon: this.icon })), h("aes-button", { url: this.url, variant: "arrow-link", "should-display-arrow": true, target: this.target }, h("slot", null))));
  }
};
AesMediaLink.style = aesMediaLinkCss;

export { AesMediaLink as aes_media_link };
