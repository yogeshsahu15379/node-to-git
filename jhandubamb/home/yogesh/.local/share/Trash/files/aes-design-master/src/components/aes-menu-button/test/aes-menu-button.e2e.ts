import { newE2EPage } from '@stencil/core/testing'

describe('aes-menu-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-menu-button></aes-menu-button>')

    const element = await page.find('aes-menu-button')
    expect(element).toHaveClass('hydrated')
  })
})
