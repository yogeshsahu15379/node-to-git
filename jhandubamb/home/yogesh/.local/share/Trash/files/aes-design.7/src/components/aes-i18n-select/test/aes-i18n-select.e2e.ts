import { newE2EPage } from '@stencil/core/testing'

describe('aes-i18n-select', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-i18n-select></aes-i18n-select>')

    const element = await page.find('aes-i18n-select')
    expect(element).toHaveClass('hydrated')
  })
})
