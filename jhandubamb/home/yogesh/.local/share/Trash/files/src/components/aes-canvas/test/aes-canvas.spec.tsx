import { newSpecPage } from '@stencil/core/testing'
import { AesCanvas } from '../aes-canvas'

describe('aes-canvas', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesCanvas],
      html: `<aes-canvas></aes-canvas>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-canvas>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-canvas>
    `)
  })
})
