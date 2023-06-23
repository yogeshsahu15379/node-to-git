import { Component, Host, h } from '@stencil/core'
/**
 * The site footer component.
 * @element aes-site-footer
 * @slot logo - The logo element to display in the site footer.
 * @slot menus - The slot that is expecting menus.
 * @slot social-links - The list of social links.
 * @slot lang-select - The language selection button.
 * @slot copyright - The area to display copyright information.
 */
@Component({
  tag: 'aes-site-footer',
  styleUrl: 'aes-site-footer.css',
  shadow: true,
})
export class AesSiteFooter {
  render() {
    return (
      <Host>
        <aes-container role="footertop" class="footer-top">
          <slot name="footer-top" />
        </aes-container>
        <nav>
          <aes-grid gap-size="none" gap-size-md="small">
            <slot name="menus" />
          </aes-grid>
        </nav>
        <aes-container>
          <div class="interactions">
            <slot name="social-links" />
            <slot name="lang-select" />
          </div>
          <slot name="copyright" />
        </aes-container>
      </Host>
    )
  }
}
