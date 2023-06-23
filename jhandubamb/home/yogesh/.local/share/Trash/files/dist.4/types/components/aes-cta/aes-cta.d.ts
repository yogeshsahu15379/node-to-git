import { LinkType } from '../../utils/types';
export declare type CTALink = string | LinkType;
/**
 * The AES CTA component s
 * @element aes-cta
 * @slot header - The header slot expects a heading element to render on the left side of the CTA.
 * @slot multimedia - The multimedia slot expects an image element to render on the right side of the CTA. The consuming component is responsible for the responsiveness of the image.
 */
export declare class AESCta {
  /**
   * The link url and text
   */
  link: CTALink;
  /**
   * Append a right arrow to the link text
   */
  displayLinkArrow: boolean;
  linkData: LinkType;
  componentWillLoad(): void;
  parseLinkData(newValue: CTALink): void;
  render(): any;
}
