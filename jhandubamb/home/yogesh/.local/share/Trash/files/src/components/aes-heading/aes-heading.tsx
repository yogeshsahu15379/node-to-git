import { Component, Prop, h } from '@stencil/core'

export type AllowedHeadingLevels = 1 | 2 | 3 | 4

/**
 * The Heading component.
 * @element aes-heading
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-heading',
  styleUrl: 'aes-heading.css',
  shadow: true,
})
export class AESHeading {
  /**
   * The heading tag to apply: 1 | 2 | 3 | 4
   */
  @Prop() level: AllowedHeadingLevels = 2
  /**
   * The heading level style to apply. Optional override to default styles for a given level
   */
  @Prop() levelStyle: AllowedHeadingLevels = this.level
  /**
   * The smaller, decorative subheading style
   */
  @Prop() sub = false

  render() {
    // classNames object for dynamic classes
    const headingClasses = {
      heading: !this.sub,
      [`heading-${this.levelStyle}`]: !this.sub,
      // Warning: there is no style for subheadline-4!
      subheadline: this.sub,
      [`subheadline-${this.levelStyle}`]: this.sub,
    }

    switch (this.level) {
      case 1:
        return (
          <h1 class={headingClasses}>
            <slot />
          </h1>
        )
      case 2:
        return (
          <h2 class={headingClasses}>
            <slot />
          </h2>
        )
      case 3:
        return (
          <h3 class={headingClasses}>
            <slot />
          </h3>
        )
      case 4:
        return (
          <h4 class={headingClasses}>
            <slot />
          </h4>
        )
    }
  }
}
