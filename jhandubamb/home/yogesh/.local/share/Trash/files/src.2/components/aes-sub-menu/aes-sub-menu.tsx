import { Component, h, Host, Prop } from '@stencil/core'

/**
 * The Sub Menu.
 * @element aes-sub-menu
 */
@Component({
  tag: 'aes-sub-menu',
  styleUrl: 'aes-sub-menu.css',
  shadow: true,
})
export class AesSubMenu {
  /**
   * for sub menu titles and links
   */
  @Prop() subMenu = [
    {
      url: '/hello',
      title: 'Link1',
      external: false,
      colorvariation: 'blue',
    },
    {
      url: '#',
      title: 'Link1',
      external: false,
      colorvariation: 'blue',
    },
    {
      url: '#',
      title: 'Link3',
      external: false,
      colorvariation: 'blue',
    },
    {
      url: '#',
      title: 'link4',
      external: false,
      colorvariation: 'blue',
    },
    {
      url: '#',
      external: false,
    },
  ]
  render() {
    return (
      <Host>
        <slot name="subMenuContent"></slot>
      </Host>
    )
  }
}
