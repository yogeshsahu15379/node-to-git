import { Component, Host, h, Prop } from '@stencil/core'
import { Size } from '../../utils/types'

/**
 * The section component. This expands to the full width of whatever you place it in, but can be told to provide a container inside.
 *
 * @element aes-section
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-section',
  styleUrl: 'aes-section.css',
  shadow: true,
})
export class AesSection {
  /**
   * The background color (chosen from a given set of brand colors) of the section.
   */
  @Prop() verticalPadding: Size = 'small'

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
