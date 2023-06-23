import { newSpecPage } from '@stencil/core/testing'
import { AesSiteHeader } from '../aes-site-header'

describe('aes-site-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesSiteHeader],
      html: `<aes-site-header></aes-site-header>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-site-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-site-header>
    `)
  })
})
