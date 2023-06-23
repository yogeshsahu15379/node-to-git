import { SignaturePrimaryColor } from '../../utils/types';
/**
 * The "donut" radial percentage graph element
 *
 * @element aes-donut
 */
export declare class AesDonut {
  /**
   * Thickness of stroke
   */
  strokeWidth: number;
  /**
   * Percent of circumference color line fills
   */
  percent: number;
  /**
   * Only accepts the 4 signature colors
   */
  color: SignaturePrimaryColor;
  /**
   * We want circumference to always be 100
   */
  private circumference;
  /**
   * Therefore circle
   */
  private radius;
  /**
   * But viewbox and x/y must adjust for stroke width (stroke grows out)
   */
  private center;
  /**
   * Sets our viewport size
   */
  private bounds;
  /**
   * Dashed strokes start at 3 o'clock, we need to rotate them back to 12 o'clock
   */
  private dashOffset;
  /**
   * Thin line between sections
   */
  private border;
  /**
   * Generates the stroke-dasharray string, ie '75 25', takes into account border
   * @param val
   */
  private dashArrayString;
  /**
   * stroke-dashoffset lets us start/stop the dash at different places on circle
   * @param previous
   */
  private dashOffsetString;
  render(): any;
}
