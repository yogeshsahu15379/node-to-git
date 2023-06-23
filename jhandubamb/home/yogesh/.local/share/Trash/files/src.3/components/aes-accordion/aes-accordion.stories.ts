import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

import { argTypeHidden } from '../../utils/utils'

export default {
  title: 'Molecules/Accordion',
  component: 'aes-accordion',
  argTypes: {
    summaryContent: argTypeHidden,
    bodyContent: argTypeHidden,
    isOpen: {
      name: 'Toggles accordion open/close status',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    summaryContent: html`What is <em>Personal Data</em>?`,
    bodyContent: html`
      <p slot="content">
        Personal Data means any information relating to a living individual who
        can be identified (directly or indirectly) in particular by reference to
        an identifier (e.g. name, national identification number, employee
        number, email address, physical features).
      </p>
    `,
    isOpen: false,
  },
}

const Template = ({ summaryContent, bodyContent, isOpen }) =>
  html`
    <aes-accordion is-open="${ifDefined(isOpen)}">
      <span slot="summary">${summaryContent}</span>
      ${bodyContent}
    </aes-accordion>
  `

export const Default = Template.bind({})

export const Open = Template.bind({})

Open.args = {
  isOpen: true,
}

export const AccordionsGroup = () => html`
  <aes-spacer t="0" "r"=0 b="2" l="0">
    <aes-accordion>
      <span slot="summary">What is Personal Data?</span>
      <p slot="content">
        Personal Data means any information relating to a living individual who
        can be identified (directly or indirectly) in particular by reference to
        an identifier (e.g. name, national identification number, employee
        number, email address, physical features).
      </p>
    </aes-accordion>
  </aes-spacer>
  <aes-spacer t="0" "r"=0 b="2" l="0">
    <aes-accordion>
      <span slot="summary">What type of Personal Data do we process about you?</span>
      <p slot="content">
        Rerum quasi perspiciatis ut voluptatem earum quaerat. Vitae amet itaque. Qui et dolor nisi excepturi et.
      </p>
    </aes-accordion>
  </aes-spacer>
  <aes-spacer t="0" "r"=0 b="2" l="0">
    <aes-accordion>
      <span slot="summary">Why do we process your Personal Data?</span>
      <p slot="content">
        Est alias aut voluptas tempora minima ut perspiciatis consectetur. Harum nihil dolorem repellendus nam quia tempora ut. Excepturi nostrum ipsa. Incidunt mollitia omnis et ut numquam fugiat. Fuga soluta voluptatem. Sed voluptas aut vero possimus ducimus sed nam iusto architecto.
      </p>
    </aes-accordion>
  </aes-spacer>
`
