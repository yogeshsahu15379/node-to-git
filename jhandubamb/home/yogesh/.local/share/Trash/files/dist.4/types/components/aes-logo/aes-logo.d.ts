import { LogoType, LogoVariants, Markets } from '../../utils/enums';
/**
 * The logo component.
 * @element aes-logo
 */
export declare class AESLogo {
  /**
   * The logo type to display from ./assets.
   */
  logo: LogoType;
  /**
   * The market associated with the logo.
   */
  market: Markets;
  /**
   * The style of the logo to use.
   */
  variant: LogoVariants;
  render(): any;
}
