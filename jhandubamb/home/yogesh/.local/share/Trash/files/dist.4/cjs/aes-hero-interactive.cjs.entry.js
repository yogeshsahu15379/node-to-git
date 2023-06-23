'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesHeroInteractiveCss = ":host{display:block;width:100%;height:100vh;position:relative;--text-opacity:1;color:rgb(255, 255, 255);color:rgba(255, 255, 255, var(--text-opacity))}.bg-container{position:absolute;top:0;right:0;bottom:0;left:0;--bg-opacity:1;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, var(--bg-opacity))}video,iframe,::slotted([slot='bg-image']){display:-ms-flexbox !important;display:flex !important;-o-object-fit:cover !important;object-fit:cover !important;-o-object-position:center !important;object-position:center !important;width:100% !important;height:100% !important;opacity:0.4 !important}@media (prefers-reduced-motion: no-preference){::slotted([slot='bg-image']){display:none !important}}@media (prefers-reduced-motion: reduce){video,iframe{display:none !important}}aes-container{position:relative}aes-container,aes-grid,.content{height:100vh;position:relative}.controls{position:absolute;display:-ms-flexbox;display:flex;left:0;right:0;-ms-flex-pack:justify;justify-content:space-between;top:50%;display:none}.slides{position:relative;-ms-flex:1 1 0%;flex:1 1 0%}.progress{padding-bottom:10vmin}.pips{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.pip{padding:1rem}.pip-inner{width:1rem;height:1rem;border-radius:9999px;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));--bg-opacity:0.4;text-indent:-9999px}.pip--active{--bg-opacity:1}::slotted([slot='slides']){opacity:0;position:absolute;pointer-events:none;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}::slotted(.show){opacity:1;pointer-events:auto;-webkit-transition:opacity 1.5s ease-in-out;transition:opacity 1.5s ease-in-out}";

const AesHeroInteractive = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("div", { class: "bg-container" }, index.h("slot", { name: "bg-image" }), index.h("video", { autoplay: true, controls: true, loop: true, muted: true,
      // src={this.bgVideo}
      playsinline: true, onLoadedData: this.videoLoaded }, index.h("source", { id: "mp4", src: this.bgVideo }))), index.h("aes-grid", null, index.h("aes-column", { "col-span-default": "12", "col-span-md": "2" }), index.h("aes-column", { class: "content", "col-span-default": "12", "col-span-md": "8" }, index.h("div", { class: "slides" }, index.h("slot", { name: "slides" })), index.h("div", { class: "progress" }, this.progress === 'bar' && (index.h("aes-progress", { max: this.count, value: this.current + 1 })), this.progress === 'pips' && (index.h("div", { class: "pips" }, [...Array(this.count).keys()].map(pip => (index.h("div", { class: "pip", onClick: this.goToSlide(pip) }, index.h("div", { class: {
        'pip-inner': true,
        'pip--active': pip === this.current,
      } }, "Go to slide ", pip))))))))), index.h("div", { class: "controls" }, index.h("div", { class: "controls__back", onClick: this.dec }, "Back"), index.h("div", { class: "controls__forward", onClick: this.inc }, "Forward"))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "current": ["showSlide"]
  }; }
};
AesHeroInteractive.style = aesHeroInteractiveCss;

exports.aes_hero_interactive = AesHeroInteractive;
