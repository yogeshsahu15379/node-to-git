import { newSpecPage } from '@stencil/core/testing'
import { AesColumn } from '../aes-column'

describe('aes-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesColumn],
      html: `<aes-column></aes-column>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-column>
    `)
  })
})
