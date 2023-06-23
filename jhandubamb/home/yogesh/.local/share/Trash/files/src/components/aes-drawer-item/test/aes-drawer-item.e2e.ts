import { newE2EPage } from '@stencil/core/testing'

describe('aes-drawer-item', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-drawer-item></aes-drawer-item>')

    const element = await page.find('aes-drawer-item')
    expect(element).toHaveClass('hydrated')
  })
})
