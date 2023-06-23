import { LinkTarget } from '../../utils/types';
export declare type ButtonVariant = 'arrow-link' | 'none' | 'primary' | 'secondary';
export declare class AesButton {
  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you want to render a button element.
   */
  url: string;
  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  target: LinkTarget;
  /**
   * The button style variant to use.
   */
  variant: ButtonVariant;
  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url prop
   */
  disabled: boolean;
  /**
   * Whether to display a right arrow after the slot
   */
  shouldDisplayArrow: boolean;
  render(): any;
}
