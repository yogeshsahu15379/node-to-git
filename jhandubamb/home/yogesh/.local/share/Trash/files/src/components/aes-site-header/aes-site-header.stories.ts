import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import { LogoType, IconType } from '../../utils/enums'
import { argTypeLogo } from '../../utils/utils'

export default {
  title: 'Organisms/Site Header',
  component: 'aes-site-header',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logoVersion: {
      ...argTypeLogo,
    },
    logoUrl: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    logoUrl: 'https://aes.com',
    logoVersion: LogoType.LOGO_RGB_GLOBAL,
  },
}

export const SiteHeader = ({ logoVersion, logoUrl }) => {
  return html`
    <aes-site-header>
      <a slot="logo" href="${logoUrl}" aria-label="AES Logo">
        <aes-logo logo="${ifDefined(logoVersion)}" />
      </a>

      <form slot="search-form" class="relative">
        <aes-text-input
          label-text="Search"
          field-type="text"
          field-name="search"
          hide-label
        ></aes-text-input>
        <aes-button
          variant="none"
          class="absolute top-0 right-0 transform -translate-y-px"
        >
          <aes-icon icon="${IconType.SEARCH}" class="w-6"></aes-icon>
        </aes-button>
      </form>

      <li slot="nav">
        <aes-menu-dropdown>
          <a
            slot="menu-item-trigger"
            class="menu-link"
            url="http://www.google.com"
          >
            Our products
          </a>
          <aes-menu-dropdown-content slot="menu-item-content">
            <aes-submenu-title icon=${IconType.PRODUCTS} slot="left">
              Our Products
            </aes-submenu-title>
            <ul slot="left">
              <li><a href="#" class="sub-menu-link">Overview</a></li>
              <li class="sub-menu-header"><a href="#">By product</a>
                <ul>
                  <li><a href="#" class="sub-menu-link">New clean energy</a></li>
                  <li><a href="#" class="sub-menu-link">Advanced energy networks</a></li>
                  <li><a href="#" class="sub-menu-link">Cleaner reliability</a></li>
                </ul>
              </li>
            </ul>
            <ul slot="left">
              <li class="sub-menu-header"><a href="#">By profile</a>
                <ul>
                  <li><a href="#" class="sub-menu-link">For RE100+</a></li>
                  <li><a href="#" class="sub-menu-link">For businesses</a></li>
                  <li><a href="#" class="sub-menu-link">For communities</a></li>
                </ul>
              </li>
            </ul>
            <aes-canvas slot="right">
              <img
                src="http://placeimg.com/300/200/any"
                slot="multimedia"
                class="mb-6"
              />
              <aes-heading
                slot="body"
                sub=${true}
                level="3"
                class="text-signature-aqua1"
              >
                Applying innovation with our product offerings
              </aes-heading>
            </aes-canvas>
            </div>
          </aes-menu-dropdown-content>
        </aes-menu-dropdown>
      </li>
      <li slot="nav">
        <aes-menu-dropdown>
          <a
            slot="menu-item-trigger"
            class="menu-link active"
            url="http://www.google.com"
          >
            Sustainability
          </a>
          <aes-menu-dropdown-content slot="menu-item-content">
            <aes-submenu-title icon=${IconType.SUSTAINABILITY} slot="left">
              Sustainability
            </aes-submenu-title>
            <ul slot="left">
              <li><a href="#" class="sub-menu-link">Overview</a></li>
              <li>
                <a href="#" class="sub-menu-link">Clean growth & innovation</a>
              </li>
              <li><a href="#" class="sub-menu-link">For our people</a></li>
              <li>
                <a href="#" class="sub-menu-link">Community partnerships</a>
              </li>
              <li>
                <a href="#" class="sub-menu-link">Sustainability resources</a>
              </li>
            </ul>
            <aes-canvas slot="right">
              <img
                src="http://placeimg.com/300/200/any"
                slot="multimedia"
                class="mb-6"
              />
              <aes-heading
                slot="body"
                sub=${true}
                level="3"
                class="text-signature-green1"
              >
                Leading the transition to a sustainable future
              </aes-heading>
            </aes-canvas>
          </aes-menu-dropdown-content>
        </aes-menu-dropdown>
      </li>
      <li slot="nav">
        <aes-menu-dropdown>
          <a
            slot="menu-item-trigger"
            class="menu-link"
            url="https://google.com"
          >
            Meet AES
          </a>
          <aes-menu-dropdown-content slot="menu-item-content">
            <aes-submenu-title icon=${IconType.ALL_TOGETHER} slot="left">
              Meet AES
            </aes-submenu-title>
            <ul slot="left">
              <li><a href="#" class="sub-menu-link">Overview</a></li>
              <li><a href="#" class="sub-menu-link">Our history</a></li>
              <li><a href="#" class="sub-menu-link">Our leadership</a></li>
              <li>
                <a href="#" class="sub-menu-link">Awards & recognition</a>
              </li>
            </ul>
            <aes-canvas slot="right">
              <img
                src="http://placeimg.com/300/200/any"
                slot="multimedia"
                class="mb-6"
              />
              <aes-heading
                slot="body"
                sub=${true}
                level="3"
                class="text-signature-purple1"
              >
                Driving transformation in our markets
              </aes-heading>
            </aes-canvas>
          </aes-menu-dropdown-content>
        </aes-menu-dropdown>
      </li>
      <li slot="nav">
        <aes-menu-dropdown>
          <a
            slot="menu-item-trigger"
            class="menu-link"
            url="https://google.com"
          >
            Work with us
          </a>
          <aes-menu-dropdown-content slot="menu-item-content">
            <aes-submenu-title icon=${IconType.TALENT} slot="left">
              Work with us
            </aes-submenu-title>
            <ul slot="left">
              <li><a href="#" class="sub-menu-link">Overview</a></li>
              <li><a href="#" class="sub-menu-link">Meet our people</a></li>
              <li><a href="#" class="sub-menu-link">Search jobs</a></li>
              <li><a href="#" class="sub-menu-link">Applicant privacy</a></li>
            </ul>
            <aes-canvas slot="right">
              <img
                src="http://placeimg.com/300/200/any"
                slot="multimedia"
                class="mb-6"
              />
              <aes-heading
                slot="body"
                sub=${true}
                level="3"
                class="text-signature-purple1"
              >
                Developing our talent to be as adaptable as our systems
              </aes-heading>
            </aes-canvas>
          </aes-menu-dropdown-content>
        </aes-menu-dropdown>
      </li>
      <li slot="nav">
        <aes-menu-dropdown>
          <a
            slot="menu-item-trigger"
            class="menu-link"
            url="https://google.com"
          >
            Investors
          </a>
          <aes-menu-dropdown-content slot="menu-item-content">
            <aes-submenu-title icon=${IconType.INVESTORS} slot="left">
              Investors
            </aes-submenu-title>
            <ul slot="left">
              <li><a href="#" class="sub-menu-link">Overview</a></li>
              <li><a href="#" class="sub-menu-link">Reports & filings</a></li>
              <li><a href="#" class="sub-menu-link">Investing</a></li>
              <li><a href="#" class="sub-menu-link">Subscribe to alerts</a></li>
              <li><a href="#" class="sub-menu-link">Governance</a></li>
              <li><a href="#" class="sub-menu-link">News & events</a></li>
              <li>
                <a href="#" class="sub-menu-link">Presentations & webcasts</a>
              </li>
            </ul>
            <aes-canvas slot="right">
              <img
                src="http://placeimg.com/300/200/any"
                slot="multimedia"
                class="mb-6"
              />
              <aes-heading
                slot="body"
                sub=${true}
                level="3"
                class="text-signature-blue1"
              >
                Investing in a brighter future for people and our planet
              </aes-heading>
            </aes-canvas>
          </aes-menu-dropdown-content>
        </aes-menu-dropdown>
      </li>

      <aes-drawer slot="user-buttons">
        <aes-menu-button
          slot="trigger"
          aria-label="Account Management"
          icon="${IconType.LOGIN}"
        >
          My AES
        </aes-menu-button>
        <div slot="content">
          <div class="large mb-6">What would you like to do?</div>
          <aes-drawer-item
            icon="${IconType.BILL}"
            url="http://google.com"
            class="mb-2"
          >
            Pay my bill
          </aes-drawer-item>
          <aes-drawer-item
            icon="${IconType.SERVICE}"
            url="http://google.com"
            class="mb-2"
          >
            Start/Stop service
          </aes-drawer-item>
          <aes-drawer-item
            icon="${IconType.OUTAGE}"
            url="http://google.com"
            class="mb-2"
          >
            Report an outage
          </aes-drawer-item>
          <aes-drawer-item
            icon="${IconType.LOGIN}"
            url="http://google.com"
            class="mb-2"
          >
            Login to my account
          </aes-drawer-item>
        </div>
      </aes-drawer>

      <aes-drawer slot="user-buttons">
        <aes-menu-button
          slot="trigger"
          aria-label="Language Selection"
          icon="${IconType.GLOBE}"
        >
          Global - EN
        </aes-menu-button>
        <div slot="content">
          <div class="large mb-6">Choose your location</div>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column
              col-span-default="12"
              content-align="top"
            >
              <p class="active-callout m-0">AES global</p>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              &nbsp;
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-white hover:text-neutrals-white no-underline bg-signature-blue1 px-2 py-1 rounded-xl" href="#example-eng">English</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-por">português</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-rus">български</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-vie">Tiếng Việt</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column
              col-span-default="12"
              content-align="top"
            >
              <p class="active-callout m-0">AES local</p>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Andes
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Argentina
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Brasil
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-por">português</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Bulgaria
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-rus">български</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Chile
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>


          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Colombia
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Dominicana
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              El Salvador
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
                <span class="mx-1 text-neutrals-gray5">|</span>
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              India
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
                <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Indiana
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
              <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
              <span class="mx-1 text-neutrals-gray5">|</span>
              <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>

          <aes-grid gap-size="none" is-nested class="my-4">
            <aes-column col-span-default="4" content-align="top">
              Mexico
            </aes-column>
            <aes-column col-span-default="8" content-align="top">
              <div class="text-right">
              <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-spa">español</a>
              <span class="mx-1 text-neutrals-gray5">|</span>
              <a class="inline text-xs text-neutrals-black no-underline  hover:underline hover:text-neutrals-black" href="#example-eng">English</a>
              </div>
            </aes-column>
          </aes-grid>
        </div>
      </aes-drawer>
    </aes-site-header>
  `
}
