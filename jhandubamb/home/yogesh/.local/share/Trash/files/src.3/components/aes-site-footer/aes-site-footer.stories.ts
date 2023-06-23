import { html } from 'lit-html'
import { IconType, LogoType } from '../../utils/enums'

export default {
  title: 'Organisms/Site Footer',
  component: 'aes-site-footer',
  parameters: {
    layout: 'fullscreen',
  },
}

export const SiteFooter = ({ langOptions }) => {
  return html`
    <aes-site-footer>
      <aes-logo
        logo="${LogoType.LOGO_RGB_GLOBAL}"
        slot="footer-top"
        class="w-16 h-6"
      /></aes-logo>

      <aes-back-to-top-button slot="footer-top">
        Back to top
      </aes-back-to-top-button>

      <aes-menu-accordion slot="menus">
        <a class="menu-link" href="#" slot="summary">Applying innovation</a>
        <li slot="menu">
          <a class="menu-link" href="#">Products that innovate</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">New clean energy</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Advanced energy networks</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Cleaner reliability</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Scalable ecosystems</a class="menu-link">
        </li>
      </aes-menu-accordion>

      <aes-menu-accordion slot="menus">
        <a class="menu-link" href="#" slot="summary">Leading the transition</a>
        <li slot="menu">
          <a class="menu-link" href="#">A sustainable future</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Clean growth & innovation</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">For our people</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Community partnerships</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Sustainability resources</a class="menu-link">
        </li>
      </aes-menu-accordion>

      <aes-menu-accordion slot="menus">
        <a class="menu-link" href="#" slot="summary">Driving transformation</a>
        <li slot="menu"><a class="menu-link" href="#">Meet AES</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">Global x local</a class="menu-link">
        </li>
        <li slot="menu"><a class="menu-link" href="#">Our history</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">Our leadership</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Awards & recognition</a class="menu-link">
        </li>
      </aes-menu-accordion>

      <aes-menu-accordion slot="menus">
        <a class="menu-link" href="#" slot="summary">Developing our talent</a>
        <li slot="menu">
          <a class="menu-link" href="#">Work with us</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Meet our people</a class="menu-link">
        </li>
        <li slot="menu"><a class="menu-link" href="#">Search jobs</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">Applicant privacy</a class="menu-link">
        </li>
      </aes-menu-accordion>

      <aes-menu-accordion variant="secondary" slot="menus">
      <a class="menu-link" href="#" slot="summary">For investors</a>
        <li slot="menu"><a class="menu-link" href="#">Investors</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">Reports & filings</a class="menu-link">
        </li>
        <li slot="menu"><a class="menu-link" href="#">Investing</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">Subscribe to alerts</a class="menu-link">
        </li>
        <li slot="menu"><a class="menu-link" href="#">Governance</a class="menu-link"></li>
      </aes-menu-accordion>

      <aes-menu-accordion variant="secondary" slot="menus">
        <a class="menu-link" href="#" slot="summary">For the press</a>
        <li slot="menu"><a class="menu-link" href="#">Press</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">News & events</a class="menu-link">
        </li>
        <li slot="menu"><a class="menu-link" href="#">Media kit</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">Presentations & webcasts</a class="menu-link">
        </li>
      </aes-menu-accordion>

      <aes-menu-accordion variant="secondary" slot="menus">
        <a class="menu-link" href="#" slot="summary">For suppliers</a>
        <li slot="menu"><a class="menu-link" href="#">Suppliers</a class="menu-link"></li>
        <li slot="menu">
          <a class="menu-link" href="#">Prospective suppliers</a class="menu-link">
        </li>
        <li slot="menu">
          <a class="menu-link" href="#">Current suppliers</a class="menu-link">
        </li>
      </aes-menu-accordion>

      <aes-menu-accordion variant="secondary" slot="menus">
        <a class="menu-link" href="#" slot="summary">Get in touch</a>
      </aes-menu-accordion>

      <a slot="social-links">
        <aes-icon icon="${IconType.TWITTER_BLACK}" class="h-6 w-6"></aes-icon>
      </a>
      <a slot="social-links">
        <aes-icon icon="${IconType.LINKEDIN_BLACK}" class="h-6 w-6"></aes-icon>
      </a>
      <a slot="social-links">
        <aes-icon icon="${IconType.INSTAGRAM_BLACK}" class="h-6 w-6"></aes-icon>
      </a>
      <a slot="social-links">
        <aes-icon icon="${IconType.YOUTUBE_BLACK}" class="h-6 w-6"></aes-icon>
      </a>
      <a slot="social-links">
        <aes-icon icon="${IconType.FACEBOOK_BLACK}" class="h-6 w-6"></aes-icon>
      </a>
      <a slot="social-links">
        <aes-icon icon="${IconType.GLASSDOOR_BLACK}" class="h-6 w-6"></aes-icon>
      </a>

      <aes-i18n-select
        slot="lang-select"
        value="en"
        .options="${langOptions}"
      ></aes-i18n-select>

      <p class="p text-base" slot="copyright">
        Copyright © 2009-2020 The AES Corporation. All rights reserved.
      </p>
      <p class="p text-base" slot="copyright">
        Reproduction in whole or in part in any form or medium without the
        express written permission of The AES Corporation is prohibited. AES and
        the AES logo are trademarks of The AES Corporation.
      </p>
    </aes-site-footer>
  `
}
SiteFooter.args = {
  langOptions: [
    {
      langcode: 'en',
      value: 'Global-EN',
    },
    {
      langcode: 'es',
      value: 'Global-ES',
    },
    {
      langcode: 'de',
      value: 'Global-DE',
    },
    {
      langcode: 'it',
      value: 'Global-IT',
    },
  ],
}
