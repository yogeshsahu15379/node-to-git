import { newSpecPage } from '@stencil/core/testing'
import { AesButton } from '../aes-button'

describe('aes-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesButton],
      html: `<aes-button></aes-button>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-button>
    `)
  })
})
