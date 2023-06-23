import { Component, Host, h, Prop } from '@stencil/core'

/**
 * The page container component.
 *
 * @element aes-container
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-container',
  styleUrl: 'aes-container.css',
  shadow: true,
})
export class AESContainer {
  /**
   * Whether or not this is a nested container. If it's nested, remove padding.
   */
  @Prop() isNested = false

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
