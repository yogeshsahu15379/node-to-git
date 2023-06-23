import { newSpecPage } from '@stencil/core/testing'
import { AesHeroInteractive } from '../aes-hero-interactive'

describe('aes-hero-interactive', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AesHeroInteractive],
      html: `<aes-hero-interactive></aes-hero-interactive>`,
    })
    expect(page.root).toEqualHtml(`
      <aes-hero-interactive>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aes-hero-interactive>
    `)
  })
})
