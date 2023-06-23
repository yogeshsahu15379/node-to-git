import { newSpecPage } from '@stencil/core/testing'
import { AesHeroSlide } from '../aes-hero-slide'

describe('aes-hero-slide', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesHeroSlide],
      html: `<aes-hero-slide></aes-hero-slide>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-hero-slide>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-hero-slide>
    `)
  })
})
