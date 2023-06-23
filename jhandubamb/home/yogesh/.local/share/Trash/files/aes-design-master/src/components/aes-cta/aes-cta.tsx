import { Component, Prop, State, Watch, Host, h } from '@stencil/core'

import { LinkType } from '../../utils/types'

export type CTALink = string | LinkType

/**
 * The AES CTA component s
 * @element aes-cta
 * @slot header - The header slot expects a heading element to render on the left side of the CTA.
 * @slot multimedia - The multimedia slot expects an image element to render on the right side of the CTA. The consuming component is responsible for the responsiveness of the image.
 */
@Component({
  tag: 'aes-cta',
  styleUrl: 'aes-cta.css',
  shadow: true,
})
export class AESCta {
  /**
   * The link url and text
   */
  @Prop() link: CTALink
  /**
   * Append a right arrow to the link text
   */
  @Prop() displayLinkArrow = true
  @State() linkData: LinkType

  componentWillLoad() {
    this.parseLinkData(this.link)
  }

  @Watch('link')
  parseLinkData(newValue: CTALink) {
    if (typeof newValue === 'string') {
      this.linkData = JSON.parse(newValue)
      return
    }

    this.linkData = newValue
  }

  render() {
    return (
      <Host>
        <div class="heading-image-container">
          <slot name="header" />
          <slot name="multimedia" />
        </div>
        <aes-line />
        {this.linkData && (
          <aes-link href={this.linkData.url} target={this.linkData.target}>
            {`${this.linkData.text}${this.displayLinkArrow ? ' \u2192' : ''}`}
          </aes-link>
        )}
      </Host>
    )
  }
}
