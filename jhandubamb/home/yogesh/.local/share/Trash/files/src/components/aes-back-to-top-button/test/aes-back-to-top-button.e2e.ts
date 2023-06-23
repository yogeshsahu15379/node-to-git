import { newE2EPage } from '@stencil/core/testing'

describe('aes-back-to-top-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-back-to-top-button></aes-back-to-top-button>')

    const element = await page.find('aes-back-to-top-button')
    expect(element).toHaveClass('hydrated')
  })
})
