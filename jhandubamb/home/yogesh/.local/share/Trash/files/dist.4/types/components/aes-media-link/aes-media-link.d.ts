import { LinkTarget } from '../../utils/types';
import { IconType } from '../../utils/enums';
/**
 * The AES Media Link component
 * @element aes-media-link
 * @slot default - The slot to render as the component link text.
 */
export declare class AesMediaLink {
  /**
   * Whether to show the document icon
   */
  shouldDisplayIcon: boolean;
  /**
   * The icon to show next to the link.
   */
  icon: IconType;
  /**
   * The url to use for the link. This will render an anchor element.
   */
  url: string;
  /**
   * The target to use for the link, used in conjunction with the url.
   * Always open in a new tab because this should always link to a document.
   */
  target: LinkTarget;
  render(): any;
}
