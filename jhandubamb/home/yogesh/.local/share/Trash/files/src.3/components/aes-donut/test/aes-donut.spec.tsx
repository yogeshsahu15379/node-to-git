import { newSpecPage } from '@stencil/core/testing'
import { AesDonut } from '../aes-donut'

describe('aes-donut', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesDonut],
      html: `<aes-donut></aes-donut>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-donut>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-donut>
    `)
  })
})
