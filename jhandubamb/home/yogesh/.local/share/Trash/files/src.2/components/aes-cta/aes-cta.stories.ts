import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { argTypeSlotContent } from '../../utils/utils'

import sampleImage1 from '../../../.storybook/static/media/aes-sample-2048x1152-001.jpg'

export default {
  title: 'Molecules/CTA',
  component: 'aes-cta',
  argTypes: {
    ...argTypeSlotContent,
    displayLinkArrow: {
      type: 'boolean',
    },
    linkText: {
      type: 'text',
    },
    linkUrl: {
      type: 'text',
    },
  },
  args: {
    displayLinkArrow: true,
    slotContent: 'Connect to your energy future',
    linkText: 'Contact us today',
    linkUrl: 'https://aes.com',
  },
}

export const CTA = ({ displayLinkArrow, linkText, linkUrl, slotContent }) => {
  const link = {
    text: linkText,
    url: linkUrl,
  }
  return html`
    <aes-cta
      link="${ifDefined(JSON.stringify(link))}"
      display-link-arrow="${ifDefined(displayLinkArrow)}"
    >
      <img slot="multimedia" src="${sampleImage1}" style="width: 200px;" />
      <aes-heading slot="header" level="2">
        ${ifDefined(slotContent)}
      </aes-heading>
    </aes-cta>
  `
}
