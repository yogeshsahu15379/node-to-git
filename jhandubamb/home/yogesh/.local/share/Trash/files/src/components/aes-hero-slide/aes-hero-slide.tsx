import { Component, Host, Prop, h, State, Watch } from '@stencil/core'

export type CTAProps = {
  text: string
  url: string
}

/**
 * A slide object in the hero slider.
 * @element aes-hero-slide
 */
@Component({
  tag: 'aes-hero-slide',
  styleUrl: 'aes-hero-slide.css',
  shadow: true,
})
export class AesHeroSlide {
  /**
   * Text that appears above the headline
   */
  @Prop() eyebrow: string
  /**
   * The main headline
   */
  @Prop() headline: string
  /**
   * Link and text for button
   */
  @Prop() cta: CTAProps | string

  @State() ctaData: CTAProps

  componentWillLoad() {
    this.parseCtaData(this.cta)
  }

  @Watch('cta')
  parseCtaData(newValue: CTAProps | string) {
    if (typeof newValue === 'string') {
      this.ctaData = JSON.parse(newValue)
      return
    }

    this.ctaData = newValue
  }

  render() {
    return (
      <Host>
        <aes-heading class="eyebrow" sub={true} level={3}>
          {this.eyebrow}
        </aes-heading>

        <aes-heading class="title" level={2} levelStyle={3}>
          {this.headline}
        </aes-heading>

        {this?.ctaData?.url && (
          <aes-button
            url={this.ctaData.url}
            variant="primary"
            shouldDisplayArrow={true}
          >
            {this.ctaData.text}
          </aes-button>
        )}
      </Host>
    )
  }
}
