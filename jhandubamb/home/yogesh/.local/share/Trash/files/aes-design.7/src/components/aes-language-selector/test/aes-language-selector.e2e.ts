import { newE2EPage } from '@stencil/core/testing'

describe('aes-language-selector', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-language-selector></aes-language-selector>')

    const element = await page.find('aes-language-selector')
    expect(element).toHaveClass('hydrated')
  })
})
