import { newE2EPage } from '@stencil/core/testing'

describe('aes-menu-link', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-menu-link></aes-menu-link>')

    const element = await page.find('aes-menu-link')
    expect(element).toHaveClass('hydrated')
  })
})
