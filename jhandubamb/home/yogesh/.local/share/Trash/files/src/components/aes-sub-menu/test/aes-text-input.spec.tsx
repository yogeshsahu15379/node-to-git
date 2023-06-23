import { newSpecPage } from '@stencil/core/testing'
import { AesSubMenu } from '../aes-sub-menu'

describe('aes-sub-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesSubMenu],
      html: `<aes-sub-menu></aes-sub-menu>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-sub-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-sub-menu>
    `)
  })
})
