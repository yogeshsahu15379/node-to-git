export declare type AllowedHeadingLevels = 1 | 2 | 3 | 4;
/**
 * The Heading component.
 * @element aes-heading
 * @slot defaultSlot
 */
export declare class AESHeading {
  /**
   * The heading tag to apply: 1 | 2 | 3 | 4
   */
  level: AllowedHeadingLevels;
  /**
   * The heading level style to apply. Optional override to default styles for a given level
   */
  levelStyle: AllowedHeadingLevels;
  /**
   * The smaller, decorative subheading style
   */
  sub: boolean;
  render(): any;
}
