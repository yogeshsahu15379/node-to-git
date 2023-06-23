import { html } from 'lit-html'
import { IconType } from '../../utils/enums'

export default {
  title: 'Organisms/Menu',
  component: 'aes-menu-dropdown',
}

export const MenuDropdownOneColumn = () => html`
  <aes-menu-dropdown>
    <a slot="menu-item-trigger" class="menu-link" url="http://www.google.com">
      Our products
    </a>
    <aes-menu-dropdown-content slot="menu-item-content">
      <aes-submenu-title icon=${IconType.PRODUCTS} slot="left">
        Our Products
      </aes-submenu-title>
      <ul slot="left">
        <li><a href="#" class="sub-menu-link">Overview</a></li>
        <li class="sub-menu-header">
          <a href="#">By product</a>
          <ul>
            <li><a href="#" class="sub-menu-link">New clean energy</a></li>
            <li>
              <a href="#" class="sub-menu-link">Advanced energy networks</a>
            </li>
            <li><a href="#" class="sub-menu-link">Cleaner reliability</a></li>
          </ul>
        </li>
      </ul>
      <ul slot="left">
        <li class="sub-menu-header">
          <a href="#">By profile</a>
          <ul>
            <li><a href="#" class="sub-menu-link">For RE100+</a></li>
            <li><a href="#" class="sub-menu-link">For businesses</a></li>
            <li><a href="#" class="sub-menu-link">For communities</a></li>
          </ul>
        </li>
      </ul>
    </aes-menu-dropdown-content>
  </aes-menu-dropdown>
`
MenuDropdownOneColumn.decorators = [
  Story => html`<div class="p-6 lg:pl-20">${Story()}</div>`,
]

export const MenuDropdownTwoColumn = () => html`
  <aes-menu-dropdown>
    <a slot="menu-item-trigger" class="menu-link" url="http://www.google.com">
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
`
MenuDropdownTwoColumn.decorators = [
  Story => html`<div class="p-6 lg:pl-20">${Story()}</div>`,
]
