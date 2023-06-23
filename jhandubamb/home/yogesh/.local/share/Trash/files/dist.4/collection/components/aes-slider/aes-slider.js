import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import KeenSlider from 'keen-slider';
import tailwindThemeConfig from '../../resolved-tailwind-config';
import { IconType } from '../../utils/enums';
/**
 * Slider component. Receives a set of slides (Canvas elements
 * with Slider contents)
 * @element aes-slider
 * @slot slides - The slot containing the slide elements
 */
export class AesSlider {
  constructor() {
    /**
     * Whether to display navigation arrows to switch slides
     */
    this.displayArrows = false;
    /**
     * Whether to display navigation dots to switch slides
     */
    this.displayDots = false;
    /**
     * Whether to automatically advance slides
     */
    this.autoplay = false;
    /**
     * Whether to infinitely loop slides
     */
    this.loop = false;
    /**
     * Whether the slider has been initialized
     */
    this.initialized = false;
    /**
     * Delay between slides change (miliseconds, requires active autoplay)
     */
    this.duration = 5000;
    /**
     * Number of slides to display (e.g. use 1.5 to display one and a half slides)
     */
    this.slidesToDisplay = 1;
    /**
     * Default no of slides visible on mobile view
     */
    this.slidesToDisplayOnMobile = 1.25;
    /**
     * Spacing between slides
     */
    this.spacing = 32;
    /**
     *  is screen in mobile size
     */
    this.isMobile = false;
    this.initializeSlider = () => {
      const container = this.el.querySelector('.slides-collection');
      this.slider = new KeenSlider(container, {
        slidesPerView: this.isMobile
          ? this.slidesToDisplayOnMobile
          : this.slidesToDisplay,
        spacing: this.spacing,
        loop: this.loop,
        created: instance => {
          this.initialized = true;
          this.sliderDetails = instance.details();
          this.handleAutoplay(true);
          this.addNavigationDots();
        },
        dragEnd: () => this.handleAutoplay(true),
        dragStart: () => this.handleAutoplay(false),
        slideChanged: () => this.handleStatus(),
      });
    };
    this.addNavigationDots = () => {
      if (!this.displayDots)
        return;
      [...Array(this.sliderDetails.size).keys()].map(slide => {
        const dot = document.createElement('button');
        dot.innerHTML = `Go to slide ${slide + 1}`;
        dot.classList.add('dot');
        this.dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
          this.goToSlide(slide);
        });
      });
    };
    this.goToSlide = slide => {
      this.slider.moveToSlide(slide);
      this.handleAutoplay(this.autoplay);
    };
    this.handleAutoplay = (run) => {
      if (!this.autoplay)
        return;
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = setInterval(() => {
        if (run) {
          this.nextSlide();
        }
      }, this.duration);
    };
    this.handleStatus = () => {
      if (!this.slider)
        return;
      // set active slide in dots navigation
      if (this.displayDots) {
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
          index === this.slider.details().relativeSlide
            ? dot.classList.add('dot--active')
            : dot.classList.remove('dot--active');
        });
      }
    };
    this.nextSlide = () => {
      if (!this.slider)
        return;
      this.slider.next();
      this.handleAutoplay(this.autoplay);
    };
    this.prevSlide = () => {
      if (!this.slider)
        return;
      this.slider.prev();
      this.handleAutoplay(this.autoplay);
    };
  }
  /**
   * event for screen resizing
   */
  onWindowResize() {
    this.onWindow();
  }
  onWindow() {
    console.log('resize called', this.isMobile);
    // clearTimeout(this.resizeTimer)
    // this.resizeTimer = setTimeout(() => {
    const docWidth = document.documentElement.clientWidth;
    const breakpoint = parseInt(tailwindThemeConfig.screens.md.replace('px', ''));
    this.isMobile = docWidth < breakpoint;
    // console.log('resize ###########', this.isMobile)
    // this.slidesToDisplay = 1;
    this.initializeSlider();
    // }, 200)
  }
  componentDidLoad() {
    this.initializeSlider();
    this.handleStatus();
  }
  render() {
    return (h(Host, null,
      h("div", { class: "slides-wrapper" },
        h("slot", { name: "slides" }),
        this.displayArrows && (h("button", { class: "slides-button slides-previous", onClick: this.prevSlide, type: "button" },
          h("aes-icon", { icon: IconType.CHEVRON_LEFT }))),
        this.displayArrows && (h("button", { class: "slides-button slides-next", onClick: this.nextSlide, type: "button" },
          h("aes-icon", { icon: IconType.CHEVRON_RIGHT })))),
      this.displayDots && (h("div", { class: "slides-dots", ref: el => (this.dotsContainer = el) }))));
  }
  static get is() { return "aes-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-slider.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-slider.css"]
  }; }
  static get properties() { return {
    "displayArrows": {
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
        "text": "Whether to display navigation arrows to switch slides"
      },
      "attribute": "display-arrows",
      "reflect": true,
      "defaultValue": "false"
    },
    "displayDots": {
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
        "text": "Whether to display navigation dots to switch slides"
      },
      "attribute": "display-dots",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "Whether to automatically advance slides"
      },
      "attribute": "autoplay",
      "reflect": true,
      "defaultValue": "false"
    },
    "loop": {
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
        "text": "Whether to infinitely loop slides"
      },
      "attribute": "loop",
      "reflect": true,
      "defaultValue": "false"
    },
    "initialized": {
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
        "text": "Whether the slider has been initialized"
      },
      "attribute": "initialized",
      "reflect": true,
      "defaultValue": "false"
    },
    "duration": {
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
        "text": "Delay between slides change (miliseconds, requires active autoplay)"
      },
      "attribute": "duration",
      "reflect": false,
      "defaultValue": "5000"
    },
    "slidesToDisplay": {
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
        "text": "Number of slides to display (e.g. use 1.5 to display one and a half slides)"
      },
      "attribute": "slides-to-display",
      "reflect": false,
      "defaultValue": "1"
    },
    "slidesToDisplayOnMobile": {
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
        "text": "Default no of slides visible on mobile view"
      },
      "attribute": "slides-to-display-on-mobile",
      "reflect": false,
      "defaultValue": "1.25"
    },
    "spacing": {
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
        "text": "Spacing between slides"
      },
      "attribute": "spacing",
      "reflect": false,
      "defaultValue": "32"
    }
  }; }
  static get states() { return {
    "isMobile": {}
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
