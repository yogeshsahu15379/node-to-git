/**
 * The AES Accordion element for high levels of editorial control
 * @element aes-accordion
 * @slot summary - The slot to render the accordion summary or title.
 * @slot content - The primary slot to render the accordion contents.
 */
export declare class AesAccordion {
  /**
   * Whether to display the accordion in open or close state
   */
  isOpen: boolean;
  render(): any;
}
