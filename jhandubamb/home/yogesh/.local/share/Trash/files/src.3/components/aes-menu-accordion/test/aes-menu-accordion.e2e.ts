import { newE2EPage } from '@stencil/core/testing'

describe('aes-menu-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-menu-accordion></aes-menu-accordion>')

    const element = await page.find('aes-menu-accordion')
    expect(element).toHaveClass('hydrated')
  })
})
