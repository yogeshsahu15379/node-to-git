import { newE2EPage } from '@stencil/core/testing'

describe('aes-donut', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-donut></aes-donut>')

    const element = await page.find('aes-donut')
    expect(element).toHaveClass('hydrated')
  })
})
