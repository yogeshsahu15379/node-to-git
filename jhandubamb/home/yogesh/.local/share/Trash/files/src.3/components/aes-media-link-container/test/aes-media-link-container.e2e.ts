import { newE2EPage } from '@stencil/core/testing'

describe('aes-media-link-container', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<aes-media-link-container></aes-media-link-container>',
    )

    const element = await page.find('aes-media-link-container')
    expect(element).toHaveClass('hydrated')
  })
})
