import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { argTypeImageUrl } from '../../utils/utils'
import { AllowedHeadingLevels } from '../aes-heading/aes-heading'

const levelOptions: AllowedHeadingLevels[] = [1, 2, 3, 4]

export default {
  title: 'Molecules/Hero',
  component: 'aes-hero',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    imageUrls: {
      name: 'Image URLs',
      sm: argTypeImageUrl,
      md: argTypeImageUrl,
      lg: argTypeImageUrl,
      xl: argTypeImageUrl,
      xxl: argTypeImageUrl,
    },
    titleText: {
      name: 'Title',
      description: '',
    },
    titleLevel: {
      name: 'Title Level',
      description: '',
      control: {
        type: 'select',
        options: levelOptions,
      },
    },
    overlay: {
      name: 'Overlay',
    },
  },
  args: {
    titleText: 'Sustainability',
    titleLevel: 1,
    imageUrls: {
      sm: 'https://picsum.photos/768/354?blur=2',
      md: 'https://picsum.photos/1024/477?blur=2',
      lg: 'https://picsum.photos/1280/596?blur=2',
      xl: 'https://picsum.photos/1440/670?blur=2',
      xxl: 'https://picsum.photos/1440/670?blur=2',
    },
    overlay: true,
  },
}

export const Hero = ({
  titleText,
  titleLevel,
  overlay,
  imageUrls: { sm, md, lg, xl, xxl },
}) =>
  html`
    <aes-hero overlay="${ifDefined(overlay)}">
      <picture slot="multimedia">
        ${xxl && html`<source media="(min-width: 1440px)" srcset="${xxl}" />`}
        ${xl && html`<source media="(min-width: 1280px)" srcset="${xl}" />`}
        ${lg && html`<source media="(min-width: 1024px)" srcset="${lg}" />`}
        ${md && html`<source media="(min-width: 768px)" srcset="${md}" />`}
        ${sm && html`<source media="(min-width: 640px)" srcset="${sm}" />`}
        <img src="${md}" alt="" class="w-full" />
      </picture>
      <aes-heading level="${titleLevel}" slot="title">
        ${titleText}
      </aes-heading>
    </aes-hero>
  `
