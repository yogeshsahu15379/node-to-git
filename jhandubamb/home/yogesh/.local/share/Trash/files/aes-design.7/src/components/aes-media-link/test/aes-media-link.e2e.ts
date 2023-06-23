import { newE2EPage } from '@stencil/core/testing'

describe('aes-media-link', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-media-link></aes-media-link>')

    const element = await page.find('aes-media-link')
    expect(element).toHaveClass('hydrated')
  })
})
