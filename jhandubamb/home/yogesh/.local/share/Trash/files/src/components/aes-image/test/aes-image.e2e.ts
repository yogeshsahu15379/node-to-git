import { newE2EPage } from '@stencil/core/testing'

describe('aes-image', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-image></aes-image>')

    const element = await page.find('aes-image')
    expect(element).toHaveClass('hydrated')
  })
})
