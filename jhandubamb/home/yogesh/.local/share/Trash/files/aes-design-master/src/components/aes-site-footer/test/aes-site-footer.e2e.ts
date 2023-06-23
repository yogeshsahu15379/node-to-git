import { newE2EPage } from '@stencil/core/testing'

describe('aes-site-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-site-footer></aes-site-footer>')

    const element = await page.find('aes-site-footer')
    expect(element).toHaveClass('hydrated')
  })
})
