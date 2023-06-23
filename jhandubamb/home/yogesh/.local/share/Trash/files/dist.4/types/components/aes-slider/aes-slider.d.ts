/**
 * Slider component. Receives a set of slides (Canvas elements
 * with Slider contents)
 * @element aes-slider
 * @slot slides - The slot containing the slide elements
 */
export declare class AesSlider {
  /**
   * The actual element of this Hero slideshow
   */
  el: HTMLAesSliderElement;
  /**
   * Whether to display navigation arrows to switch slides
   */
  displayArrows: boolean;
  /**
   * Whether to display navigation dots to switch slides
   */
  displayDots: boolean;
  /**
   * Whether to automatically advance slides
   */
  autoplay: boolean;
  /**
   * Whether to infinitely loop slides
   */
  loop: boolean;
  /**
   * Whether the slider has been initialized
   */
  initialized: boolean;
  /**
   * Delay between slides change (miliseconds, requires active autoplay)
   */
  duration: number;
  /**
   * Number of slides to display (e.g. use 1.5 to display one and a half slides)
   */
  slidesToDisplay: number;
  /**
   * Default no of slides visible on mobile view
   */
  slidesToDisplayOnMobile: number;
  /**
   * Spacing between slides
   */
  spacing: number;
  /**
   *  is screen in mobile size
   */
  isMobile: boolean;
  /**
   * Interval for slide changes on autoplay
   */
  private autoPlayInterval;
  /**
   * Holds the instance of the slider once is initialized
   */
  private slider;
  /**
   * Holds the slider details (what the `detail` method returns)
   */
  private sliderDetails;
  /**
   * References to the navigation dots placeholder DOM element
   */
  private dotsContainer;
  /**
   * event for screen resizing
   */
  private onWindowResize;
  private onWindow;
  private initializeSlider;
  private addNavigationDots;
  private goToSlide;
  private handleAutoplay;
  private handleStatus;
  private nextSlide;
  private prevSlide;
  componentDidLoad(): void;
  render(): any;
}
