import { html } from 'lit-html'

import { argTypeSlotContent } from '../../utils/utils'

export default {
  title: 'Atoms/Back To Top Button',
  component: 'aes-back-to-top-button',
  argTypes: {
    ...argTypeSlotContent,
  },
}

export const BackToTopButton = () => {
  return html`
    <aes-container class="pt-64 pb-64">
      <aes-heading level-style="2" class="my-6">
        Scroll down to see back to top button in action
      </aes-heading>
    </aes-container>
    <aes-container class="pt-64 pb-64">
      <aes-heading level-style="2" class="my-6">
        Scroll down to see back to top button in action
      </aes-heading>
    </aes-container>
    <aes-back-to-top-button>Back to Top</aes-back-to-top-button>
  `
}
