import { Component, h, Host, Prop, State } from '@stencil/core'
import { IconType } from '../../utils/enums'

export type SelectOption = {
  url: string
  value: string
}

/**
 * The language select button.
 * @element aes-i18n-select
 */
@Component({
  tag: 'aes-i18n-select',
  styleUrl: 'aes-i18n-select.css',
  shadow: true,
})
export class AesI18nSelect {
  /**
   * Whether or not the select box is disabled.
   */
  @Prop({ reflect: true }) disabled = false

  /**
   * The url that the user is on.
   */
  @Prop() value: string

  /**
   * The list of options that should be shown.
   */
  @Prop() options: string

  @State() optionList: SelectOption[]

  constructor() {
    this.optionList = JSON.parse(this.options)
    this.redirectUser = this.redirectUser.bind(this)
  }

  private redirectUser(event: Event & { target: HTMLInputElement }) {
    console.log('@@@@@@@@@@@@@', event)
    window.location.href = event.target.value
  }

  render() {
    return (
      <Host>
        <label class="hidden">option</label>
        <select
          name="option"
          onChange={this.redirectUser}
          disabled={this.disabled}
        >
          {this.optionList.map(v => (
            <option value={v.url} selected={v.url === this.value}>
              {v.value}
            </option>
          ))}
        </select>
        <aes-icon icon={IconType.I18N_WHITE} class="white" />
        <aes-icon icon={IconType.I18N_GRAY} class="gray" />
      </Host>
    )
  }
}
