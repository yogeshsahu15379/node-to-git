export declare type SelectOption = {
  url: string;
  value: string;
};
/**
 * The language select button.
 * @element aes-i18n-select
 */
export declare class AesI18nSelect {
  /**
   * Whether or not the select box is disabled.
   */
  disabled: boolean;
  /**
   * The url that the user is on.
   */
  value: string;
  /**
   * The list of options that should be shown.
   */
  options: string;
  optionList: SelectOption[];
  constructor();
  private redirectUser;
  render(): any;
}
