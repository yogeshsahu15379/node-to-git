import { newSpecPage } from '@stencil/core/testing'
import { AesSlider } from '../aes-slider'

describe('aes-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesSlider],
      html: `<aes-slider></aes-slider>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-slider>
    `)
  })
})
