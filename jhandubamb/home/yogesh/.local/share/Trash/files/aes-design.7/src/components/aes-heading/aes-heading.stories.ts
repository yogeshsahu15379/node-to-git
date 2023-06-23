import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import { argTypeSlotContent } from '../../utils/utils'

import { AllowedHeadingLevels } from './aes-heading'

const levelOptions: AllowedHeadingLevels[] = [1, 2, 3, 4]

export default {
  title: 'Atoms/Heading',
  component: 'aes-heading',
  argTypes: {
    ...argTypeSlotContent,
    level: {
      control: {
        type: 'select',
        options: levelOptions,
      },
    },
    levelStyle: {
      control: {
        type: 'select',
        options: levelOptions,
      },
    },
    sub: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    defaultSlot:
      'Sample heading text that should take up multiple lines so we can test for proper size and leading.',
  },
}

const Template = ({ level, levelStyle, sub, defaultSlot }) =>
  html`
    <aes-container>
      <aes-heading
        level="${ifDefined(level)}"
        level-style="${ifDefined(levelStyle)}"
        sub="${ifDefined(sub)}"
      >
        ${defaultSlot}
      </aes-heading>
    </aes-container>
  `

export const Heading = Template.bind({})
Heading.args = {
  level: 1,
}
