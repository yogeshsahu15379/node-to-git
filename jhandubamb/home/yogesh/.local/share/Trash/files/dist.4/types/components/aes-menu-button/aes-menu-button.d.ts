import { IconType } from '../../utils/enums';
export declare class AesButton {
  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you are using the clickAction prop.
   */
  url: string;
  /**
   * The function to trigger when the user clicks the button.
   * Do not set this prop if you are using the url prop.
   */
  /**
   * The name of the icon being used for the button.
   */
  icon: IconType;
  /**
   * Whether to display a right arrow after the slot
   */
  shouldDisplayArrow: boolean;
  render(): any;
}
