import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { ALL_TEXT_INPUTS } from '../../utils/types'

export default {
  title: 'Atoms/Forms/Text Input',
  component: 'aes-text-input',
  argTypes: {
    fieldType: {
      control: {
        type: 'select',
        options: ALL_TEXT_INPUTS,
      },
    },
    hideLabel: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    labelText: 'Email',
    fieldName: 'email',
    fieldType: 'text',
    hideLabel: false,
    required: false,
    disabled: false,
  },
}

const Template = ({
  fieldType,
  labelText,
  fieldName,
  hideLabel,
  required,
  disabled,
}) =>
  html`
    <form class="max-w-md">
      <aes-text-input
        field-type="${fieldType}"
        label-text="${labelText}"
        field-name="${fieldName}"
        hide-label="${hideLabel}"
        required="${ifDefined(required)}"
        disabled="${ifDefined(disabled)}"
      ></aes-text-input>
    </form>
  `

export const Default = Template.bind({})
Default.args = {}

export const Placeholder = Template.bind({})
Placeholder.args = {
  hideLabel: true,
}
