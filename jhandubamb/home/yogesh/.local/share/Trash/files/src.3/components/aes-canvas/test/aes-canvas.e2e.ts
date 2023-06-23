import { newE2EPage } from '@stencil/core/testing'

describe('aes-canvas', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-canvas></aes-canvas>')

    const element = await page.find('aes-canvas')
    expect(element).toHaveClass('hydrated')
  })
})
