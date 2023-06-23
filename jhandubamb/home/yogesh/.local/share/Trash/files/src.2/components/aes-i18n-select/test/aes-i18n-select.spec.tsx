import { newSpecPage } from '@stencil/core/testing'
import { AesI18nSelect } from '../aes-i18n-select'

describe('aes-i18n-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesI18nSelect],
      html: `<aes-i18n-select></aes-i18n-select>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-i18n-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-i18n-select>
    `)
  })
})
