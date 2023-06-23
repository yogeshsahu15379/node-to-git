import { Component, h, Prop } from '@stencil/core'

import { IconType } from '../../utils/enums'
import { LinkTarget } from '../../utils/types'

export type ButtonVariant = 'arrow-link' | 'none' | 'primary' | 'secondary'

/*
 * The AES Button component. Renders a button or an anchor element based on the props it receives.
 * @element aes-button
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-button',
  styleUrl: 'aes-button.css',
  shadow: true,
})
export class AesButton {
  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you want to render a button element.
   */
  @Prop() url: string

  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  @Prop() target: LinkTarget = '_self'

  /**
   * The button style variant to use.
   */
  @Prop({ reflect: true }) variant: ButtonVariant = 'primary'

  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url prop
   */
  @Prop() disabled: boolean

  /**
   * Whether to display a right arrow after the slot
   */
  @Prop() shouldDisplayArrow = false

  render() {
    const arrowImage = ['arrow-link', 'secondary'].includes(this.variant)
      ? IconType.ARROW_RIGHT_BLUE
      : IconType.ARROW_RIGHT_WHITE

    return this.url !== undefined ? (
      <a
        class={`btn ${this.variant}`}
        href={this.url}
        target={this.target}
        rel={this.target === '_blank' ? 'noreferrer  noopener' : ''}
      >
        <slot />
        {this.shouldDisplayArrow && (
          <aes-icon class="arrow" icon={arrowImage} />
        )}
      </a>
    ) : (
      <button class={`btn ${this.variant}`} disabled={this.disabled}>
        <slot />
        {this.shouldDisplayArrow && (
          <aes-icon class="arrow" icon={arrowImage} />
        )}
      </button>
    )
  }
}
