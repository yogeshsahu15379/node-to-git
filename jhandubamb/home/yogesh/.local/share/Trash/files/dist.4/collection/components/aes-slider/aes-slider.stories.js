import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypeHidden } from '../../utils/utils';
import sampleImage1 from '../../../.storybook/static/media/aes-slide-sample-001.jpg';
import sampleImage2 from '../../../.storybook/static/media/aes-slide-sample-002.jpg';
import sampleImage3 from '../../../.storybook/static/media/aes-slide-sample-003.jpg';
import sampleImage4 from '../../../.storybook/static/media/aes-slide-sample-004.jpg';
import sampleImage5 from '../../../.storybook/static/media/aes-slide-sample-005.jpg';
export default {
  title: 'Organisms/Slider',
  component: 'aes-slider',
  argTypes: {
    el: {
      table: {
        disable: true,
      },
    },
    initialized: {
      table: {
        disable: true,
      },
    },
    bodyContent: argTypeHidden,
    slidesToDisplay: {
      name: 'Number of Slides',
      description: 'Number of slides to display (e.g. use 1.5 to display one and a half slides)',
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 0.25,
      },
    },
    displayArrows: {
      name: 'Display Navigation Arrows',
      description: 'Whether to display navigation arrows to switch slides',
      control: {
        type: 'boolean',
      },
    },
    displayDots: {
      name: 'Display Navigation Dots',
      description: 'Whether to display navigation dots to switch slides',
      control: {
        type: 'boolean',
      },
    },
    autoplay: {
      name: 'Autoplay',
      description: 'Whether to automatically advance slides',
      control: {
        type: 'boolean',
      },
    },
    loop: {
      name: 'Loop',
      description: 'Whether to infinitely loop slides',
      control: {
        type: 'boolean',
      },
    },
    duration: {
      name: 'Duration',
      description: 'Delay between slides change (miliseconds)',
      control: {
        type: 'number',
      },
    },
    spacing: {
      name: 'Spacing',
      description: 'Spacing/gap between slides (in pixels)',
      control: {
        type: 'number',
      },
    },
  },
  args: {
    duration: 3500,
    loop: false,
    slidesToDisplay: 1,
    spacing: 32,
  },
};
const Template = ({ autoplay, bodyContent, displayArrows, displayDots, duration, loop, slidesToDisplay, spacing, }) => html `
    <aes-slider
      autoplay="${ifDefined(autoplay)}"
      display-arrows="${ifDefined(displayArrows)}"
      display-dots="${ifDefined(displayDots)}"
      duration="${ifDefined(duration)}"
      loop="${ifDefined(loop)}"
      slides-to-display="${ifDefined(slidesToDisplay)}"
      spacing="${ifDefined(spacing)}"
    >
      ${bodyContent}
    </aes-slider>
  `;
const sampleSlide = ({ image, text }) => {
  return html `
    <div class="keen-slider__slide">
      <aes-canvas
        bg-color="neutrals-white"
        border-color="neutrals-gray2"
        cta="${JSON.stringify({
    shouldDisplayArrow: true,
    text: 'Learn more',
    url: '#',
    variant: 'arrow-link',
  })}"
        outer-padding-top="6"
        outer-padding-bottom="6"
        outer-padding-left="6"
        outer-padding-right="6"
        padding-top="8"
        padding-bottom="0"
        padding-left="8"
        padding-right="8"
        display-border="true"
        class="h-full"
      >
        <picture slot="multimedia">
          <img src="${image}" loading="lazy" alt="" />
        </picture>

        <div slot="body">
          <h2 class="subheadline subheadline-1">${text}</h2>
        </div>
      </aes-canvas>
    </div>
  `;
};
export const SliderDefault = Template.bind({});
SliderDefault.args = {
  bodyContent: html `
    <div slot="slides" class="slides-collection keen-slider">
      ${sampleSlide({
    image: sampleImage1,
    text: 'Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES',
  })}
      ${sampleSlide({
    image: sampleImage2,
    text: 'Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES',
  })}
      ${sampleSlide({
    image: sampleImage3,
    text: 'Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES',
  })}
      ${sampleSlide({
    image: sampleImage4,
    text: 'Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES',
  })}
      ${sampleSlide({
    image: sampleImage5,
    text: 'Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES',
  })}
    </div>
  `,
};
export const SliderForLandingPage = Template.bind({});
SliderForLandingPage.args = {
  autoplay: true,
  bodyContent: html `
    <div slot="slides" class="slides-collection keen-slider">
      ${sampleSlide({
    image: sampleImage1,
    text: 'Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES',
  })}
      ${sampleSlide({
    image: sampleImage2,
    text: 'How Google is using data centers to accelerate the global adoption of clean energy',
  })}
      ${sampleSlide({
    image: sampleImage3,
    text: 'Energas and AES break the Dominican Republic’s reliance on oil',
  })}
    </div>
  `,
  displayArrows: true,
  displayDots: true,
  duration: 5000,
  loop: true,
  slidesToDisplay: 1.25,
  spacing: 72,
};
