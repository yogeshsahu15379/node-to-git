import { Color, NeutralColor, SpacingTokens } from '../../utils/types';
export declare type CTAProps = {
  shouldDisplayArrow?: boolean;
  text: string;
  url: string;
  variant?: 'primary' | 'secondary';
};
/**
 * The AES Canvas element for high levels of editorial control
 * @element aes-canvas
 * @slot multimedia - The slot to render an optional image, video or donut on top of the block.
 * @slot body - The primary slot to render editorial or WYSIWYG content.
 */
export declare class AesCanvas {
  /**
   * The optional padding to add to the top of the component wrapper
   */
  outerPaddingTop: SpacingTokens;
  /**
   * The optional padding to add to the bottom of the component wrapper
   */
  outerPaddingBottom: SpacingTokens;
  /**
   * The optional padding to add to the left of the component wrapper
   */
  outerPaddingLeft: SpacingTokens;
  /**
   * The optional padding to add to the right of the component wrapper
   */
  outerPaddingRight: SpacingTokens;
  /**
   * The optional padding to add to the top of the component body
   */
  paddingTop: SpacingTokens;
  /**
   * The optional padding to add to the bottom of the component body
   */
  paddingBottom: SpacingTokens;
  /**
   * The optional padding to add to the left of the component body
   */
  paddingLeft: SpacingTokens;
  /**
   * The optional padding to add to the right of the component body
   */
  paddingRight: SpacingTokens;
  /**
   * Which brand color should be used as the background of this section?
   */
  bgColor: NeutralColor;
  /**
   * The image to apply to the background on hover
   */
  bgHoverImage: string;
  /**
   * The vimeo video to show
   */
  bgVimeoVideo: string;
  /**
   * Whether to allow autoplay
   */
  autoplay: boolean;
  /**
   * Whether to show controls on video
   */
  controls: boolean;
  /**
   * Whether to display a drop shadow on the component
   */
  displayDropShadow: boolean;
  /**
   * Whether to display a border around the component
   */
  displayBorder: boolean;
  /**
   * Which brand color should be used as the border of this section?
   */
  borderColor: Color;
  /**
   * what should be initial levels for video on first load
   */
  initialVolume: number;
  /**
   * Options for rendering a CTA Link button at the bottom
   */
  cta: CTAProps | string;
  ctaData: CTAProps;
  componentWillLoad(): void;
  parseCtaData(newValue: CTAProps | string): void;
  /**
   * Add temporary support for automatic responsive padding on the Canvas.
   */
  isMobile: boolean;
  private resizeTimer;
  private onWindowResize;
  private videoLoaded;
  private onWindow;
  componentDidLoad(): void;
  private makeHorizontalPaddingResponsive;
  private makeVerticalPaddingResponsive;
  render(): any;
}
