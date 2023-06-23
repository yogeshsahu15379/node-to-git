import { Component, Host, Prop, h } from '@stencil/core'

import { NeutralColor } from '../../utils/types'

/**
 * A component to handle setting background colors for children in the shadow DOM
 * @element aes-bg
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-bg',
  styleUrl: 'aes-bg.css',
  shadow: true,
})
export class AesBg {
  /**
   * The neutral color to apply to the background
   */
  @Prop({ reflect: true }) color: NeutralColor

  /**
   * The image to apply to the background
   */
  @Prop({ reflect: true }) imageUrl = ''

  /**
   * The position of the image.
   */
  @Prop({ reflect: true }) imagePosition: 'top-right' | 'bottom'

  render() {
    return (
      <Host style={{ backgroundImage: `url('${this.imageUrl}')` }}>
        <slot />
      </Host>
    )
  }
}
