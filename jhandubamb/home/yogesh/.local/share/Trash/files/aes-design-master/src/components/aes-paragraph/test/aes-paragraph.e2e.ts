import { newE2EPage } from '@stencil/core/testing'

describe('aes-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-paragraph></aes-paragraph>')

    const element = await page.find('aes-paragraph')
    expect(element).toHaveClass('hydrated')
  })
})
