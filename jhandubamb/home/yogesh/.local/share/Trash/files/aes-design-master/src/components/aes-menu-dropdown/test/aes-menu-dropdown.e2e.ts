import { newE2EPage } from '@stencil/core/testing'

describe('aes-menu-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-menu-dropdown></aes-menu-dropdown>')

    const element = await page.find('aes-menu-dropdown')
    expect(element).toHaveClass('hydrated')
  })
})
