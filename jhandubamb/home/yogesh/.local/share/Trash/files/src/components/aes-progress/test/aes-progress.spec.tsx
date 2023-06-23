import { newSpecPage } from '@stencil/core/testing'
import { AesProgress } from '../aes-progress'

describe('aes-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesProgress],
      html: `<aes-progress></aes-progress>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-progress>
    `)
  })
})
