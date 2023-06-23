import { newSpecPage } from '@stencil/core/testing'
import { AesMediaLinkContainer } from '../aes-media-link-container'

describe('aes-media-link-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesMediaLinkContainer],
      html: `<aes-media-link-container></aes-media-link-container>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-media-link-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-media-link-container>
    `)
  })
})
