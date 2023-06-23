import { newSpecPage } from '@stencil/core/testing'
import { AesMenuLink } from '../aes-menu-link'

describe('aes-menu-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesMenuLink],
      html: `<aes-menu-link></aes-menu-link>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-menu-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-menu-link>
    `)
  })
})
