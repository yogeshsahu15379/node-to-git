import { newE2EPage } from '@stencil/core/testing'

describe('aes-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-slider></aes-slider>')

    const element = await page.find('aes-slider')
    expect(element).toHaveClass('hydrated')
  })
})
