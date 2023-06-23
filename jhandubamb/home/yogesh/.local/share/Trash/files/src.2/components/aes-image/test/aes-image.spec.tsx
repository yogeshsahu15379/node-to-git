import { newSpecPage } from '@stencil/core/testing'
import { AesImage } from '../aes-image'

describe('aes-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesImage],
      html: `<aes-image></aes-image>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-image>
    `)
  })
})
