import { html } from 'lit-html'
import { argTypeImageUrl } from '../../utils/utils'

export default {
  title: 'Molecules/News CTA',
  component: 'aes-news-cta',
  argTypes: {
    imageUrl: argTypeImageUrl,
  },
}

import sampleImage1 from '../../../.storybook/static/media/aes-sample-1024x1024-001.jpg'

export const PressRelease = ({ imageUrl }) =>
  html`
    <aes-news-cta class="md:w-1/2 lg:w-1/4">
      <figure slot="multimedia">
        <img src="${imageUrl}" class="rounded-full" />
      </figure>
      <aes-heading level-style="4" slot="contentTop">
        <aes-link href="#">
          As More End Users Switch to Natural Gas in Central America, LNG
          Displacing Costlier Fuels
        </aes-link>
      </aes-heading>
      <div class="flex flex-col" slot="contentBottom">
        <aes-link href="#">Natural Gas Intelligence</aes-link>
        <span>Oct. 12, 2020</span>
      </div>
    </aes-news-cta>
  `
PressRelease.args = {
  imageUrl: sampleImage1,
}

export const ExternalRelease = ({ imageUrl }) =>
  html`
    <aes-news-cta class="md:w-1/2 lg:w-1/4" news-type="external">
      <figure slot="multimedia">
        <img src="${imageUrl}" class="rounded-full w-64" />
      </figure>
      <aes-heading slot="contentTop" level-style="4">Nov 06, 2020</aes-heading>
      <aes-link slot="contentBottom" href="#">
        AES Attains Second Investment Grade Rating; Reduces Coal Generation to
        Below 30%; Reaffirms Full Year 2020 Guidance and Growth Rates Through
        2022
      </aes-link>
    </aes-news-cta>
  `
ExternalRelease.args = {
  imageUrl: sampleImage1,
}
