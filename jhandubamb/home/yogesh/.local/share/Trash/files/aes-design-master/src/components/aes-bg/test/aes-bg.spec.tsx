import { newSpecPage } from '@stencil/core/testing'
import { AesBg } from '../aes-bg'

describe('aes-bg', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesBg],
      html: `<aes-bg></aes-bg>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-bg>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-bg>
    `)
  })
})
