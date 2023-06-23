import { LinkTarget } from '../../utils/types';
export declare class AesMenuLink {
  /**
   * Whether or not the link is active.
   */
  active: boolean;
  /**
   * The link URL.
   */
  url: string;
  /**
   * The link target.
   */
  target: LinkTarget;
  render(): any;
}
