import { Component, Host, Prop, h } from '@stencil/core'

import { SpacingTokens } from '../../utils/types'

/**
 * A wrapper component that provides padding to any axis (t,r,b,l)
 *
 * @element aes-spacer
 * @slot default - Wrapped content that needs some padding on an axis.
 */
@Component({
  tag: 'aes-spacer',
  styleUrl: 'aes-spacer.css',
  shadow: true,
})
export class AesSpacer {
  /**
   * Top spacing from Tailwind config
   */
  @Prop({ reflect: true }) t: SpacingTokens = '0'
  /**
   * Right spacing from Tailwind config
   */
  @Prop({ reflect: true }) r: SpacingTokens = '0'

  /**
   * Bottom spacing from Tailwind config
   */
  @Prop({ reflect: true }) b: SpacingTokens = '0'
  /**
   * Left spacing from Tailwind config
   */
  @Prop({ reflect: true }) l: SpacingTokens = '0'

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
