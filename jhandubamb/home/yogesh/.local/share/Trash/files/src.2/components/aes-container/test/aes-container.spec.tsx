import { newSpecPage } from '@stencil/core/testing'
import { AESContainer } from '../aes-container'

describe('aes-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AESContainer],
      html: `<aes-container></aes-container>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-container>
    `)
  })
})
