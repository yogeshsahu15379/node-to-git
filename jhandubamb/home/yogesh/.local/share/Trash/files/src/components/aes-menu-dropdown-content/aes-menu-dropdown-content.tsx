import { Component, Host, h, State, Element } from '@stencil/core'

@Component({
  tag: 'aes-menu-dropdown-content',
  styleUrl: 'aes-menu-dropdown-content.css',
  shadow: true,
})
export class AesMenuDropdownContent {
  @Element() hostElement: HTMLAesMenuDropdownContentElement

  @State() hasRightSlot: boolean

  componentWillLoad() {
    this.hasRightSlot =
      this.hostElement.querySelector('[slot="right"]') !== null
  }

  render() {
    return (
      <Host>
        <div class="left">
          <slot name="left" />
        </div>
        {this.hasRightSlot && (
          <div class="right">
            <slot name="right" />
          </div>
        )}
      </Host>
    )
  }
}
