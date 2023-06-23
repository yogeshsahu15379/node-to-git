import { newE2EPage } from '@stencil/core/testing'

describe('aes-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-button></aes-button>')

    const element = await page.find('aes-button')
    expect(element).toHaveClass('hydrated')
  })
})
