import { newSpecPage } from '@stencil/core/testing'
import { AesCustomeLine } from '../aes-custome-line'

describe('aes-custome-line', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesCustomeLine],
      html: `<aes-custome-line></aes-custome-line>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-custome-line>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-custome-line>
    `)
  })
})
