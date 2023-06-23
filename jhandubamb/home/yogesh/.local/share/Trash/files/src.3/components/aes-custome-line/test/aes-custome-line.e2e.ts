import { newE2EPage } from '@stencil/core/testing'

describe('aes-custome-line', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<aes-custome-line></aes-custome-line>')

    const element = await page.find('aes-custome-line')
    expect(element).toHaveClass('hydrated')
  })
})
