import { newSpecPage } from '@stencil/core/testing'
import { AesMenuAccordion } from '../aes-menu-accordion'

describe('aes-menu-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesMenuAccordion],
      html: `<aes-menu-accordion></aes-menu-accordion>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-menu-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-menu-accordion>
    `)
  })
})
