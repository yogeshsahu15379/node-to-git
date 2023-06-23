import { Component, Host, h, Prop } from '@stencil/core'

import { LinkTarget } from '../../utils/types'
import { IconType } from '../../utils/enums'

/**
 * The AES Media Link component
 * @element aes-media-link
 * @slot default - The slot to render as the component link text.
 */
@Component({
  tag: 'aes-media-link',
  styleUrl: 'aes-media-link.css',
  shadow: true,
})
export class AesMediaLink {
  /**
   * Whether to show the document icon
   */
  @Prop({ reflect: true }) shouldDisplayIcon = true

  /**
   * The icon to show next to the link.
   */
  @Prop() icon: IconType = IconType.DOCUMENT_DEFAULT

  /**
   * The url to use for the link. This will render an anchor element.
   */
  @Prop() url: string

  /**
   * The target to use for the link, used in conjunction with the url.
   * Always open in a new tab because this should always link to a document.
   */
  @Prop() target: LinkTarget = '_blank'

  render() {
    return (
      <Host>
        {this.shouldDisplayIcon && (
          <aes-icon class="media-link-icon" icon={this.icon} />
        )}

        <aes-button
          url={this.url}
          variant="arrow-link"
          should-display-arrow={true}
          target={this.target}
        >
          <slot />
        </aes-button>
      </Host>
    )
  }
}
