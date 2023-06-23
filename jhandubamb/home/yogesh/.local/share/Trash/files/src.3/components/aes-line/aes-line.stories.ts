import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { argTypeHidden } from '../../utils/utils'

export default {
  title: 'Atoms/Line',
  component: 'aes-line',
  argTypes: {
    animDuration: {
      name: 'Animation Duration',
      control: {
        type: 'text',
        description:
          'The time the animation lasts in CSS time units: https://developer.mozilla.org/en-US/docs/Web/CSS/time',
      },
    },
    animObserver: argTypeHidden,
    animThreshold: {
      name: 'Animation trigger threshold',
    },
    direction: {
      name: 'Direction',
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    displayAnimated: {
      name: 'Animated',
      control: {
        type: 'boolean',
      },
    },
    el: argTypeHidden,
  },
  args: {
    direction: 'horizontal',
  },
}

export const Line = ({
  animDuration,
  animThreshold,
  direction,
  displayAnimated,
}) =>
  html` <aes-line
    anim-duration="${ifDefined(animDuration)}"
    anim-threshold="${ifDefined(animThreshold)}"
    direction="${direction}"
    display-animated="${ifDefined(displayAnimated)}"
  ></aes-line>`
