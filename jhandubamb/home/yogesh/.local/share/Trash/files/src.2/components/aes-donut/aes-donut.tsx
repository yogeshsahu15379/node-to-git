import { Component, Prop, Host, h } from '@stencil/core'

import { SignaturePrimaryColor } from '../../utils/types'

import tailwindThemeConfig from '../../resolved-tailwind-config'

/**
 * The "donut" radial percentage graph element
 *
 * @element aes-donut
 */
@Component({
  tag: 'aes-donut',
  styleUrl: 'aes-donut.css',
  shadow: true,
})
export class AesDonut {
  /**
   * Thickness of stroke
   */
  @Prop() strokeWidth = 5
  /**
   * Percent of circumference color line fills
   */
  @Prop() percent = 65
  /**
   * Only accepts the 4 signature colors
   */
  @Prop({ reflect: true }) color: SignaturePrimaryColor = 'signature-purple1'
  /**
   * We want circumference to always be 100
   */
  private circumference = 100
  /**
   * Therefore circle
   */
  private radius = this.circumference / (Math.PI * 2)
  /**
   * But viewbox and x/y must adjust for stroke width (stroke grows out)
   */
  private center = this.radius + this.strokeWidth
  /**
   * Sets our viewport size
   */
  private bounds = this.center * 2
  /**
   * Dashed strokes start at 3 o'clock, we need to rotate them back to 12 o'clock
   */
  private dashOffset = 25
  /**
   * Thin line between sections
   */
  private border = 0.5
  /**
   * Generates the stroke-dasharray string, ie '75 25', takes into account border
   * @param val
   */
  private dashArrayString = val =>
    `${val - this.border} ${100 - val + this.border}`
  /**
   * stroke-dashoffset lets us start/stop the dash at different places on circle
   * @param previous
   */
  private dashOffsetString = previous =>
    this.dashOffset + (previous ? 100 - previous : 0)

  render() {
    return (
      <Host>
        <svg viewBox={`0 0 ${this.bounds} ${this.bounds}`}>
          {[this.percent, 100 - this.percent].map((val, i, dashes) => (
            <circle
              fill="transparent"
              cx={this.center}
              cy={this.center}
              r={this.radius}
              stroke={
                i !== 0 && val !== 0
                  ? tailwindThemeConfig.colors.neutrals.gray2
                  : null
              }
              stroke-width={this.strokeWidth}
              stroke-dasharray={this.dashArrayString(val)}
              stroke-dashoffset={this.dashOffsetString(dashes[i - 1])}
            />
          ))}
          <text
            x="50%"
            y="50%"
            alignment-baseline="middle"
            text-anchor="middle"
            stroke-width="0"
            font-size="8"
            class={`this.color`}
          >
            {this.percent}%
          </text>
        </svg>
      </Host>
    )
  }
}
