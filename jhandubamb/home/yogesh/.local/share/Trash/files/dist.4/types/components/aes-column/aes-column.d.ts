import { VerticalAlignment } from '../../utils/types';
export declare type colSpanRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/**
 * The content column component. This is intended to be a helper that works with the `<aes-grid>` component.
 *
 * @element aes-column
 * @slot defaultSlot
 */
export declare class AesColumn {
  /**
   * The number of columns wide this column should be.
   */
  colSpanDefault: colSpanRange;
  /**
   * The number of columns wide this column should be on small+ screens.
   */
  colSpanSm: colSpanRange;
  /**
   * The number of columns wide this column should be on medium+ screens.
   */
  colSpanMd: colSpanRange;
  /**
   * The number of columns wide this column should be on large+ screens.
   */
  colSpanLg: colSpanRange;
  /**
   * The number of columns wide this column should be on extra large+ screens.
   */
  colSpanXl: colSpanRange;
  /**
   * The number of columns wide this column should be on extra extra large+ screens.
   */
  colSpanXxl: colSpanRange;
  /**
   * The vertical placement of content inside of the column.
   */
  contentAlign: VerticalAlignment;
  render(): any;
}
