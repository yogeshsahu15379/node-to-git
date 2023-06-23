import { newSpecPage } from '@stencil/core/testing'
import { AesSubmenuTitle } from '../aes-submenu-title'

describe('aes-submenu-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesSubmenuTitle],
      html: `<aes-submenu-title></aes-submenu-title>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-submenu-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-submenu-title>
    `)
  })
})
