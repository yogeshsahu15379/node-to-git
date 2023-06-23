import { newSpecPage } from '@stencil/core/testing'
import { AesDrawer } from '../aes-drawer'

describe('aes-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesDrawer],
      html: `<aes-drawer></aes-drawer>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-drawer>
    `)
  })
})
