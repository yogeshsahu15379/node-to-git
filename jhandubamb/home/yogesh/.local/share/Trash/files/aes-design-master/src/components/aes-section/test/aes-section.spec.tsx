import { newSpecPage } from '@stencil/core/testing'
import { AesSection } from '../aes-section'

describe('aes-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesSection],
      html: `<aes-section></aes-section>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-section>
    `)
  })
})
