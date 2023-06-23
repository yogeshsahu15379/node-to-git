import { Component, Prop, h } from '@stencil/core'

import { IconType } from '../../utils/enums'

/**
 * The AES Accordion element for high levels of editorial control
 * @element aes-accordion
 * @slot summary - The slot to render the accordion summary or title.
 * @slot content - The primary slot to render the accordion contents.
 */
@Component({
  tag: 'aes-accordion',
  styleUrl: 'aes-accordion.css',
  shadow: true,
})
export class AesAccordion {
  /**
   * Whether to display the accordion in open or close state
   */
  @Prop() isOpen = false

  render() {
    return (
      <details class="accordion" open={this.isOpen}>
        <summary class="summary">
          <slot name="summary" />
          <aes-icon class="toggle toggle-open" icon={IconType.CHEVRON_DOWN} />
          <aes-icon class="toggle toggle-close" icon={IconType.CHEVRON_UP} />
        </summary>
        <div class="content">
          <slot name="content" />
        </div>
      </details>
    )
  }
}
