import { Component, Host, h, Prop, Element, Watch } from '@stencil/core'
import { jarallax } from 'jarallax'

/**
 * The image component, with support for parallax scrolling.
 * @element aes-image
 *
 * @slot multimedia - The image to be presented.
 * @slot caption - The caption text for the image.
 */
@Component({
  tag: 'aes-image',
  styleUrl: 'aes-image.css',
  shadow: true,
})
export class AesImage {
  /**
   * Should this image be a parallax instance?
   */
  @Prop({ reflect: true }) parallax: boolean

  @Element() el: HTMLAesImageElement
  private parallaxContainer: HTMLElement

  @Watch('parallax')
  toggleParallax() {
    if (this.parallax) {
      // Start Jarallax.js
      jarallax(this.parallaxContainer, {
        speed: '0.5',
        imgElement: this.el.querySelector('img'),
      })
    } else {
      jarallax(this.parallaxContainer, 'destroy')
    }
  }

  componentDidLoad() {
    this.toggleParallax()
  }

  render() {
    return (
      <Host>
        <figure ref={el => (this.parallaxContainer = el as HTMLInputElement)}>
          <slot name="multimedia" />
        </figure>
        <figcaption>
          <slot name="caption" />
        </figcaption>
      </Host>
    )
  }
}
