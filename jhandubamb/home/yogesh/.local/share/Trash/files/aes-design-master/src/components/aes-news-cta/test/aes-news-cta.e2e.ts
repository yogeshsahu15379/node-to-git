import { newE2EPage } from '@stencil/core/testing'

describe('aes-news-cta', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-news-cta></aes-news-cta>')

    const element = await page.find('aes-news-cta')
    expect(element).toHaveClass('hydrated')
  })
})
