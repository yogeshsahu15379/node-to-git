import { newE2EPage } from '@stencil/core/testing'

describe('aes-hero-slide', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-hero-slide></aes-hero-slide>')

    const element = await page.find('aes-hero-slide')
    expect(element).toHaveClass('hydrated')
  })
})
