import { newE2EPage } from '@stencil/core/testing'

describe('aes-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-accordion></aes-accordion>')

    const element = await page.find('aes-accordion')
    expect(element).toHaveClass('hydrated')
  })
})
