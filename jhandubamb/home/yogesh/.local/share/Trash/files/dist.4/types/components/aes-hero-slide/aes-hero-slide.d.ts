export declare type CTAProps = {
  text: string;
  url: string;
};
/**
 * A slide object in the hero slider.
 * @element aes-hero-slide
 */
export declare class AesHeroSlide {
  /**
   * Text that appears above the headline
   */
  eyebrow: string;
  /**
   * The main headline
   */
  headline: string;
  /**
   * Link and text for button
   */
  cta: CTAProps | string;
  ctaData: CTAProps;
  componentWillLoad(): void;
  parseCtaData(newValue: CTAProps | string): void;
  render(): any;
}
