import { Component, Host, h, Prop } from '@stencil/core'
import { IconType } from '../../utils/enums'

/**
 * The Submenu Title element. Important note: This is hidden on mobile.
 * @element aes-submenu-title
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-submenu-title',
  styleUrl: 'aes-submenu-title.css',
  shadow: true,
})
export class AesSubmenuTitle {
  /**
   * The icon to display next to the text.
   */
  @Prop() icon: IconType

  render() {
    return (
      <Host>
        <aes-icon icon={this.icon} />
        <aes-heading sub={true} level={3}>
          <slot />
        </aes-heading>
      </Host>
    )
  }
}
