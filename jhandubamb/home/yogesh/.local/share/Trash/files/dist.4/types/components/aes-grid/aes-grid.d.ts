import { Size } from '../../utils/types';
/**
 * The grid component.
 *
 * @element aes-grid
 * @slot defaultSlot
 */
export declare class AesGrid {
  /**
   * How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)
   */
  gapSize: Size;
  /**
   * How much of a gap should exist between columns on small+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  gapSizeSm: Size;
  /**
   * How much of a gap should exist between columns on medium+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  gapSizeMd: Size;
  /**
   * How much of a gap should exist between columns on large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  gapSizeLg: Size;
  /**
   * How much of a gap should exist between columns on extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  gapSizeXl: Size;
  /**
   * How much of a gap should exist between columns on extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  gapSizeXxl: Size;
  /**
   * Whether or not this is a nested grid. If it's nested, remove padding from the container.
   */
  isNested: boolean;
  render(): any;
}
