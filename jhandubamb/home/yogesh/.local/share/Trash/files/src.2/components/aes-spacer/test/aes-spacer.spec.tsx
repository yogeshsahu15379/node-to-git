import { newSpecPage } from '@stencil/core/testing'
import { AesSpacer } from '../aes-spacer'

describe('aes-spacer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesSpacer],
      html: `<aes-spacer></aes-spacer>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-spacer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-spacer>
    `)
  })
})
