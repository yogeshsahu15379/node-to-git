import { Component, Host, Prop, h } from '@stencil/core'

/**
 * The AES News CTA component
 * @element aes-news-cta
 * @slot contentTop - The contentTop slot expects content to render above the horizontal rul
 * @slot contentBottom - The contentBottom slot expects content to render above the horizontal rul
 */
@Component({
  tag: 'aes-news-cta',
  styleUrl: 'aes-news-cta.css',
  shadow: true,
})
export class AesNewsCta {
  /**
   * The type of news release. 'press' or 'external'
   */
  @Prop() newsType: 'press' | 'external' = 'press'

  render() {
    return (
      <Host>
        <aes-card>
          <slot name="multimedia" slot="multimedia" />
          <div slot="content">
            <slot name="contentTop" />
            <hr />
            <slot name="contentBottom" />
          </div>
        </aes-card>
      </Host>
    )
  }
}
