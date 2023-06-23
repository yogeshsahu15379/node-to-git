import { Component, Host, Prop, h } from '@stencil/core'

/**
 * The Hero component
 * @element aes-hero
 * @slot multimedia - The multimedia slot; expects either an `<img>` tag or a responsive `<picture>` element.
 * @slot title - The title slot; the text that should be shown in the header.
 */
@Component({
  tag: 'aes-hero',
  styleUrl: 'aes-hero.css',
  shadow: true,
})
export class AESHero {
  /**
   * Should the dark overlay sit over top of the bg image
   */
  @Prop() overlay = true

  render() {
    return (
      <Host>
        <slot name="multimedia" />
        <aes-grid class={{ overlay: this.overlay }}>
          <aes-column content-align="middle" col-span-default="10">
            <slot name="title" />
          </aes-column>
        </aes-grid>
      </Host>
    )
  }
}
