import { newE2EPage } from '@stencil/core/testing'

describe('aes-submenu-title', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-submenu-title></aes-submenu-title>')

    const element = await page.find('aes-submenu-title')
    expect(element).toHaveClass('hydrated')
  })
})
