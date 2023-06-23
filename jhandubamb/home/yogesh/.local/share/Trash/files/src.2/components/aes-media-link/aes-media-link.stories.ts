import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import { argTypeTarget } from '../../utils/utils'

export default {
  title: 'Molecules/Media Link',
  component: 'aes-media-link',
  argTypes: {
    text: {
      name: 'Text',
      description: 'The text to display for the link',
      type: 'text',
    },
    url: {
      name: 'URL',
      description: 'The URL for the link',
      type: 'text',
    },
    ...argTypeTarget,
  },
  args: {
    text: 'Download our sustainability report',
    url: '/files/example.pdf',
    target: '_blank',
  },
}

export const MediaLink = ({ text, url, target }) =>
  html`
    <aes-media-link url="${ifDefined(url)}" target="${ifDefined(target)}">
      ${text}
    </aes-media-link>
  `
