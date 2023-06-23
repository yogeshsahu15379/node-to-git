import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
/**
 * Full window-height video background slideshow. Takes any collection within
 * its slot and turns those into animated slides.
 * @element aes-hero-interactive
 */
export class AesHeroInteractive {
  constructor() {
    /**
     * How often should the slide should change (in milliseconds)
     */
    this.duration = 5000;
    /**
     * How to show progress: a progress bar or "pips"
     */
    this.progress = 'bar';
    /**
     * Slide position
     */
    this.current = 0;
    /**
     * Count the children within the slot
     */
    this.count = 0;
    /**
     * Increase current slide up to max count then start over
     * @TODO: Move inc/dec to utils/testable function
     */
    this.inc = () => (this.current = (this.current + 1) / this.count >= 1 ? 0 : this.current + 1);
    /**
     * Decrease current slide down to 0 then jump to max count
     * @TODO: Move inc/dec to utils/testable function
     */
    this.dec = () => (this.current =
      (this.current - 1) / this.count < 0 ? this.count - 1 : this.current - 1);
    /**
     * Go to a slide directly by number, note the returned function
     */
    this.goToSlide = (num) => () => {
      clearInterval(this.interval);
      this.current = num;
    };
    /**
     * What to do when the video loads, triggered by onLoadedData from <video>
     */
    this.videoLoaded = event => {
      // Show first slide, small delay to allow hydration
      // @TODO: handle this with the componentShouldUpdate() lifecycle hook instead
      setTimeout(this.showSlide.bind(this), 100);
      // Start automated slideshow
      this.interval = setInterval(this.inc, this.duration);
      event.path[0].volume = this.initialVolume ? this.initialVolume : 0.5;
    };
  }
  /**
   * When current slide changes, remove 'show' from all children, add to active
   */
  showSlide() {
    // Remove 'show' from all slides
    this.slides.forEach(slide => slide.classList.remove('show'));
    // Set show on active slide
    this.slides[this.current].classList.add('show');
  }
  componentDidLoad() {
    // Cache children slides
    this.slides = Array.from(this.el.querySelectorAll('aes-hero-slide'));
    // Count slides
    this.count = this.slides.length;
  }
  render() {
    // let newVideo = ''
    // if (this.bgVideo && this.bgVideo.includes('vimeo')) {
    //   const videoURL = this.bgVideo.split('/')
    //   const videoID = videoURL[videoURL.length - 1]
    //   newVideo = `https://player.vimeo.com/video/${videoID}`
    // }
    // {console.log(this.bgVideo, '##############################')}
    return (h(Host, null,
      h("div", { class: "bg-container" },
        h("slot", { name: "bg-image" }),
        h("video", { autoplay: true, controls: true, loop: true, muted: true, 
          // src={this.bgVideo}
          playsinline: true, onLoadedData: this.videoLoaded },
          h("source", { id: "mp4", src: this.bgVideo }))),
      h("aes-grid", null,
        h("aes-column", { "col-span-default": "12", "col-span-md": "2" }),
        h("aes-column", { class: "content", "col-span-default": "12", "col-span-md": "8" },
          h("div", { class: "slides" },
            h("slot", { name: "slides" })),
          h("div", { class: "progress" },
            this.progress === 'bar' && (h("aes-progress", { max: this.count, value: this.current + 1 })),
            this.progress === 'pips' && (h("div", { class: "pips" }, [...Array(this.count).keys()].map(pip => (h("div", { class: "pip", onClick: this.goToSlide(pip) },
              h("div", { class: {
                  'pip-inner': true,
                  'pip--active': pip === this.current,
                } },
                "Go to slide ",
                pip))))))))),
      h("div", { class: "controls" },
        h("div", { class: "controls__back", onClick: this.dec }, "Back"),
        h("div", { class: "controls__forward", onClick: this.inc }, "Forward"))));
  }
  static get is() { return "aes-hero-interactive"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-hero-interactive.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-hero-interactive.css"]
  }; }
  static get properties() { return {
    "bgVideo": {
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
        "text": "A url to an mp4 video to play full size in the background"
      },
      "attribute": "bg-video",
      "reflect": false
    },
    "bgImage": {
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
        "text": "The background image for low-motion users"
      },
      "attribute": "bg-image",
      "reflect": false
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
        "text": "How often should the slide should change (in milliseconds)"
      },
      "attribute": "duration",
      "reflect": false,
      "defaultValue": "5000"
    },
    "progress": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'bar' | 'pips'",
        "resolved": "\"bar\" | \"pips\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "How to show progress: a progress bar or \"pips\""
      },
      "attribute": "progress",
      "reflect": false,
      "defaultValue": "'bar'"
    }
  }; }
  static get states() { return {
    "current": {},
    "count": {},
    "slides": {},
    "interval": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "current",
      "methodName": "showSlide"
    }]; }
}
