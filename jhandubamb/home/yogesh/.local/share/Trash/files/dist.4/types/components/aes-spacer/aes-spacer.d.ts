import { SpacingTokens } from '../../utils/types';
/**
 * A wrapper component that provides padding to any axis (t,r,b,l)
 *
 * @element aes-spacer
 * @slot default - Wrapped content that needs some padding on an axis.
 */
export declare class AesSpacer {
  /**
   * Top spacing from Tailwind config
   */
  t: SpacingTokens;
  /**
   * Right spacing from Tailwind config
   */
  r: SpacingTokens;
  /**
   * Bottom spacing from Tailwind config
   */
  b: SpacingTokens;
  /**
   * Left spacing from Tailwind config
   */
  l: SpacingTokens;
  render(): any;
}
