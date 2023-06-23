import { newE2EPage } from '@stencil/core/testing'

describe('aes-section', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-section></aes-section>')

    const element = await page.find('aes-section')
    expect(element).toHaveClass('hydrated')
  })
})
