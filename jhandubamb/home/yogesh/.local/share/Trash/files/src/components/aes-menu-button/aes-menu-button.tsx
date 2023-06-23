import { Component, Prop, h } from '@stencil/core'
import { IconType } from '../../utils/enums'

/*
 * The AES Button component. Renders a button or an anchor element based on the props it receives.
 * @element aes-button
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-menu-button',
  styleUrl: 'aes-menu-button.css',
  shadow: true,
})
export class AesButton {
  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you are using the clickAction prop.
   */
  @Prop() url: string

  /**
   * The function to trigger when the user clicks the button.
   * Do not set this prop if you are using the url prop.
   */
  // @Prop() clickAction: (event: MouseEvent) => void

  /**
   * The name of the icon being used for the button.
   */
  @Prop() icon: IconType

  /**
   * Whether to display a right arrow after the slot
   */
  @Prop() shouldDisplayArrow = false

  render() {
    return (
      <aes-button variant="none">
        {this.icon && <aes-icon icon={this.icon} />}
        <span class="button-text">
          <slot />
        </span>
      </aes-button>
    )
  }
}
