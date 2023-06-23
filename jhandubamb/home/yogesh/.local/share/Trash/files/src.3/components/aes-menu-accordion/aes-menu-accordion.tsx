import {
  Component,
  Prop,
  h,
  Listen,
  State,
  Watch,
  Fragment,
  Element,
} from '@stencil/core'

import tailwindThemeConfig from '../../resolved-tailwind-config'
import { IconType } from '../../utils/enums'

export type AccordionType = 'primary' | 'secondary'

/**
 * The AES Accordion element for high levels of editorial control
 * @element aes-menu-accordion
 * @slot summary - The slot to render the accordion summary or title.
 * @slot content - The primary slot to render the accordion contents.
 */
@Component({
  tag: 'aes-menu-accordion',
  styleUrl: 'aes-menu-accordion.css',
  shadow: true,
})
export class AesMenuAccordion {
  @Element() el: HTMLAesMenuAccordionElement

  /**
   * Whether to display the accordion in open or close state
   */
  @Prop() isOpen = false

  /**
   * The variant of the accordion.
   */
  @Prop({ reflect: true }) variant: AccordionType = 'primary'

  @State() isCollapsible = true

  @State() hasChildren = true

  private resizeTimer = null

  componentDidLoad() {
    this.onWindow()
    if (this.variant === 'primary') {
      this.isOpen = true
    }
    if (!this.el.querySelector(`[slot='menu']`)) {
      this.hasChildren = false
      console.log(this.hasChildren)
    }
  }

  @Listen('resize', { target: 'window' })
  private onWindowResize() {
    if (this.hasChildren) {
      this.onWindow()
    }
  }

  private onWindow() {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      const docWidth = document.documentElement.clientWidth
      const breakpoint = parseInt(
        tailwindThemeConfig.screens.md.replace('px', ''),
      )
      this.isCollapsible = docWidth < breakpoint
    }, 200)
  }

  @Watch('isCollapsible')
  private setOpen() {
    this.isOpen = !this.isCollapsible
  }

  render() {
    const content = (
      <ul class="menu">
        <slot name="menu" />
      </ul>
    )

    return this.isCollapsible && this.hasChildren ? (
      <details class="accordion" open={this.isOpen}>
        <summary class="summary">
          <slot name="summary" />
          {this.isCollapsible && (
            <Fragment>
              <aes-icon
                class="toggle toggle-open"
                icon={IconType.CHEVRON_DOWN}
              />
              <aes-icon
                class="toggle toggle-close"
                icon={IconType.CHEVRON_UP}
              />
            </Fragment>
          )}
        </summary>
        {content}
      </details>
    ) : (
      <div class="accordion">
        <div class="summary">
          <slot name="summary" />
        </div>
        {this.hasChildren && content}
      </div>
    )
  }
}
