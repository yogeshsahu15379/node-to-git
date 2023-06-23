import { Component, Host, h, Prop } from '@stencil/core'
import { IconType } from '../../utils/enums'

@Component({
  tag: 'aes-drawer-item',
  styleUrl: 'aes-drawer-item.css',
  shadow: true,
})
export class AesDrawerItem {
  /**
   * Choose which predefined icon to add to the link
   */
  @Prop() icon: IconType

  render() {
    return (
      <Host>
        <aes-button variant="none">
          {this.icon && <aes-icon class="icon-custom" icon={this.icon} />}
          <span class="button-text">
            <slot />
          </span>
        </aes-button>
        <aes-icon class="icon-chevron" icon={IconType.CHEVRON_RIGHT} />
      </Host>
    )
  }
}
