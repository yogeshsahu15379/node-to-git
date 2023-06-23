import { IconType } from '../../utils/enums';
/**
 * The logo component.
 * @element aes-icon
 */
export declare class AESIcon {
  /**
   * The icon type to display from ./assets. Takes precedence over url.
   */
  icon: IconType;
  /**
   * The url to display a remote icon
   */
  url: string;
  render(): any;
}
