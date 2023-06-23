import { newE2EPage } from '@stencil/core/testing'

describe('aes-bg', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-bg></aes-bg>')

    const element = await page.find('aes-bg')
    expect(element).toHaveClass('hydrated')
  })
})
