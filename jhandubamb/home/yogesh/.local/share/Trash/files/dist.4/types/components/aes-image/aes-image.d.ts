/**
 * The image component, with support for parallax scrolling.
 * @element aes-image
 *
 * @slot multimedia - The image to be presented.
 * @slot caption - The caption text for the image.
 */
export declare class AesImage {
  /**
   * Should this image be a parallax instance?
   */
  parallax: boolean;
  el: HTMLAesImageElement;
  private parallaxContainer;
  toggleParallax(): void;
  componentDidLoad(): void;
  render(): any;
}
