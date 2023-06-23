import { NeutralColor } from '../../utils/types';
/**
 * A component to handle setting background colors for children in the shadow DOM
 * @element aes-bg
 * @slot defaultSlot
 */
export declare class AesBg {
  /**
   * The neutral color to apply to the background
   */
  color: NeutralColor;
  /**
   * The image to apply to the background
   */
  imageUrl: string;
  /**
   * The position of the image.
   */
  imagePosition: 'top-right' | 'bottom';
  render(): any;
}
