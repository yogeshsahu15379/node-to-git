import { Component, Host, h, Prop } from '@stencil/core'
import { TextInput } from '../../utils/types'

export type InputOptions = {
  [name: string]: string
}

/**
 * The text input form component.
 * @element aes-text-input
 */
@Component({
  tag: 'aes-text-input',
  styleUrl: 'aes-text-input.css',
  shadow: true,
})
export class AesTextInput {
  /**
   * Whether or not this is a required field.
   */
  @Prop({ reflect: true }) required: boolean

  /**
   * Whether or not this is a disabled field.
   */
  @Prop({ reflect: true }) disabled: boolean

  /**
   * Whether or not the label should be hidden.
   */
  @Prop({ reflect: true }) hideLabel: boolean

  /**
   * The text for the label.
   */
  @Prop() labelText: string

  /**
   * The type of text field.
   */
  @Prop() fieldType: TextInput = 'text'

  /**
   * The name of the field.
   */
  @Prop() fieldName: string

  /**
   * Object of options for the input field. (Ex. { minlength: 5, maxlength: 10 })
   */
  @Prop() inputOptions: InputOptions

  render() {
    return (
      <Host>
        <label htmlFor={this.fieldName} class={{ hide: this.hideLabel }}>
          {this.labelText}
        </label>
        <input
          type={this.fieldType}
          name={this.fieldName}
          disabled={this.disabled}
          required={this.required}
          placeholder={this.hideLabel ? this.labelText : ''}
          {...this.inputOptions}
        />
      </Host>
    )
  }
}
