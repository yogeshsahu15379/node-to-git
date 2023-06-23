import { newE2EPage } from '@stencil/core/testing'

describe('aes-container', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-container></aes-container>')

    const element = await page.find('aes-container')
    expect(element).toHaveClass('hydrated')
  })
})
