import { newE2EPage } from '@stencil/core/testing'

describe('aes-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-grid></aes-grid>')

    const element = await page.find('aes-grid')
    expect(element).toHaveClass('hydrated')
  })
})
