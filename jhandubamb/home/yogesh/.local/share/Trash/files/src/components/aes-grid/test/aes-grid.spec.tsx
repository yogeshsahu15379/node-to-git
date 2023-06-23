import { newSpecPage } from '@stencil/core/testing'
import { AesGrid } from '../aes-grid'

describe('aes-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesGrid],
      html: `<aes-grid></aes-grid>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-grid>
    `)
  })
})
