import { newSpecPage } from '@stencil/core/testing'
import { AesNewsCta } from '../aes-news-cta'

describe('aes-news-cta', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesNewsCta],
      html: `<aes-news-cta></aes-news-cta>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-news-cta>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-news-cta>
    `)
  })
})
