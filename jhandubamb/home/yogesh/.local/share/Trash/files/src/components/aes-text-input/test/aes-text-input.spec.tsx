import { newSpecPage } from '@stencil/core/testing'
import { AesTextInput } from '../aes-text-input'

describe('aes-text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesTextInput],
      html: `<aes-text-input></aes-text-input>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-text-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-text-input>
    `)
  })
})
