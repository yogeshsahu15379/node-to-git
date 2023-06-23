import { newE2EPage } from '@stencil/core/testing'

describe('aes-menu-dropdown-content', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<aes-menu-dropdown-content></aes-menu-dropdown-content>',
    )

    const element = await page.find('aes-menu-dropdown-content')
    expect(element).toHaveClass('hydrated')
  })
})
