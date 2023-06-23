import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { IconType } from '../../utils/enums'
import { argTypeNeutralColor } from '../../utils/utils'

export default {
  title: 'Molecules/Media Link Container',
  component: 'aes-media-link-container',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    bgColor: {
      ...argTypeNeutralColor,
      name: 'Background Color',
    },
    titleText: {
      name: 'Title',
      description: 'The text to display in the title slot',
      type: 'text',
    },
  },
}

export const MediaLinkContainerSingle = ({ bgColor, titleText }) =>
  html`
    <aes-media-link-container bg-color="${ifDefined(bgColor)}">
      <h2 class="subheadline subheadline-1" slot="title">${titleText}</h2>
      <aes-media-link
        should-display-icon
        icon="${IconType.GRAPH}"
        url="/files/example/document.pdf"
        slot="media-links"
      >
        Read More
      </aes-media-link>
    </aes-media-link-container>
  `
MediaLinkContainerSingle.args = {
  titleText: 'Download our sustainability report',
}

export const MediaLinkContainerMultiple = ({ bgColor, titleText }) =>
  html`
    <aes-media-link-container bg-color="${ifDefined(bgColor)}">
      <h2 class="subheadline subheadline-1" slot="title">${titleText}</h2>
      <aes-media-link
        should-display-icon
        url="/files/example/document.pdf"
        slot="media-links"
      >
        AES Climate Scenario Report
      </aes-media-link>
      <aes-media-link
        should-display-icon
        url="/files/example/document.pdf"
        slot="media-links"
      >
        2019 AES Sustainability Report
      </aes-media-link>
      <aes-media-link
        should-display-icon
        url="/files/example/document.pdf"
        slot="media-links"
      >
        2019 Sustainability Report Supplement
      </aes-media-link>
    </aes-media-link-container>
  `
MediaLinkContainerMultiple.args = {
  titleText: 'Past reports',
}
