import { Component, h, Prop } from '@stencil/core'

import { LogoType, LogoVariants, Markets } from '../../utils/enums'

/**
 * The logo component.
 * @element aes-logo
 */
@Component({
  tag: 'aes-logo',
  styleUrl: 'aes-logo.css',
  shadow: true,
})
export class AESLogo {
  /**
   * The logo type to display from ./assets.
   */
  @Prop() logo: LogoType
  /**
   * The market associated with the logo.
   */
  @Prop() market: Markets
  /**
   * The style of the logo to use.
   */
  @Prop() variant: LogoVariants

  render() {
    return <img src={this.logo} alt={'this.logo'} />
  }
}
