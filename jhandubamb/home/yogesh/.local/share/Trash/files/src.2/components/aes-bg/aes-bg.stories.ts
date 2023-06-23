import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import solarPanels from '../../../.storybook/stories/assets/solar-panels.png'

import { argTypeSlotContent, argTypeSize } from '../../utils/utils'
import globe from '../../../.storybook/stories/assets/globe.svg'

export default {
  title: 'Atoms/Background',
  component: 'aes-bg',
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

export const BackgroundColor = ({ verticalPadding }) =>
  html`
    <aes-bg color="neutrals-gray1">
      <aes-section vertical-padding="${ifDefined(verticalPadding)}">
        <aes-container>
          This is some content in an aes-bg component with a background color.
        </aes-container>
      </aes-section>
    </aes-bg>
  `
BackgroundColor.args = {
  verticalPadding: 'large',
}

export const BackgroundImageTopRight = ({ verticalPadding }) =>
  html`
    <aes-section vertical-padding="${ifDefined(verticalPadding)}">
      <aes-container>
        <aes-bg image-url="${globe}" image-position="top-right">
          <aes-grid class="mt-8">
            <aes-column
              content-align="bottom"
              col-span-md="5"
              class="md:col-start-2"
            >
              <aes-canvas
                .cta="${JSON.stringify({
                  shouldDisplayArrow: true,
                  text: 'Learn more about global x local',
                  url: '#',
                })}"
              >
                <div slot="body">
                  <aes-heading level-style="1" class="mb-10">
                    Global scale,<br />local impact
                  </aes-heading>
                  <p>
                    AES is deeply rooted in local culture and customs. We invest
                    in our communities in a way that makes the best sense for
                    them. We learn, grow, expand and share the experiences we
                    have to bring innovation from one market to another,
                    changing the future of energy, together.
                  </p>
                </div>
              </aes-canvas>
            </aes-column>
          </aes-grid>
        </aes-bg>
      </aes-container>
    </aes-section>
  `
BackgroundImageTopRight.args = {
  verticalPadding: 'small',
}

export const BackgroundImageBottom = ({ verticalPadding }) =>
  html`
    <aes-section vertical-padding="${ifDefined(verticalPadding)}">
      <aes-bg image-url="${solarPanels}" image-position="bottom">
        <aes-grid class="mt-8">
          <aes-column
            content-align="top"
            col-span-md="6"
            class="md:col-start-6"
          >
            <aes-canvas
              .cta="${JSON.stringify({
                shouldDisplayArrow: true,
                text: "Let's get started",
                url: '#',
              })}"
            >
              <div slot="body">
                <aes-heading level-style="4" class="mb-10">
                  Together, we’re achieving ambitious sustainability goals
                </aes-heading>
                <p>
                  We're making a greener, smarter, future a reality. As a
                  partner in our journey or a member of our team, we'll be
                  alongside you to help elevate your position as a leader of the
                  future.
                </p>
              </div>
            </aes-canvas>
          </aes-column>
        </aes-grid>
      </aes-bg>
    </aes-section>
  `
BackgroundImageBottom.args = {
  verticalPadding: 'small',
}
