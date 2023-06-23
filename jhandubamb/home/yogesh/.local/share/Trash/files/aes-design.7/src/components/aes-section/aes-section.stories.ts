import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import helloFuture from '../../../.storybook/stories/assets/Hello-Future.png'

import { argTypeSlotContent, argTypeSize } from '../../utils/utils'

export default {
  title: 'Molecules/Section',
  component: 'aes-section',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...argTypeSlotContent,
    verticalPadding: {
      ...argTypeSize,
      name: 'Vertical Padding Size',
    },
  },
}

export const Section = ({ verticalPadding }) =>
  html`
    <aes-bg color="neutrals-gray1">
      <aes-section vertical-padding="${ifDefined(verticalPadding)}">
        <aes-grid gap-size="large">
          <aes-column content-align="middle" col-span-md="6">
            <aes-canvas
              bg-color="neutrals-gray1"
              .cta="${JSON.stringify({
                shouldDisplayArrow: true,
                text: 'Keep reading',
                url: '#',
              })}"
            >
              <div slot="body">
                <aes-heading level-style="6" class="mb-4">
                  Our latest focus
                </aes-heading>
                <aes-heading level-style="1" class="mb-10">
                  Hello future
                </aes-heading>
                <p>Awaken the energy that renews the future.</p>
              </div>
            </aes-canvas>
          </aes-column>
          <aes-column col-span-md="6">
            <img src="${helloFuture}" />
          </aes-column>
        </aes-grid>
      </aes-section>
    </aes-bg>
  `
Section.args = {
  verticalPadding: 'large',
}
