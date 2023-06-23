import { Component, h, Listen, Prop, State, Watch } from '@stencil/core'

import tailwindThemeConfig from '../../resolved-tailwind-config'
import { Color, NeutralColor, SpacingTokens } from '../../utils/types'

export type CTAProps = {
  shouldDisplayArrow?: boolean
  text: string
  url: string
  variant?: 'primary' | 'secondary'
}

/**
 * The AES Canvas element for high levels of editorial control
 * @element aes-canvas
 * @slot multimedia - The slot to render an optional image, video or donut on top of the block.
 * @slot body - The primary slot to render editorial or WYSIWYG content.
 */
@Component({
  tag: 'aes-canvas',
  styleUrl: 'aes-canvas.css',
  shadow: true,
})
export class AesCanvas {
  /**
   * The optional padding to add to the top of the component wrapper
   */
  @Prop() outerPaddingTop: SpacingTokens

  /**
   * The optional padding to add to the bottom of the component wrapper
   */
  @Prop() outerPaddingBottom: SpacingTokens

  /**
   * The optional padding to add to the left of the component wrapper
   */
  @Prop() outerPaddingLeft: SpacingTokens

  /**
   * The optional padding to add to the right of the component wrapper
   */
  @Prop() outerPaddingRight: SpacingTokens

  /**
   * The optional padding to add to the top of the component body
   */
  @Prop() paddingTop: SpacingTokens

  /**
   * The optional padding to add to the bottom of the component body
   */
  @Prop() paddingBottom: SpacingTokens

  /**
   * The optional padding to add to the left of the component body
   */
  @Prop() paddingLeft: SpacingTokens

  /**
   * The optional padding to add to the right of the component body
   */
  @Prop() paddingRight: SpacingTokens

  /**
   * Which brand color should be used as the background of this section?
   */
  @Prop() bgColor: NeutralColor = 'transparent'

  /**
   * The image to apply to the background on hover
   */
  @Prop({ reflect: true }) bgHoverImage = ''

  /**
   * The vimeo video to show
   */
  @Prop({ reflect: true }) bgVimeoVideo = ''

  /**
   * Whether to allow autoplay
   */
  @Prop({ reflect: true }) autoplay = false

  /**
   * Whether to show controls on video
   */
  @Prop({ reflect: true }) controls = false

  /**
   * Whether to display a drop shadow on the component
   */
  @Prop({ reflect: true }) displayDropShadow = false

  /**
   * Whether to display a border around the component
   */
  @Prop({ reflect: true }) displayBorder = false

  /**
   * Which brand color should be used as the border of this section?
   */
  @Prop() borderColor: Color = 'neutrals-black'

  /**
   * what should be initial levels for video on first load
   */

  @Prop() initialVolume: number

  /**
   * Options for rendering a CTA Link button at the bottom
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

  /**
   * Add temporary support for automatic responsive padding on the Canvas.
   */
  // TODO - START BLOCK - Remove this and the window size detection when we finally add support for responsive padding.
  @State() isMobile = false

  private resizeTimer = null

  @Listen('resize', { target: 'window' })
  private onWindowResize() {
    this.onWindow()
  }

  private videoLoaded = event => {
    event.path[0].volume = this.initialVolume ? this.initialVolume : 0.5
  }

  private onWindow() {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      const docWidth = document.documentElement.clientWidth
      const breakpoint = parseInt(
        tailwindThemeConfig.screens.md.replace('px', ''),
      )
      this.isMobile = docWidth < breakpoint
    }, 200)
  }

  componentDidLoad() {
    this.onWindow()
  }

  private makeHorizontalPaddingResponsive(padding, max = 4) {
    if (this.bgColor === 'transparent' || this.borderColor === 'transparent') {
      return this.makeVerticalPaddingResponsive(padding, max)
    }
    return padding
  }

  private makeVerticalPaddingResponsive(padding, max = 10) {
    if (this.isMobile && parseInt(padding) > max) {
      return max
    }
    return padding
  }
  // TODO - END BLOCK - Remove this and the window size detection when we finally add support for responsive padding.

  render() {
    return (
      <div
        class="outer-wrapper"
        style={{ '--bgImage': `url("${this.bgHoverImage}")` }}
      >
        <aes-bg color={this.bgColor}>
          <div class="wrapper">
            <aes-spacer
              t={this.makeVerticalPaddingResponsive(this.outerPaddingTop, 10)}
              b={this.makeVerticalPaddingResponsive(
                this.outerPaddingBottom,
                10,
              )}
              l={this.makeHorizontalPaddingResponsive(this.outerPaddingLeft, 4)}
              r={this.makeHorizontalPaddingResponsive(
                this.outerPaddingRight,
                4,
              )}
            >
              <slot name="multimedia" />
              {this.bgVimeoVideo !== '' &&
                (this.autoplay === true && this.controls === false ? (
                  <video
                    autoplay // configurable
                    loop
                    muted
                    playsinline
                    onLoadStart={this.videoLoaded}
                  >
                    <source src={this.bgVimeoVideo} type="video/mp4"></source>
                  </video>
                ) : this.autoplay === false && this.controls === true ? (
                  <video
                    controls // configurable
                    loop
                    muted
                    playsinline
                    onLoadStart={this.videoLoaded}
                  >
                    <source src={this.bgVimeoVideo} type="video/mp4"></source>
                  </video>
                ) : this.autoplay === true && this.controls === true ? (
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    playsinline
                    onLoadStart={this.videoLoaded}
                  >
                    <source src={this.bgVimeoVideo} type="video/mp4"></source>
                  </video>
                ) : (
                  <video loop muted playsinline onLoadStart={this.videoLoaded}>
                    <source src={this.bgVimeoVideo} type="video/mp4"></source>
                  </video>
                ))}
              <aes-spacer
                t={this.makeVerticalPaddingResponsive(this.paddingTop, 10)}
                b={this.makeVerticalPaddingResponsive(this.paddingBottom, 10)}
                l={this.makeHorizontalPaddingResponsive(this.paddingLeft, 4)}
                r={this.makeHorizontalPaddingResponsive(this.paddingRight, 4)}
              >
                <slot name="body" />
                {this.ctaData !== undefined && (
                  <aes-button
                    shouldDisplayArrow={this.ctaData.shouldDisplayArrow}
                    url={this.ctaData.url}
                    variant={this.ctaData.variant}
                  >
                    {this.ctaData.text}
                  </aes-button>
                )}
              </aes-spacer>
            </aes-spacer>
          </div>
        </aes-bg>
      </div>
    )
  }
}
