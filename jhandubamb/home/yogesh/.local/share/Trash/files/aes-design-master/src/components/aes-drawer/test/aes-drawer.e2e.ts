import { newE2EPage } from '@stencil/core/testing'

describe('aes-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-drawer></aes-drawer>')

    const element = await page.find('aes-drawer')
    expect(element).toHaveClass('hydrated')
  })
})
