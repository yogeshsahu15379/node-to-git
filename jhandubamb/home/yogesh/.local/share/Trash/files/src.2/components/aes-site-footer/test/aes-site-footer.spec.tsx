import { newSpecPage } from '@stencil/core/testing'
import { AesSiteFooter } from '../aes-site-footer'

describe('aes-site-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesSiteFooter],
      html: `<aes-site-footer></aes-site-footer>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-site-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-site-footer>
    `)
  })
})
