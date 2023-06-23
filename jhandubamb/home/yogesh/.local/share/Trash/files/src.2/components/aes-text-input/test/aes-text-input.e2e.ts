import { newE2EPage } from '@stencil/core/testing'

describe('aes-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-text-input></aes-text-input>')

    const element = await page.find('aes-text-input')
    expect(element).toHaveClass('hydrated')
  })
})
