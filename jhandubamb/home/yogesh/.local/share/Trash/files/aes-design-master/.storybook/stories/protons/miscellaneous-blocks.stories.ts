import { html } from 'lit-html'

import sampleBackgroundImage1 from '../../static/media/aes-sample-1600x900-001.jpg'
import sampleImage1 from '../../static/media/login-form-sample.png'

export default {
  title: 'Protons/Miscellaneous Blocks',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {},
}

export const LoginBlock = () => {
  return html`
  <aes-bg
    color="neutrals-gray1"
    image-url="${sampleBackgroundImage1}"
    class="bg-cover bg-center"
  >
    <aes-section vertical-padding="small">
      <aes-grid gap-size="large">
        <aes-column
          content-align="middle"
          col-span-md="4"
          col-span-default="12"
        >
          <img src="${sampleImage1}" />
        </aes-column>
        <aes-column col-span-default="12" col-span-md="1" /></aes-column>
        <aes-column
          col-span-md="7"
          col-span-default="12"
          content-align="middle"
        >
          <aes-canvas
            cta='{"shouldDisplayArrow":false,"text":"Start shopping","url":"#"}'
            display-border="false"
          >
            <img slot="multimedia" />
            <div slot="body" class="wysiwyg">
              <h2 class="heading heading-3 text-neutrals-white">Stay warm, whatever the weather, with smart thermostats from AES Indiana.</h2>
            </div>
          </aes-canvas>
        </aes-column>
      </aes-grid>
    </aes-section>
  </aes-bg>`
}
