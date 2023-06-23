import { Component, h, Prop } from '@stencil/core'
import { LinkTarget } from '../../utils/types'

/*
 * The AES Menu Link component. Renders an anchor for the menu.
 * @element aes-menu-link
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-menu-link',
  styleUrl: 'aes-menu-link.css',
  shadow: true,
})
export class AesMenuLink {
  /**
   * Whether or not the link is active.
   */
  @Prop({ reflect: true }) active: boolean

  /**
   * The link URL.
   */
  @Prop() url: string

  /**
   * The link target.
   */
  @Prop() target: LinkTarget = '_self'

  render() {
    return (
      <a
        href={this.url}
        target={this.target}
        aria-current={this.active}
        rel={this.target === '_blank' ? 'noreferrer  noopener' : ''}
      >
        <slot></slot>
      </a>
    )
  }
}
