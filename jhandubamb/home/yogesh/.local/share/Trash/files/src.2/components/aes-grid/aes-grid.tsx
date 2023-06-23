import { Component, Host, h, Prop } from '@stencil/core'
import { Size } from '../../utils/types'

/**
 * The grid component.
 *
 * @element aes-grid
 * @slot defaultSlot
 */
@Component({
  tag: 'aes-grid',
  styleUrl: 'aes-grid.css',
  shadow: true,
})
export class AesGrid {
  /**
   * How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSize: Size = 'small'

  /**
   * How much of a gap should exist between columns on small+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeSm: Size

  /**
   * How much of a gap should exist between columns on medium+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeMd: Size

  /**
   * How much of a gap should exist between columns on large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeLg: Size

  /**
   * How much of a gap should exist between columns on extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeXl: Size

  /**
   * How much of a gap should exist between columns on extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeXxl: Size

  /**
   * Whether or not this is a nested grid. If it's nested, remove padding from the container.
   */
  @Prop() isNested = false

  render() {
    return (
      <Host>
        <aes-container is-nested={this.isNested}>
          <slot></slot>
        </aes-container>
      </Host>
    )
  }
}
