/**
 * The Decor gradient component
 * @element aes-line
 */
export declare class AESDecor {
  /**
   * The actual DOM element for the Host
   */
  el: HTMLAesLineElement;
  /**
   * Stores the IntersectionObserver instance
   */
  animObserver: IntersectionObserver;
  /**
   * The time the animation lasts
   * https://developer.mozilla.org/en-US/docs/Web/CSS/time
   */
  animDuration: string;
  /**
   * Portion of the element visible to trigger the animation
   */
  animThreshold: number;
  /**
   * The direction for the line to exist.
   */
  direction: 'horizontal' | 'vertical';
  /**
   * Whether the line should be animated when
   */
  displayAnimated: boolean;
  private attachObserver;
  private checkObserver;
  private cleanUpObserver;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  render(): any;
}
