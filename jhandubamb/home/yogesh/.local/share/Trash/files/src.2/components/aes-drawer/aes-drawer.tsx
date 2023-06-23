import { Component, h, Host, Listen, State } from '@stencil/core'

import { IconType } from '../../utils/enums'

/**
 * Trigger the opening a closing of a side-drawer. Handles both the trigger
 * element and the content of the drawer
 *
 * @element aes-drawer
 * @slot trigger - Anything placed in here becomes a button that opens drawer content
 * @slot content - The markup to show in the fly-out drawer. Can be anything.
 */
@Component({
  tag: 'aes-drawer',
  styleUrl: 'aes-drawer.css',
  shadow: true,
})
export class AesDrawer {
  @State() open = false

  @Listen('aes-drawer:show')
  private show() {
    // Close all other drawers that may be open
    document
      .querySelectorAll('aes-drawer')
      .forEach(drawer => drawer.dispatchEvent(new Event('aes-drawer:hide')))
    // Now just open this drawer
    this.open = true
  }

  @Listen('aes-drawer:hide')
  private hide() {
    this.open = false
  }

  @Listen('keydown', { target: 'document' })
  private keyListener(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.hide()
    }
  }

  private toggleOpen = () => (this.open ? this.hide() : this.show())

  render() {
    return (
      <Host aria-expanded={this.open ? 'true' : 'false'}>
        <button
          class="trigger"
          role="button"
          onClick={this.toggleOpen}
          aria-haspopup="true"
          tabindex="0"
        >
          <slot name="trigger">
            <span class="hidden">trigger</span>
          </slot>
        </button>
        <aside role="complementary" class={{ drawer: true, show: this.open }}>
          <div class="drawer__top">
            <button
              class="drawer__close"
              onClick={this.toggleOpen}
              aria-label="Close"
            >
              <aes-icon
                class="drawer__close-icon"
                icon={IconType.CLOSE}
              ></aes-icon>
            </button>
          </div>

          <div class="drawer__content">
            <slot name="content"></slot>
          </div>
        </aside>
      </Host>
    )
  }
}
