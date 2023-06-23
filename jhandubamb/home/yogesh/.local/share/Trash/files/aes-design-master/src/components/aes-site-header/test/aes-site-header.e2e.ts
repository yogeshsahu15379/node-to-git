import { newE2EPage } from '@stencil/core/testing'

describe('aes-site-header', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-site-header></aes-site-header>')

    const element = await page.find('aes-site-header')
    expect(element).toHaveClass('hydrated')
  })
})
