import { newSpecPage } from '@stencil/core/testing'
import { AesParagraph } from '../aes-paragraph'

describe('aes-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesParagraph],
      html: `<aes-paragraph></aes-paragraph>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-paragraph>
    `)
  })
})
