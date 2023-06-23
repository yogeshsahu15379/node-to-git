import { newSpecPage } from '@stencil/core/testing'
import { AesMenuDropdownContent } from '../aes-menu-dropdown-content'

describe('aes-menu-dropdown-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesMenuDropdownContent],
      html: `<aes-menu-dropdown-content></aes-menu-dropdown-content>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-menu-dropdown-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-menu-dropdown-content>
    `)
  })
})
