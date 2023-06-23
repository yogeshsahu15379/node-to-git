import { Component, Prop, Host, h } from '@stencil/core'

@Component({
  tag: 'aes-progress',
  styleUrl: 'aes-progress.css',
  shadow: true,
})
export class AesProgress {
  /**
   * The value of "100%"
   */
  @Prop() max: number
  /**
   * The actual progress of the bar
   */
  @Prop() value: number

  render() {
    return (
      <Host>
        <div
          class="value"
          style={{ width: `${(this.value / this.max) * 100}%` }}
        ></div>
      </Host>
    )
  }
}
