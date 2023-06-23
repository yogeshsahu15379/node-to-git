import { Component, Host, h, State } from '@stencil/core'
import { IconType } from '../../utils/enums'

/**
 * The site header component.
 * @element aes-site-header
 * @slot logo - The logo element to display in the site header.
 * @slot nav - The list items to be included in the primary navigation.
 * @slot search-form - The markup for the search form.
 * @slot user-buttons - The area in which user account and language buttons can be placed.
 */
@Component({
  tag: 'aes-site-header',
  styleUrl: 'aes-site-header.css',
  shadow: true,
})
export class AesSiteHeader {
  /**
   * Whether or not the menu is open. (Med- only.)
   */
  @State() menuIsOpen = false

  /**
   * Whether or not the search is open. (Large+ only.)
   */
  @State() searchIsOpen = false

  constructor() {
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
  }

  private toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen
  }

  private toggleSearch() {
    this.searchIsOpen = !this.searchIsOpen
  }

  render() {
    return (
      <Host>
        <header>
          <aes-container class="wrapper">
            <slot name="logo" />

            <div
              class={{
                open: this.menuIsOpen,
                overlay: true,
              }}
            >
              <aes-container class="nav-wrapper">
                <div class="nav-scrollable">
                  <div
                    class={{
                      open: this.searchIsOpen,
                      search: true,
                    }}
                  >
                    <slot name="search-form" />
                  </div>

                  <nav role="navigation" aria-label="main navigation">
                    <ul>
                      <slot name="nav" />
                    </ul>
                  </nav>

                  <aes-button
                    class="menu-close"
                    onClick={this.toggleMenu}
                    aria-label="Close Menu"
                    variant="none"
                  >
                    <aes-icon icon={IconType.CLOSE} />
                  </aes-button>
                </div>
              </aes-container>
            </div>

            <slot name="user-buttons" />

            <aes-button
              class="menu-open"
              onClick={this.toggleMenu}
              aria-label="Open Menu"
              variant="none"
            >
              <aes-icon class="w-6" icon={IconType.AES_HAMBURGER} />
            </aes-button>

            {/* <aes-menu-button
              class="search-open"
              onClick={this.toggleSearch}
              aria-label="Language Selection"
              icon={IconType.SEARCH}
            >
              Search
            </aes-menu-button> */}
          </aes-container>
        </header>
      </Host>
    )
  }
}
