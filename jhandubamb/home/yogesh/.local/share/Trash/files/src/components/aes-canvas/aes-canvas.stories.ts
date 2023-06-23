import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import { IconType } from '../../utils/enums'

import {
  argTypeColor,
  argTypeHidden,
  argTypeImageUrl,
  argTypeNeutralColor,
  argTypeSpacing,
} from '../../utils/utils'

import sampleProfileImage from '../../../.storybook/static/media/aes-profile-picture-sample-001.png'
import sampleImage3 from '../../../.storybook/static/media/aes-sample-1024x1024-001.jpg'
import sampleImage2 from '../../../.storybook/static/media/aes-sample-1920x1280-001.jpg'
import sampleImage1 from '../../../.storybook/static/media/aes-sample-2048x1152-001.jpg'

export default {
  title: 'Molecules/Canvas',
  component: 'aes-canvas',
  argTypes: {
    bodyContent: argTypeHidden,
    bgColor: {
      ...argTypeNeutralColor,
      name: 'Background Color',
    },
    bgHoverImage: {
      name: 'Background Image on Hover',
    },
    bgVimeoVideo: {
      name: 'Vimeo video',
    },
    isControls: {
      name: 'controls',
      control: {
        type: 'boolean',
      },
    },
    isAutoplay: {
      name: 'autoplay',
      control: {
        type: 'boolean',
      },
    },
    displayBorder: {
      name: 'Display Border',
      control: {
        type: 'boolean',
      },
    },
    borderColor: {
      ...argTypeColor,
      name: 'Border Color',
    },
    displayDropShadow: {
      name: 'Display Drop Shadow',
      control: {
        type: 'boolean',
      },
    },
    cta: {
      name: 'CTA',
    },
    ctaData: argTypeHidden,
    image: argTypeImageUrl,
    outerPaddingTop: {
      ...argTypeSpacing,
      name: 'Outer Wrapper Top Padding',
    },
    outerPaddingBottom: {
      ...argTypeSpacing,
      name: 'Outer Wrapper Bottom Padding',
    },
    outerPaddingLeft: {
      ...argTypeSpacing,
      name: 'Outer Wrapper Left Padding',
    },
    outerPaddingRight: {
      ...argTypeSpacing,
      name: 'Outer Wrapper Right Padding',
    },
    paddingTop: {
      ...argTypeSpacing,
      name: 'Body Top Padding',
    },
    paddingBottom: {
      ...argTypeSpacing,
      name: 'Body Bottom Padding',
    },
    paddingLeft: {
      ...argTypeSpacing,
      name: 'Body Left Padding',
    },
    paddingRight: {
      ...argTypeSpacing,
      name: 'Body Right Padding',
    },
  },
  args: {
    outerPaddingTop: '8',
    outerPaddingBottom: '8',
    outerPaddingLeft: '2',
    outerPaddingRight: '2',
    paddingTop: '8',
    paddingBottom: '8',
    paddingLeft: '8',
    paddingRight: '8',
    displayBorder: false,
  },
}

const Template = ({
  bgColor,
  bgHoverImage,
  bgVimeoVideo,
  isAutoplay,
  isControls,
  borderColor,
  bodyContent,
  cta,
  image,
  outerPaddingTop,
  outerPaddingBottom,
  outerPaddingLeft,
  outerPaddingRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  displayBorder,
  displayDropShadow,
}) =>
  html`
    <div class="flex">
      <aes-canvas
        style="max-width: 700px"
        bg-color="${ifDefined(bgColor)}"
        bg-hover-image="${ifDefined(bgHoverImage)}"
        bg-vimeo-video="${ifDefined(bgVimeoVideo)}"
        autoplay="${ifDefined(isAutoplay)}"
        controls="${ifDefined(isControls)}"
        border-color="${ifDefined(borderColor)}"
        cta="${ifDefined(JSON.stringify(cta))}"
        outer-padding-top="${ifDefined(outerPaddingTop)}"
        outer-padding-bottom="${ifDefined(outerPaddingBottom)}"
        outer-padding-left="${ifDefined(outerPaddingLeft)}"
        outer-padding-right="${ifDefined(outerPaddingRight)}"
        padding-top="${ifDefined(paddingTop)}"
        padding-bottom="${ifDefined(paddingBottom)}"
        padding-left="${ifDefined(paddingLeft)}"
        padding-right="${ifDefined(paddingRight)}"
        display-border="${ifDefined(displayBorder)}"
        display-drop-shadow="${ifDefined(displayDropShadow)}"
      >
        <img src="${ifDefined(image)}" slot="multimedia" />
        ${bodyContent}
      </aes-canvas>
    </div>
  `

export const CanvasWithCta = Template.bind({})

CanvasWithCta.args = {
  bodyContent: html`
    <div slot="body" class="wysiwyg">
      <h2 class="heading heading-1">Global scale, local impact</h2>
      <p>
        AES is deeply rooted in local culture and customs. We invest in our
        communities in a way that makes the best sense for them.
      </p>
    </div>
  `,
  cta: {
    shouldDisplayArrow: true,
    text: 'Learn more about global x local',
    url: '#',
  },
}

export const CanvasWithHoverImage = Template.bind({})

CanvasWithHoverImage.args = {
  bgHoverImage: sampleImage3,
  bodyContent: html`
    <div slot="body" class="wysiwyg">
      <h2 class="heading heading-1">Global scale, local impact</h2>
      <p>
        AES is deeply rooted in local culture and customs. We invest in our
        communities in a way that makes the best sense for them.
      </p>
    </div>
  `,
  cta: {
    shouldDisplayArrow: true,
    text: 'Learn more',
    url: '#',
  },
}

export const CanvasWithImage = Template.bind({})

CanvasWithImage.args = {
  bodyContent: html`
    <div slot="body">
      <h2 class="heading heading-1">Let's lead the change</h2>
    </div>
  `,
  image: sampleImage1,
}

export const CanvasWithDonut = () => html`
  <aes-canvas class="max-w-xs">
    <aes-donut slot="multimedia"></aes-donut>
    <div slot="body">
      <h2 class="heading heading-3 text-signature-purple1">
        Experience and exposure
      </h2>
      <p>
        We believe the development of our people is accelerated by gaining a
        variety of on-the-job experiences and exposure that helps people expand
        their skills and enhance their capabilities.
      </p>
    </div>
  </aes-canvas>
`

export const CanvasWithPerson = () => html`
  <aes-canvas class="h-full">
    <img
      src="${sampleProfileImage}"
      slot="multimedia"
      width="254"
      height="254"
    />
    <div class="pb-16 relative h-full" slot="body">
      <h2 class="subheadline subheadline-1 text-signature-purple1 mb-2">
        Andrés Gluski
      </h2>
      <p class="text-xl text-neutrals-gray4 my-2">
        President & Chief Executive Officer
      </p>

      <div
        class="flex justify-between items-center mt-8 absolute bottom-0 left-0 right-0 h-10"
      >
        <div class="flex-auto">
          <aes-link href="#" target="_blank" class="mr-2">
            <aes-icon class="w-8" icon="${IconType.LINKEDIN_GRAY}" />
          </aes-link>
          <aes-link href="#" target="_blank" class="mr-2">
            <aes-icon class="w-8" icon="${IconType.TWITTER_GRAY}" />
          </aes-link>
        </div>

        <aes-link href="#" target="_blank"> View bio → </aes-link>
      </div>
    </div>
  </aes-canvas>
`

export const CanvasWithSliderCard = Template.bind({})

CanvasWithSliderCard.args = {
  bgColor: 'neutrals-white',
  displayBorder: true,
  borderColor: 'neutrals-gray02',
  outerPaddingTop: '6',
  outerPaddingBottom: '6',
  outerPaddingLeft: '6',
  outerPaddingRight: '6',
  paddingTop: '8',
  paddingBottom: '0',
  paddingLeft: '8',
  paddingRight: '8',
  bodyContent: html`
    <div slot="body">
      <h2 class="subheadline subheadline-1">
        Kaua’i Island Utility Cooperative sets a new standard for carbon free
        energy together with AES
      </h2>
    </div>
  `,
  image: 'https://picsum.photos/1080/609?blur=2',
  cta: {
    shouldDisplayArrow: true,
    text: 'Learn more',
    url: '#',
    variant: 'arrow-link',
  },
}

export const CanvasFromConsumer = Template.bind({})

CanvasFromConsumer.args = {
  bgColor: 'transparent',
  displayBorder: false,
  borderColor: 'transparent',
  outerPaddingTop: '0',
  outerPaddingBottom: '24',
  outerPaddingLeft: '0',
  outerPaddingRight: '0',
  paddingTop: '20',
  paddingBottom: '0',
  paddingLeft: '24',
  paddingRight: '64',
  bodyContent: html`
    <div slot="body" class="wysiwyg">
      <h2><span class="heading heading-2">Work with us</span></h2>
      <p>
        We care more about who you are than what’s on your resumé. Coming from
        all walks of life, our people share a passion for improving lives by
        improving the energy sector through innovation, collaboration and
        action. At AES, we invest in your development and empower you to
        continuously improve because we know when you’re at your best, that’s
        when we’ll make the greatest impact to improving lives by accelerating a
        smarter, greener energy future.
      </p>
    </div>
  `,
  image: sampleImage2,
}
