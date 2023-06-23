import { newSpecPage } from '@stencil/core/testing'
import { AesDrawerItem } from '../aes-drawer-item'

describe('aes-drawer-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesDrawerItem],
      html: `<aes-drawer-item></aes-drawer-item>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-drawer-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-drawer-item>
    `)
  })
})
