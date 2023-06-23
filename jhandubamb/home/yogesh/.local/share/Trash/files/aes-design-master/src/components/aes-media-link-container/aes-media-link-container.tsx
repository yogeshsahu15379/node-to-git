import { Component, Host, Prop, h } from '@stencil/core'

import { NeutralColor } from '../../utils/types'

/**
 * The AES Media Link Container component
 * @element aes-media-link-container
 * @slot media-links - The media link slot. Contains a links to resource documents.
 * @slot title - The title slot; the text displayed in the left column of container.
 */
@Component({
  tag: 'aes-media-link-container',
  styleUrl: 'aes-media-link-container.css',
  shadow: true,
})
export class AesMediaLinkContainer {
  /**
   * Which brand color should be used as the background of this container?
   */
  @Prop() bgColor: NeutralColor = 'neutrals-gray1'

  render() {
    return (
      <Host>
        <aes-bg color={this.bgColor}>
          <aes-grid gapSize="small">
            <aes-column
              class="title"
              content-align="top"
              col-span-default="12"
              col-span-md="5"
            >
              <slot name="title" />
            </aes-column>
            <aes-column
              class="links"
              content-align="middle"
              col-span-default="12"
              col-span-md="5"
            >
              <slot name="media-links" />
            </aes-column>
          </aes-grid>
        </aes-bg>
      </Host>
    )
  }
}
