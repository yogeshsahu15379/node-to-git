import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { SIGNATURE_PRIMARY_COLORS } from '../../utils/types'

export default {
  title: 'Atoms/Donut',
  component: 'aes-donut',
  argTypes: {
    percent: {
      control: {
        type: 'number',
      },
    },
    color: {
      control: {
        type: 'select',
        options: SIGNATURE_PRIMARY_COLORS,
      },
    },
  },
}

const Template = ({ percent, color, strokeWidth }) => html`
  <aes-donut
    class="max-w-xl"
    percent="${ifDefined(percent)}"
    color="${ifDefined(color)}"
    stroke-width="${ifDefined(strokeWidth)}"
  ></aes-donut>
`

export const Default = Template.bind({})
