import { html } from 'lit-html'

import sampleIcon1 from '../../static/media/timeline-sample-icon-001.png'
import sampleIcon2 from '../../static/media/timeline-sample-icon-002.png'
import sampleIcon3 from '../../static/media/timeline-sample-icon-003.png'
import sampleIcon4 from '../../static/media/timeline-sample-icon-004.png'
import sampleImage1 from '../../static/media/timeline-sample-image-001.jpg'
import sampleImage2 from '../../static/media/timeline-sample-image-002.jpg'
import sampleImage3 from '../../static/media/timeline-sample-image-003.jpg'
import sampleImage4 from '../../static/media/aes-sample-1920x1280-001.jpg'
import sampleImage5 from '../../static/media/aes-slide-sample-001.jpg'
import sampleImage6 from '../../static/media/aes-slide-sample-002.jpg'
import sampleImage7 from '../../static/media/aes-slide-sample-003.jpg'

export default {
  title: 'Protons/Timelines',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    verticalLineAlignment: {
      name: 'Mobile Line Alignment',
      description: 'Decorative line alignment on mobile devices',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
  },
}

export const IconStyle = ({ verticalLineAlignment }) => {
  const alignClasses =
    verticalLineAlignment === 'right' ? 'left:auto right-0' : ''

  return html`
    <aes-grid gap-size="small">
      <aes-column
        col-span-default="12"
        col-span-xl="12"
        content-align="middle"
        class="relative"
      >
        <aes-line
          direction="vertical"
          class="z-10 absolute lg:inset-x-0 lg:mx-auto min-h-full max-h-full h-full ${alignClasses}"
        /></aes-line>
        <section class="timeline-items py-16 min-h-full">
          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon1}"
                  width="200"
                  height="200"
                  alt="coal icon"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-3">
                      <span class="subheadline subheadline-2">Reduce pro-forma generation from coal to below 30% of  portfolio by 2020 and 10% by 2030: ${verticalLineAlignment}</span>
                    </span
                    >
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon2}"
                  width="200"
                  height="200"
                  title="aes_icons-green-energy-rgb"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-2">Have zero carbon emissions from electricity by 2050</span>
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon3}"
                  width="200"
                  height="200"
                  alt="timeline gesture"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-2">Add 2-3 GW of wind, solar and energy storage per year</span>
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon4}"
                  width="200"
                  height="200"
                  alt="CO2"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-2">Reduce carbon intensity 50% by 2022 and 70% by 2030 versus 2016 levels</span>
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>
        </section>
      </aes-column>
    </aes-grid>`
}

export const TestLines = () => {
  return html`
    <div style="width: 300px; height: 300px" class="bg-neutrals-gray3 relative">
      <aes-line
      direction="vertical"
      class="z-10 absolute top-0 inset-x-0 mx-auto min-h-0 h-full"
    /></aes-line>
      <p>Magnam est voluptatibus quia aut et dicta laborum exercitationem.</p>
    </div>
  `
}

export const AnimatedLine = ({ verticalLineAlignment }) => {
  const alignClasses =
    verticalLineAlignment === 'right' ? 'left:auto right-0' : ''

  return html`
    <aes-grid gap-size="small">
      <aes-column
        col-span-default="12"
        col-span-xl="12"
        content-align="middle"
        class="relative"
      >
        <aes-line
          direction="vertical"
          display-animated="true"
          class="z-10 absolute top-0 inset-x-0 min-h-full max-h-full h-full lg:mx-auto ${alignClasses}"
        /></aes-line>
        <section class="timeline-items py-16 min-h-full">
          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon1}"
                  width="200"
                  height="200"
                  alt="coal icon"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-3">
                      <span class="subheadline subheadline-2">Reduce pro-forma generation from coal to below 30% of  portfolio by 2020 and 10% by 2030: ${verticalLineAlignment}</span>
                    </span
                    >
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon2}"
                  width="200"
                  height="200"
                  title="aes_icons-green-energy-rgb"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-2">Have zero carbon emissions from electricity by 2050</span>
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon3}"
                  width="200"
                  height="200"
                  alt="timeline gesture"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-2">Add 2-3 GW of wind, solar and energy storage per year</span>
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
              <aes-canvas
                outer-padding-top="8"
                outer-padding-bottom="0"
                outer-padding-left="8"
                outer-padding-right="8"
                padding-top="10"
                padding-bottom="0"
                padding-left="0"
                padding-right="0"
              >
                <img
                  src="${sampleIcon4}"
                  width="200"
                  height="200"
                  alt="CO2"
                  loading="lazy"
                  slot="multimedia"
                />

                <div slot="body" class="wysiwyg">
                  <h3>
                    <span class="subheadline subheadline-2">Reduce carbon intensity 50% by 2022 and 70% by 2030 versus 2016 levels</span>
                  </h3>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="5"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>
        </section>
      </aes-column>
    </aes-grid>`
}

export const LetterboxStyle = ({ verticalLineAlignment }) => {
  const alignClasses =
    verticalLineAlignment === 'right' ? 'left:auto right-0' : ''

  return html` <aes-grid gap-size="small">
    <aes-column
      col-span-default="12"
      col-span-xl="12"
      content-align="middle"
      class="relative"
    >
      <aes-line
        direction="vertical"
        class="z-10 absolute lg:inset-x-0 lg:mx-auto min-h-full max-h-full h-full"
      ></aes-line>

      <section class="timeline-items py-16 min-h-full">
        <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
          <aes-column
            col-span-default="12"
            col-span-lg="6"
            content-align="middle"
            class="order-2 lg:order-1 pl-10 lg:pl-0 pr-0"
          >
            <aes-canvas
              outer-padding-top="0"
              outer-padding-bottom="0"
              outer-padding-left="0"
              outer-padding-right="0"
              padding-top="0"
              padding-bottom="0"
              padding-left="0"
              padding-right="0"
            >
              <div slot="body" class="wysiwyg">
                <h2>
                  <span class="heading heading-4">
                    <span class="text-signature-blue1">New clean energy</span>
                  </span>
                </h2>

                <h3>
                  <span class="subheadline subheadline-3"
                    >Achieve a higher standard of new energy</span
                  >
                </h3>

                <p>&nbsp;</p>

                <h3>
                  <span class="subheadline subheadline-4">
                    <span class="subheadline subheadline-3">
                      <a
                        href="/products/our-offerings/new-clean-energy"
                        title="New clean energy"
                        >Learn more</a
                      >
                    </span>
                  </span>
                </h3>
              </div>
            </aes-canvas>
          </aes-column>

          <aes-column
            col-span-default="12"
            col-span-lg="6"
            content-align="middle"
            class="order-1 lg:order-2 pl-10 lg:pl-0 pr-0"
          >
            <aes-canvas
              outer-padding-top="0"
              outer-padding-bottom="0"
              outer-padding-left="0"
              outer-padding-right="0"
              padding-top="0"
              padding-bottom="0"
              padding-left="0"
              padding-right="0"
            >
              <picture slot="multimedia" class="w-full">
                <source srcset="${sampleImage1}" type="image/jpeg" />
                <img
                  class="w-full"
                  src="${sampleImage1}"
                  alt="tech - solar panels in desert"
                  slot="multimedia"
                />
              </picture>
            </aes-canvas>
          </aes-column>
        </aes-grid>

        <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
          <aes-column
            col-span-default="12"
            col-span-lg="6"
            content-align="middle"
            class="order-1 pl-10 lg:pl-0 pr-0"
          >
            <aes-canvas
              outer-padding-top="0"
              outer-padding-bottom="0"
              outer-padding-left="0"
              outer-padding-right="0"
              padding-top="0"
              padding-bottom="0"
              padding-left="0"
              padding-right="0"
            >
              <picture slot="multimedia" class="w-full">
                <source srcset="${sampleImage2}" type="image/jpeg" />
                <img
                  class="w-full"
                  src="${sampleImage2}"
                  alt="context - city skyline at sunset"
                  slot="multimedia"
                />
              </picture>
            </aes-canvas>
          </aes-column>

          <aes-column
            col-span-default="12"
            col-span-lg="6"
            content-align="middle"
            class="order-2 pl-10 lg:pl-0 pr-0 lg:pl-10"
          >
            <aes-canvas
              outer-padding-top="0"
              outer-padding-bottom="0"
              outer-padding-left="0"
              outer-padding-right="0"
              padding-top="0"
              padding-bottom="0"
              padding-left="0"
              padding-right="0"
            >
              <div slot="body" class="wysiwyg">
                <h2>
                  <span class="heading heading-4">
                    <span class="text-signature-purple1"
                      >Advanced energy networks</span
                    >
                  </span>
                </h2>

                <h3>
                  <span class="subheadline subheadline-3"
                    >Drive impact through access and insights</span
                  >
                </h3>

                <p>&nbsp;</p>

                <p>
                  <span class="subheadline subheadline-3">
                    <a
                      href="/products/our-offerings/advanced-energy-networks"
                      title="Advanced energy networks"
                      >Learn more</a
                    >
                  </span>
                </p>
              </div>
            </aes-canvas>
          </aes-column>
        </aes-grid>

        <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
          <aes-column
            col-span-default="12"
            col-span-lg="6"
            content-align="middle"
            class="order-2 lg:order-1 pl-10 lg:pl-0 pr-0"
          >
            <aes-canvas
              outer-padding-top="0"
              outer-padding-bottom="0"
              outer-padding-left="0"
              outer-padding-right="0"
              padding-top="0"
              padding-bottom="0"
              padding-left="0"
              padding-right="0"
            >
              <div slot="body" class="wysiwyg">
                <h2>
                  <span class="heading heading-4">
                    <span class="text-signature-aqua1"
                      >Cleaner reliability</span
                    >
                  </span>
                </h2>

                <h3>
                  <span class="subheadline subheadline-3"
                    >Secure your sustainable future</span
                  >
                </h3>

                <p>&nbsp;</p>

                <p>
                  <span class="subheadline subheadline-3">
                    <a
                      href="/products/our-offerings/cleaner-reliability"
                      title="Cleaner reliability"
                      >Learn more</a
                    >
                  </span>
                </p>
              </div>
            </aes-canvas>
          </aes-column>

          <aes-column
            col-span-default="12"
            col-span-lg="6"
            content-align="middle"
            class="order-1 lg:order-2 pl-10 lg:pl-0 pr-0"
          >
            <aes-canvas
              outer-padding-top="0"
              outer-padding-bottom="0"
              outer-padding-left="0"
              outer-padding-right="0"
              padding-top="0"
              padding-bottom="0"
              padding-left="0"
              padding-right="0"
            >
              <picture slot="multimedia" class="w-full">
                <source srcset="${sampleImage3}" type="image/jpeg" />
                <img
                  class="w-full"
                  src="${sampleImage3}"
                  alt="people in front of large solar batteries"
                  slot="multimedia"
                />
              </picture>
            </aes-canvas>
          </aes-column>
        </aes-grid>
      </section>
    </aes-column>
  </aes-grid>`
}

export const AllItems = ({ verticalLineAlignment }) => {
  const alignClasses =
    verticalLineAlignment === 'right' ? 'left:auto right-0' : ''

  return html`
    <aes-grid gap-size="small">
      <aes-column
        col-span-default="12"
        col-span-xl="12"
        class="relative"
        content-align="middle"
      >
        <aes-line
          direction="vertical"
          class="z-10 absolute lg:inset-x-0 lg:mx-auto min-h-full max-h-full h-full"
        ></aes-line>
        <section class="timeline-items py-16 min-h-full">
          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="top"
              class="px-10 md:pr-12 md:pl-12"
            >
              <h2 class="subheadline subheadline-2">WYSIWYG Contents</h2>
              <div class="wysiwyg">
                <p>Sit quaerat rerum. Est deserunt recusandae rerum aut neque quia sit recusandae molestias. Omnis sed consectetur. Tempora laboriosam aut iure distinctio sed ex cupiditate doloribus.</p>
                <ul>
                  <li>First</li>
                  <li>Second</li>
                  <li>Third</li>
                </ul>
                <p class="large">Sit in cumque quas neque tempora quasi eos.</p>
                <h1 class="heading heading-3">
                  <span class="text-signature-aqua1">Heading</span>
                  <span class="text-signature-purple1">3</span>
                </h1>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Compensation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span class="text-signature-purple1">Jar Morse *</span>
                      </td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="text-signature-purple1">Janet Davidson</span>
                      </td>
                      <td>Member</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="text-signature-purple1">Andrés Gluski</span>
                      </td>
                      <td>—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="top"
              class="px-10 md:pr-12 md:pl-12"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="top"
              class="px-10 md:pr-12 md:pl-12"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="top"
              class="px-10 md:pr-12 md:pl-12"
            >
              <h2 class="subheadline subheadline-2">Canvas</h2>
              <aes-canvas cta="{&quot;shouldDisplayArrow&quot;:true,&quot;text&quot;:&quot;Learn more about global x local&quot;,&quot;url&quot;:&quot;#&quot;}" outer-padding-top="8" outer-padding-bottom="8" outer-padding-left="2" outer-padding-right="2" padding-top="8" padding-bottom="8" padding-left="8" padding-right="8" display-border="false">
                <img slot="multimedia">
                <div slot="body" class="wysiwyg">
                  <h2 class="heading heading-1">Global scale, local impact</h2>
                  <p>
                    AES is deeply rooted in local culture and customs. We invest in our communities in a way that makes the best sense for them.
                  </p>
                </div>
              </aes-canvas>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="1"
              content-align="middle"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="middle"
              class="px-10 md:pr-12 md:pl-12"
            >
              <h2 class="subheadline subheadline-2">Accordions</h2>
              <aes-spacer t="2" "r"=0 b="2" l="0">
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
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="middle"
              class="px-10 md:pr-12 md:pl-12"
            >
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
             <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="top"
              class="px-10 md:pr-12 md:pl-12"
            >
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="middle"
              class="px-10 md:pr-12 md:pl-12"
            >
              <h2 class="subheadline subheadline-2">Image</h2>
              <aes-image>
                <img slot="multimedia" alt="Photo of a woman smiling and talking" src="${sampleImage4}">
                <aes-container slot="caption">This is the image caption.</aes-container>
              </aes-image>
            </aes-column>
          </aes-grid>

          <aes-grid is-nested gap-size="none" class="mb-10 lg:mb-0">
            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="middle"
              class="px-10 md:pr-12 md:pl-12"
            >
              <h2 class="subheadline subheadline-2">Slider</h2>
              <aes-slider duration="3500" autoplay="true" display-arrows="true" loop="true" slides-to-display="1" spacing="32">
                <div slot="slides" class="slides-collection keen-slider">
                  <div class="keen-slider__slide">
                    <aes-canvas bg-color="neutrals-white" border-color="neutrals-gray2" outer-padding-top="6" outer-padding-bottom="6" outer-padding-left="6" outer-padding-right="6" padding-top="8" padding-bottom="0" padding-left="8" padding-right="8" display-border="" class="h-full" cta="{&quot;shouldDisplayArrow&quot;:true,&quot;text&quot;:&quot;Learn more&quot;,&quot;url&quot;:&quot;#&quot;,&quot;variant&quot;:&quot;arrow-link&quot;}">
                      <picture slot="multimedia">
                        <img loading="lazy" alt="" src="${sampleImage5}">
                      </picture>

                      <div slot="body">
                        <h2 class="subheadline subheadline-1">Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES</h2>
                      </div>
                    </aes-canvas>
                  </div>

                  <div class="keen-slider__slide">
                    <aes-canvas bg-color="neutrals-white" border-color="neutrals-gray2" outer-padding-top="6" outer-padding-bottom="6" outer-padding-left="6" outer-padding-right="6" padding-top="8" padding-bottom="0" padding-left="8" padding-right="8" display-border="" class="h-full" cta="{&quot;shouldDisplayArrow&quot;:true,&quot;text&quot;:&quot;Learn more&quot;,&quot;url&quot;:&quot;#&quot;,&quot;variant&quot;:&quot;arrow-link&quot;}">
                      <picture slot="multimedia">
                        <img loading="lazy" alt="" src="${sampleImage6}">
                      </picture>

                      <div slot="body">
                        <h2 class="subheadline subheadline-1">Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES</h2>
                      </div>
                    </aes-canvas>
                  </div>

                  <div class="keen-slider__slide">
                    <aes-canvas bg-color="neutrals-white" border-color="neutrals-gray2" outer-padding-top="6" outer-padding-bottom="6" outer-padding-left="6" outer-padding-right="6" padding-top="8" padding-bottom="0" padding-left="8" padding-right="8" display-border="" class="h-full" cta="{&quot;shouldDisplayArrow&quot;:true,&quot;text&quot;:&quot;Learn more&quot;,&quot;url&quot;:&quot;#&quot;,&quot;variant&quot;:&quot;arrow-link&quot;}">
                      <picture slot="multimedia">
                        <img loading="lazy" alt="" src="${sampleImage7}">
                      </picture>

                      <div slot="body">
                        <h2 class="subheadline subheadline-1">Kaua’i Island Utility Cooperative sets a new standard for carbon free energy together with AES</h2>
                      </div>
                    </aes-canvas>
                  </div>
                </div>
              </aes-slider>
            </aes-column>

            <aes-column
              col-span-default="12"
              col-span-lg="6"
              content-align="middle"
              class="px-10 md:pr-24 md:pl-24"
            >
            </aes-column>
          </aes-grid>
        </section>
      </aes-column>
    </aes-grid>
  `
}
