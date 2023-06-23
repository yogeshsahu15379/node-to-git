/**
 * Full window-height video background slideshow. Takes any collection within
 * its slot and turns those into animated slides.
 * @element aes-hero-interactive
 */
export declare class AesHeroInteractive {
  /**
   * A url to an mp4 video to play full size in the background
   */
  bgVideo: string;
  /**
   * The background image for low-motion users
   */
  bgImage: string;
  /**
   * what should be initial levels for video on first load
   */
  initialVolume: number;
  /**
   * How often should the slide should change (in milliseconds)
   */
  duration: number;
  /**
   * How to show progress: a progress bar or "pips"
   */
  progress: 'bar' | 'pips';
  /**
   * The actual element of this Hero slideshow
   */
  el: HTMLAesHeroInteractiveElement;
  /**
   * Slide position
   */
  current: number;
  /**
   * Count the children within the slot
   */
  count: number;
  /**
   * Cache the slot content to iterate over
   */
  slides: HTMLAesHeroSlideElement[];
  /**
   * Interval for slide changes
   */
  interval: ReturnType<typeof setInterval>;
  /**
   * Increase current slide up to max count then start over
   * @TODO: Move inc/dec to utils/testable function
   */
  private inc;
  /**
   * Decrease current slide down to 0 then jump to max count
   * @TODO: Move inc/dec to utils/testable function
   */
  private dec;
  /**
   * Go to a slide directly by number, note the returned function
   */
  private goToSlide;
  /**
   * What to do when the video loads, triggered by onLoadedData from <video>
   */
  private videoLoaded;
  /**
   * When current slide changes, remove 'show' from all children, add to active
   */
  private showSlide;
  componentDidLoad(): void;
  render(): any;
}
