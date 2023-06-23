import { newSpecPage } from '@stencil/core/testing'
import { AesBackToTopButton } from '../aes-back-to-top-button'

describe('aes-back-to-top-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesBackToTopButton],
      html: `<aes-back-to-top-button></aes-back-to-top-button>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-back-to-top-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-back-to-top-button>
    `)
  })
})
