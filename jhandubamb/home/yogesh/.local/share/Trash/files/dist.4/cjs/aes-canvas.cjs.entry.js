'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');
const resolvedTailwindConfig = require('./resolved-tailwind-config-112e9f66.js');

const aesCanvasCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([display-drop-shadow='true']),:host([display-drop-shadow='']){-webkit-box-shadow:0px 8px 32px rgba(0, 0, 0, 0.06);box-shadow:0px 8px 32px rgba(0, 0, 0, 0.06)}:host .outer-wrapper{height:100%}.wrapper{height:100%}:host([display-border='true']) .outer-wrapper,:host([display-border='']) .outer-wrapper{border-width:1px;border-style:solid}:host(:not([bg-hover-image=''])) .outer-wrapper{position:relative}:host(:not([bg-hover-image=''])) .outer-wrapper aes-bg{position:relative}:host(:not([bg-hover-image=''])) .outer-wrapper::before{position:absolute;display:block;width:100%;height:100%;top:0;left:0;opacity:0;background-position:center;background-size:cover;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:700ms;transition-duration:700ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);background-image:var(--bgImage);content:''}:host(:not([bg-hover-image=''])) .outer-wrapper>*{-webkit-transition-property:background-color, border-color, color, fill, stroke;transition-property:background-color, border-color, color, fill, stroke;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host(:not([bg-hover-image=''])) .outer-wrapper:hover::before{opacity:1}:host(:not([bg-hover-image=''])) .outer-wrapper:hover>*{--text-opacity:1 !important;color:rgb(255, 255, 255) !important;color:rgba(255, 255, 255, var(--text-opacity)) !important}:host([display-border][border-color='neutrals-white']) .outer-wrapper{--border-opacity:1;border-color:rgb(255, 255, 255);border-color:rgba(255, 255, 255, var(--border-opacity))}:host([display-border][border-color='neutrals-gray1']) .outer-wrapper{--border-opacity:1;border-color:rgb(245, 245, 245);border-color:rgba(245, 245, 245, var(--border-opacity))}:host([display-border][border-color='neutrals-gray2']) .outer-wrapper{--border-opacity:1;border-color:rgb(229, 229, 229);border-color:rgba(229, 229, 229, var(--border-opacity))}:host([display-border][border-color='neutrals-gray3']) .outer-wrapper{--border-opacity:1;border-color:rgb(191, 191, 191);border-color:rgba(191, 191, 191, var(--border-opacity))}:host([display-border][border-color='neutrals-gray4']) .outer-wrapper{--border-opacity:1;border-color:rgb(102, 102, 102);border-color:rgba(102, 102, 102, var(--border-opacity))}:host([display-border][border-color='neutrals-black']) .outer-wrapper{--border-opacity:1;border-color:rgb(0, 0, 0);border-color:rgba(0, 0, 0, var(--border-opacity))}:host([display-border][border-color='signature-blue1']) .outer-wrapper{--border-opacity:1;border-color:rgb(33, 74, 222);border-color:rgba(33, 74, 222, var(--border-opacity))}:host([display-border][border-color='signature-blue2']) .outer-wrapper{--border-opacity:1;border-color:rgb(88, 119, 230);border-color:rgba(88, 119, 230, var(--border-opacity))}:host([display-border][border-color='signature-blue3']) .outer-wrapper{--border-opacity:1;border-color:rgb(144, 164, 238);border-color:rgba(144, 164, 238, var(--border-opacity))}:host([display-border][border-color='signature-blue4']) .outer-wrapper{--border-opacity:1;border-color:rgb(199, 210, 247);border-color:rgba(199, 210, 247, var(--border-opacity))}:host([display-border][border-color='signature-purple1']) .outer-wrapper{--border-opacity:1;border-color:rgb(140, 92, 242);border-color:rgba(140, 92, 242, var(--border-opacity))}:host([display-border][border-color='signature-purple2']) .outer-wrapper{--border-opacity:1;border-color:rgb(169, 133, 245);border-color:rgba(169, 133, 245, var(--border-opacity))}:host([display-border][border-color='signature-purple3']) .outer-wrapper{--border-opacity:1;border-color:rgb(197, 173, 248);border-color:rgba(197, 173, 248, var(--border-opacity))}:host([display-border][border-color='signature-purple4']) .outer-wrapper{--border-opacity:1;border-color:rgb(226, 214, 252);border-color:rgba(226, 214, 252, var(--border-opacity))}:host([display-border][border-color='signature-aqua1']) .outer-wrapper{--border-opacity:1;border-color:rgb(0, 162, 199);border-color:rgba(0, 162, 199, var(--border-opacity))}:host([display-border][border-color='signature-aqua2']) .outer-wrapper{--border-opacity:1;border-color:rgb(64, 185, 213);border-color:rgba(64, 185, 213, var(--border-opacity))}:host([display-border][border-color='signature-aqua3']) .outer-wrapper{--border-opacity:1;border-color:rgb(128, 208, 227);border-color:rgba(128, 208, 227, var(--border-opacity))}:host([display-border][border-color='signature-aqua4']) .outer-wrapper{--border-opacity:1;border-color:rgb(191, 232, 241);border-color:rgba(191, 232, 241, var(--border-opacity))}:host([display-border][border-color='signature-green1']) .outer-wrapper{--border-opacity:1;border-color:rgb(22, 168, 55);border-color:rgba(22, 168, 55, var(--border-opacity))}:host([display-border][border-color='signature-green2']) .outer-wrapper{--border-opacity:1;border-color:rgb(80, 190, 105);border-color:rgba(80, 190, 105, var(--border-opacity))}:host([display-border][border-color='signature-green3']) .outer-wrapper{--border-opacity:1;border-color:rgb(138, 211, 155);border-color:rgba(138, 211, 155, var(--border-opacity))}:host([display-border][border-color='signature-green4']) .outer-wrapper{--border-opacity:1;border-color:rgb(197, 233, 205);border-color:rgba(197, 233, 205, var(--border-opacity))}:host([display-border][border-color='ui-error']) .outer-wrapper{--border-opacity:1;border-color:rgb(225, 9, 9);border-color:rgba(225, 9, 9, var(--border-opacity))}:host([border-color='transparent']) .outer-wrapper{border-color:transparent}aes-bg{height:100%}aes-button{margin-top:3rem}aes-button[variant='arrow-link']{margin-top:1.5rem}aes-spacer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (device-width: 390px){aes-spacer{height:auto;width:390px;max-width:100%}}@media only screen and (device-width: 375px){aes-spacer video{height:auto;width:375px;max-width:100%}}@media only screen and (device-width: 750px){aes-spacer video{height:auto;width:750px;max-width:100%}}@media only screen and (device-height: 812px){aes-spacer video{height:auto;width:812px;max-width:100%}}@media only screen and (device-height: 844px){aes-spacer video{height:auto;width:844px;max-width:100%}}@media only screen and (device-height: 926px){aes-spacer video{height:auto;width:926px;max-width:100%}}@media only screen and (device-width: 428px){aes-spacer video{height:auto;width:428px;max-width:100%}}@media only screen and (device-width: 736px){aes-spacer{height:auto;width:736px;max-width:100%}}@media only screen and (device-width: 414px){aes-spacer{height:auto;width:414px;max-width:100%}}@media only screen and (device-width: 896px){aes-spacer video{height:auto;width:896px;max-width:100%}}@media only screen and (device-width: 667px){aes-spacer video{height:auto;width:667px;max-width:100%}}";

const AesCanvas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Which brand color should be used as the background of this section?
     */
    this.bgColor = 'transparent';
    /**
     * The image to apply to the background on hover
     */
    this.bgHoverImage = '';
    /**
     * The vimeo video to show
     */
    this.bgVimeoVideo = '';
    /**
     * Whether to allow autoplay
     */
    this.autoplay = false;
    /**
     * Whether to show controls on video
     */
    this.controls = false;
    /**
     * Whether to display a drop shadow on the component
     */
    this.displayDropShadow = false;
    /**
     * Whether to display a border around the component
     */
    this.displayBorder = false;
    /**
     * Which brand color should be used as the border of this section?
     */
    this.borderColor = 'neutrals-black';
    /**
     * Add temporary support for automatic responsive padding on the Canvas.
     */
    // TODO - START BLOCK - Remove this and the window size detection when we finally add support for responsive padding.
    this.isMobile = false;
    this.resizeTimer = null;
    this.videoLoaded = event => {
      event.path[0].volume = this.initialVolume ? this.initialVolume : 0.5;
    };
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
  onWindowResize() {
    this.onWindow();
  }
  onWindow() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      const docWidth = document.documentElement.clientWidth;
      const breakpoint = parseInt(resolvedTailwindConfig.tailwindThemeConfig.screens.md.replace('px', ''));
      this.isMobile = docWidth < breakpoint;
    }, 200);
  }
  componentDidLoad() {
    this.onWindow();
  }
  makeHorizontalPaddingResponsive(padding, max = 4) {
    if (this.bgColor === 'transparent' || this.borderColor === 'transparent') {
      return this.makeVerticalPaddingResponsive(padding, max);
    }
    return padding;
  }
  makeVerticalPaddingResponsive(padding, max = 10) {
    if (this.isMobile && parseInt(padding) > max) {
      return max;
    }
    return padding;
  }
  // TODO - END BLOCK - Remove this and the window size detection when we finally add support for responsive padding.
  render() {
    return (index.h("div", { class: "outer-wrapper", style: { '--bgImage': `url("${this.bgHoverImage}")` } }, index.h("aes-bg", { color: this.bgColor }, index.h("div", { class: "wrapper" }, index.h("aes-spacer", { t: this.makeVerticalPaddingResponsive(this.outerPaddingTop, 10), b: this.makeVerticalPaddingResponsive(this.outerPaddingBottom, 10), l: this.makeHorizontalPaddingResponsive(this.outerPaddingLeft, 4), r: this.makeHorizontalPaddingResponsive(this.outerPaddingRight, 4) }, index.h("slot", { name: "multimedia" }), this.bgVimeoVideo !== '' &&
      (this.autoplay === true && this.controls === false ? (index.h("video", { autoplay // configurable
        : true, loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded }, index.h("source", { src: this.bgVimeoVideo, type: "video/mp4" }))) : this.autoplay === false && this.controls === true ? (index.h("video", { controls // configurable
        : true, loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded }, index.h("source", { src: this.bgVimeoVideo, type: "video/mp4" }))) : this.autoplay === true && this.controls === true ? (index.h("video", { controls: true, autoPlay: true, loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded }, index.h("source", { src: this.bgVimeoVideo, type: "video/mp4" }))) : (index.h("video", { loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded }, index.h("source", { src: this.bgVimeoVideo, type: "video/mp4" })))), index.h("aes-spacer", { t: this.makeVerticalPaddingResponsive(this.paddingTop, 10), b: this.makeVerticalPaddingResponsive(this.paddingBottom, 10), l: this.makeHorizontalPaddingResponsive(this.paddingLeft, 4), r: this.makeHorizontalPaddingResponsive(this.paddingRight, 4) }, index.h("slot", { name: "body" }), this.ctaData !== undefined && (index.h("aes-button", { shouldDisplayArrow: this.ctaData.shouldDisplayArrow, url: this.ctaData.url, variant: this.ctaData.variant }, this.ctaData.text))))))));
  }
  static get watchers() { return {
    "cta": ["parseCtaData"]
  }; }
};
AesCanvas.style = aesCanvasCss;

exports.aes_canvas = AesCanvas;