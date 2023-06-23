import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';
import tailwindThemeConfig from '../../resolved-tailwind-config';
/**
 * The AES Canvas element for high levels of editorial control
 * @element aes-canvas
 * @slot multimedia - The slot to render an optional image, video or donut on top of the block.
 * @slot body - The primary slot to render editorial or WYSIWYG content.
 */
export class AesCanvas {
  constructor() {
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
      const breakpoint = parseInt(tailwindThemeConfig.screens.md.replace('px', ''));
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
    return (h("div", { class: "outer-wrapper", style: { '--bgImage': `url("${this.bgHoverImage}")` } },
      h("aes-bg", { color: this.bgColor },
        h("div", { class: "wrapper" },
          h("aes-spacer", { t: this.makeVerticalPaddingResponsive(this.outerPaddingTop, 10), b: this.makeVerticalPaddingResponsive(this.outerPaddingBottom, 10), l: this.makeHorizontalPaddingResponsive(this.outerPaddingLeft, 4), r: this.makeHorizontalPaddingResponsive(this.outerPaddingRight, 4) },
            h("slot", { name: "multimedia" }),
            this.bgVimeoVideo !== '' &&
              (this.autoplay === true && this.controls === false ? (h("video", { autoplay // configurable
                : true, loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded },
                h("source", { src: this.bgVimeoVideo, type: "video/mp4" }))) : this.autoplay === false && this.controls === true ? (h("video", { controls // configurable
                : true, loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded },
                h("source", { src: this.bgVimeoVideo, type: "video/mp4" }))) : this.autoplay === true && this.controls === true ? (h("video", { controls: true, autoPlay: true, loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded },
                h("source", { src: this.bgVimeoVideo, type: "video/mp4" }))) : (h("video", { loop: true, muted: true, playsinline: true, onLoadStart: this.videoLoaded },
                h("source", { src: this.bgVimeoVideo, type: "video/mp4" })))),
            h("aes-spacer", { t: this.makeVerticalPaddingResponsive(this.paddingTop, 10), b: this.makeVerticalPaddingResponsive(this.paddingBottom, 10), l: this.makeHorizontalPaddingResponsive(this.paddingLeft, 4), r: this.makeHorizontalPaddingResponsive(this.paddingRight, 4) },
              h("slot", { name: "body" }),
              this.ctaData !== undefined && (h("aes-button", { shouldDisplayArrow: this.ctaData.shouldDisplayArrow, url: this.ctaData.url, variant: this.ctaData.variant }, this.ctaData.text))))))));
  }
  static get is() { return "aes-canvas"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-canvas.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-canvas.css"]
  }; }
  static get properties() { return {
    "outerPaddingTop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the top of the component wrapper"
      },
      "attribute": "outer-padding-top",
      "reflect": false
    },
    "outerPaddingBottom": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the bottom of the component wrapper"
      },
      "attribute": "outer-padding-bottom",
      "reflect": false
    },
    "outerPaddingLeft": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the left of the component wrapper"
      },
      "attribute": "outer-padding-left",
      "reflect": false
    },
    "outerPaddingRight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the right of the component wrapper"
      },
      "attribute": "outer-padding-right",
      "reflect": false
    },
    "paddingTop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the top of the component body"
      },
      "attribute": "padding-top",
      "reflect": false
    },
    "paddingBottom": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the bottom of the component body"
      },
      "attribute": "padding-bottom",
      "reflect": false
    },
    "paddingLeft": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the left of the component body"
      },
      "attribute": "padding-left",
      "reflect": false
    },
    "paddingRight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SpacingTokens",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"8\" | \"10\" | \"12\" | \"20\" | \"40\" | \"16\" | \"24\" | \"32\" | \"48\" | \"56\" | \"64\" | \"72\" | \"84\" | \"96\" | \"px\"",
        "references": {
          "SpacingTokens": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The optional padding to add to the right of the component body"
      },
      "attribute": "padding-right",
      "reflect": false
    },
    "bgColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "NeutralColor",
        "resolved": "\"neutrals-black\" | \"neutrals-gray1\" | \"neutrals-gray2\" | \"neutrals-gray3\" | \"neutrals-gray4\" | \"neutrals-gray5\" | \"neutrals-white\" | \"transparent\"",
        "references": {
          "NeutralColor": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which brand color should be used as the background of this section?"
      },
      "attribute": "bg-color",
      "reflect": false,
      "defaultValue": "'transparent'"
    },
    "bgHoverImage": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The image to apply to the background on hover"
      },
      "attribute": "bg-hover-image",
      "reflect": true,
      "defaultValue": "''"
    },
    "bgVimeoVideo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The vimeo video to show"
      },
      "attribute": "bg-vimeo-video",
      "reflect": true,
      "defaultValue": "''"
    },
    "autoplay": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to allow autoplay"
      },
      "attribute": "autoplay",
      "reflect": true,
      "defaultValue": "false"
    },
    "controls": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to show controls on video"
      },
      "attribute": "controls",
      "reflect": true,
      "defaultValue": "false"
    },
    "displayDropShadow": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to display a drop shadow on the component"
      },
      "attribute": "display-drop-shadow",
      "reflect": true,
      "defaultValue": "false"
    },
    "displayBorder": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to display a border around the component"
      },
      "attribute": "display-border",
      "reflect": true,
      "defaultValue": "false"
    },
    "borderColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "\"transparent\" | \"neutrals-white\" | \"neutrals-gray1\" | \"neutrals-gray2\" | \"neutrals-gray3\" | \"neutrals-gray4\" | \"neutrals-gray5\" | \"neutrals-black\" | \"signature-blue1\" | \"signature-blue2\" | \"signature-blue3\" | \"signature-blue4\" | \"signature-purple1\" | \"signature-purple2\" | \"signature-purple3\" | \"signature-purple4\" | \"signature-aqua1\" | \"signature-aqua2\" | \"signature-aqua3\" | \"signature-aqua4\" | \"signature-green1\" | \"signature-green2\" | \"signature-green3\" | \"signature-green4\" | \"ui-error\"",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which brand color should be used as the border of this section?"
      },
      "attribute": "border-color",
      "reflect": false,
      "defaultValue": "'neutrals-black'"
    },
    "initialVolume": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "what should be initial levels for video on first load"
      },
      "attribute": "initial-volume",
      "reflect": false
    },
    "cta": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CTAProps | string",
        "resolved": "string | { shouldDisplayArrow?: boolean; text: string; url: string; variant?: \"primary\" | \"secondary\"; }",
        "references": {
          "CTAProps": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Options for rendering a CTA Link button at the bottom"
      },
      "attribute": "cta",
      "reflect": false
    }
  }; }
  static get states() { return {
    "ctaData": {},
    "isMobile": {}
  }; }
  static get watchers() { return [{
      "propName": "cta",
      "methodName": "parseCtaData"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
