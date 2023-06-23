import { Component, Element, h, Host, Prop } from '@stencil/core'

/**
 * The Decor gradient component
 * @element aes-line
 */
@Component({
  tag: 'aes-line',
  styleUrl: 'aes-line.css',
  shadow: true,
})
export class AESDecor {
  /**
   * The actual DOM element for the Host
   */
  @Element() el: HTMLAesLineElement

  /**
   * Stores the IntersectionObserver instance
   */
  @Prop() animObserver: IntersectionObserver

  /**
   * The time the animation lasts
   * https://developer.mozilla.org/en-US/docs/Web/CSS/time
   */
  @Prop() animDuration = '1s'

  /**
   * Portion of the element visible to trigger the animation
   */
  @Prop() animThreshold = 0.2

  /**
   * The direction for the line to exist.
   */
  @Prop({ reflect: true }) direction: 'horizontal' | 'vertical' = 'horizontal'

  /**
   * Whether the line should be animated when
   */
  @Prop({ reflect: true }) displayAnimated = false

  private attachObserver() {
    if (this.animObserver !== undefined) {
      return
    }

    this.animObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // console.log(entry, '$$$$$$$$$$', this.animThreshold)
          if (entry.intersectionRatio >= this.animThreshold) {
            // if (this.animDuration !== '') {
            this.el.style.setProperty('--animation-duration', this.animDuration)
            // }
            this.el.classList.add('animate')
          }
          this.el.classList.add('animate')
          // }
        })
      },
      { threshold: [this.animThreshold] },
    )
  }

  private checkObserver() {
    this.attachObserver()
  }

  private cleanUpObserver() {
    this.el.classList.remove('animate')

    if (this.animObserver !== undefined) {
      this.animObserver.takeRecords()
    }
  }

  componentDidLoad() {
    if (this.displayAnimated) {
      this.checkObserver()
      this.animObserver.observe(this.el)
    }
  }

  componentDidUpdate() {
    if (this.displayAnimated) {
      this.cleanUpObserver()
      this.checkObserver()
      this.animObserver.observe(this.el)
    }
  }

  disconnectedCallback() {
    this.displayAnimated && this.animObserver.disconnect()
  }

  render() {
    return <Host />
  }
}
