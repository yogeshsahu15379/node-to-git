import { newE2EPage } from '@stencil/core/testing'

describe('aes-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-progress></aes-progress>')

    const element = await page.find('aes-progress')
    expect(element).toHaveClass('hydrated')
  })
})
