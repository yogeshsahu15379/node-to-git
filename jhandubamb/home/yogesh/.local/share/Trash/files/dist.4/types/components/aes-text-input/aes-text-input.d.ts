import { TextInput } from '../../utils/types';
export declare type InputOptions = {
  [name: string]: string;
};
/**
 * The text input form component.
 * @element aes-text-input
 */
export declare class AesTextInput {
  /**
   * Whether or not this is a required field.
   */
  required: boolean;
  /**
   * Whether or not this is a disabled field.
   */
  disabled: boolean;
  /**
   * Whether or not the label should be hidden.
   */
  hideLabel: boolean;
  /**
   * The text for the label.
   */
  labelText: string;
  /**
   * The type of text field.
   */
  fieldType: TextInput;
  /**
   * The name of the field.
   */
  fieldName: string;
  /**
   * Object of options for the input field. (Ex. { minlength: 5, maxlength: 10 })
   */
  inputOptions: InputOptions;
  render(): any;
}
