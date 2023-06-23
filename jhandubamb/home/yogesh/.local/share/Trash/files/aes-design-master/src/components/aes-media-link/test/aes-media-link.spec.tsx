import { newSpecPage } from '@stencil/core/testing'
import { AesMediaLink } from '../aes-media-link'

describe('aes-media-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesMediaLink],
      html: `<aes-media-link></aes-media-link>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-media-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-media-link>
    `)
  })
})
