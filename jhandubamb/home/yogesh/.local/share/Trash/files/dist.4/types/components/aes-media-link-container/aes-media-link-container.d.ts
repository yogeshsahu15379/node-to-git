import { NeutralColor } from '../../utils/types';
/**
 * The AES Media Link Container component
 * @element aes-media-link-container
 * @slot media-links - The media link slot. Contains a links to resource documents.
 * @slot title - The title slot; the text displayed in the left column of container.
 */
export declare class AesMediaLinkContainer {
  /**
   * Which brand color should be used as the background of this container?
   */
  bgColor: NeutralColor;
  render(): any;
}
