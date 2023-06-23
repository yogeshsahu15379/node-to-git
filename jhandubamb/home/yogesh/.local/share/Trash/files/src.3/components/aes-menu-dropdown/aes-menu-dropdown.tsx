import { Component, Host, State, Listen, h } from '@stencil/core'

import tailwindThemeConfig from '../../resolved-tailwind-config'
import { IconType } from '../../utils/enums'

@Component({
  tag: 'aes-menu-dropdown',
  styleUrl: 'aes-menu-dropdown.css',
  shadow: true,
})
export class AesMenuDropdown {
  @State() open = false
  @State() isDevice = true

  private resizeTimer = null

  componentDidLoad() {
    this.onWindow()
  }

  @Listen('resize', { target: 'window' })
  private onWindowResize() {
    this.onWindow()
  }

  private onWindow() {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      const docWidth = document.documentElement.clientWidth
      const breakpoint = parseInt(
        tailwindThemeConfig.screens.lg.replace('px', ''),
      )
      this.isDevice = docWidth < breakpoint
      this.open = false
    }, 200)
  }

  // Enable menu showing on hover for desktop only.
  @Listen('mouseenter')
  private show() {
    if (!this.isDevice) {
      this.open = true
    }
  }

  // Enable menu hiding on blur for desktop only.
  @Listen('mouseleave')
  private hide() {
    if (!this.isDevice) {
      this.open = false
    }
  }

  // Enable menu showing/hiding on click for mobile only.
  @Listen('click', { capture: true })
  private click() {
    if (this.isDevice) {
      this.open = !this.open
    }
  }

  render() {
    return (
      <Host>
        <div class="trigger">
          <slot name="menu-item-trigger"></slot>
          <aes-icon
            class={{ 'mobile-caret': true, 'caret-open': this.open }}
            icon={this.open ? IconType.CHEVRON_DOWN : IconType.CHEVRON_RIGHT}
          ></aes-icon>
        </div>
        <div
          class={{
            'content-buffer': true,
            'show': this.open,
          }}
        >
          <div class="content">
            <slot name="menu-item-content"></slot>
          </div>
        </div>
      </Host>
    )
  }
}
