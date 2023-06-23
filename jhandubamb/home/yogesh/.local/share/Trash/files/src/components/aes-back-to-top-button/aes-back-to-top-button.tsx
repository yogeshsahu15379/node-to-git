import { Component, Host, h, Listen } from '@stencil/core'
import { IconType } from '../../utils/enums'

/**
 * The button that brings the user back to the top of the page when they click it.
 * @element aes-back-to-top-button
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-back-to-top-button',
  styleUrl: 'aes-back-to-top-button.css',
  shadow: true,
})
export class AesBackToTopButton {
  @Listen('click', { capture: true })
  private(e: MouseEvent) {
    e.preventDefault()
    scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <Host>
        <aes-icon icon={IconType.ARROW_UP} />
        <slot />
      </Host>
    )
  }
}
