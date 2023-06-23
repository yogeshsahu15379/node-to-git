import { LinkTarget } from '../../utils/types';
/**
 * The AES Link component
 * @element aes-link
 * @slot defaultSlot
 */
export declare class AESLink {
  /**
   * The <a> href attribute
   */
  href: string;
  /**
   * The <a> rel attribute
   */
  rel: string;
  /**
   * The <a> target attribute
   */
  target: LinkTarget;
  render(): any;
}
