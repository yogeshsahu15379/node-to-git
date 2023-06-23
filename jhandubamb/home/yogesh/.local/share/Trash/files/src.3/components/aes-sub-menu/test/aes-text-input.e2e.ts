import { newE2EPage } from '@stencil/core/testing'

describe('aes-sub-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-sub-menu></aes-sub-menu>')

    const element = await page.find('aes-sub-menu')
    expect(element).toHaveClass('hydrated')
  })
})
