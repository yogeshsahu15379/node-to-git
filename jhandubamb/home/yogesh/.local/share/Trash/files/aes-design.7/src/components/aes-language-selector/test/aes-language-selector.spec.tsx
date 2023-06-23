import { newSpecPage } from '@stencil/core/testing'
import { AesLanguageSelector } from '../aes-language-selector'

describe('aes-language-selector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesLanguageSelector],
      html: `<aes-language-selector></aes-language-selector>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-language-selector>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-language-selector>
    `)
  })
})
