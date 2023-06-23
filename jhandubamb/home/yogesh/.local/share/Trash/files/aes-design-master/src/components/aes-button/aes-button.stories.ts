import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { argTypeSlotContent, argTypeTarget } from '../../utils/utils'
import { ButtonVariant } from './aes-button'

const buttonOptions: ButtonVariant[] = [
  'arrow-link',
  'none',
  'primary',
  'secondary',
]

export default {
  title: 'Atoms/Button',
  component: 'aes-button',
  argTypes: {
    ...argTypeSlotContent,
    ...argTypeTarget,
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    shouldDisplayArrow: {
      name: 'Display right arrow?',
      control: {
        type: 'boolean',
      },
    },
    url: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: buttonOptions,
      },
    },
  },
  args: {
    shouldDisplayArrow: false,
    variant: 'primary',
  },
}

const Template = ({
  defaultSlot,
  disabled,
  shouldDisplayArrow,
  url,
  target,
  variant,
}) =>
  html`
    <aes-button
      url="${ifDefined(url)}"
      target="${ifDefined(target)}"
      variant="${ifDefined(variant)}"
      disabled="${ifDefined(disabled)}"
      should-display-arrow="${shouldDisplayArrow}"
    >
      ${defaultSlot}
    </aes-button>
  `

export const Link = Template.bind({})
Link.args = {
  defaultSlot: 'Sample link with button styles',
  url: '#',
}

export const ArrowLink = Template.bind({})
ArrowLink.args = {
  defaultSlot: 'Sample button with arrow',
  shouldDisplayArrow: true,
  url: '#',
  variant: 'arrow-link',
}

export const Button = Template.bind({})
Button.args = {
  defaultSlot: 'Sample button',
}
