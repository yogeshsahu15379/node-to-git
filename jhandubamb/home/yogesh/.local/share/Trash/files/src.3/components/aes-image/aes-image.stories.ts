import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { argTypeImageUrl, argTypeHidden } from '../../utils/utils'

import sampleImage1 from '../../../.storybook/static/media/aes-sample-1920x1280-001.jpg'

export default {
  title: 'Atoms/Image',
  component: 'aes-image',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    imageUrl: argTypeImageUrl,
    parallaxContainer: argTypeHidden,
    el: argTypeHidden,
  },
  args: {
    imageUrl: sampleImage1,
    caption: 'This is the image caption.',
  },
}

const Template = ({ imageUrl, caption, parallax }) => html`
  <aes-image parallax="${ifDefined(parallax)}">
    <img
      slot="multimedia"
      src="${imageUrl}"
      alt="Photo of a woman smiling and talking"
    />
    <aes-container slot="caption">${caption}</aes-container>
  </aes-image>
`

export const StaticImage = Template.bind({})

export const ParallaxImage = Template.bind({})
ParallaxImage.args = {
  parallax: true,
}

ParallaxImage.decorators = [
  Story => html`
    <aes-container class="mt-64">
      <aes-heading level-style="2" class="my-6">
        Scroll to see parallax in action
      </aes-heading>
    </aes-container>
    <div style="margin: 20em 0;">${Story()}</div>
    <aes-container class="mb-64">
      <aes-heading level-style="2" class="my-6">
        Scroll to see parallax in action
      </aes-heading>
    </aes-container>
  `,
]
