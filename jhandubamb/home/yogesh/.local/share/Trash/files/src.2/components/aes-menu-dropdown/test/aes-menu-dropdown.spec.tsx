import { newSpecPage } from '@stencil/core/testing'
import { AesMenuDropdown } from '../aes-menu-dropdown'

describe('aes-menu-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesMenuDropdown],
      html: `<aes-menu-dropdown></aes-menu-dropdown>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-menu-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-menu-dropdown>
    `)
  })
})
