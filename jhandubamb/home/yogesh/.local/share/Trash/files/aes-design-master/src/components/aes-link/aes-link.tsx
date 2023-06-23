import { Component, h, Prop } from '@stencil/core'

import { LinkTarget } from '../../utils/types'

/**
 * The AES Link component
 * @element aes-link
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-link',
  styleUrl: 'aes-link.css',
  shadow: true,
})
export class AESLink {
  /**
   * The <a> href attribute
   */
  @Prop() href: string
  /**
   * The <a> rel attribute
   */
  @Prop() rel: string
  /**
   * The <a> target attribute
   */
  @Prop() target: LinkTarget = '_self'

  render() {
    return (
      <a
        aria-label={this.href}
        href={this.href}
        target={this.target}
        rel={this.target === '_blank' ? 'noreferrer  noopener' : this.rel}
      >
        <slot />
      </a>
    )
  }
}
