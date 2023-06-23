import { newSpecPage } from '@stencil/core/testing'
import { AesMenuButton } from '../aes-menu-button'

describe('aes-menu-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesMenuButton],
      html: `<aes-menu-button></aes-menu-button>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-menu-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-menu-button>
    `)
  })
})
