import { newE2EPage } from '@stencil/core/testing'

describe('aes-column', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-column></aes-column>')

    const element = await page.find('aes-column')
    expect(element).toHaveClass('hydrated')
  })
})
