import { newSpecPage } from '@stencil/core/testing'
import { AesAccordion } from '../aes-accordion'

describe('aes-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesAccordion],
      html: `<aes-accordion></aes-accordion>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-accordion>
    `)
  })
})
