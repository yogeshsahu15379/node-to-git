import { Component, Host, h } from '@stencil/core'

/**
 * A simple paragraph.
 *
 * @element aes-paragraph
 * @slot default - Any text to wrap in a <p/> tag. Only really used within
 *   Storybook for right now.
 */
@Component({
  tag: 'aes-paragraph',
  styleUrl: 'aes-paragraph.css',
  shadow: true,
})
export class AesParagraph {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
