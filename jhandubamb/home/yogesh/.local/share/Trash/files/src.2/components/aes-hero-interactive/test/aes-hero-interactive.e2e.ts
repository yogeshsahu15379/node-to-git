import { newE2EPage } from '@stencil/core/testing'

describe('aes-hero-interactive', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-hero-interactive></aes-hero-interactive>')

    const element = await page.find('aes-hero-interactive')
    expect(element).toHaveClass('hydrated')
  })
})
