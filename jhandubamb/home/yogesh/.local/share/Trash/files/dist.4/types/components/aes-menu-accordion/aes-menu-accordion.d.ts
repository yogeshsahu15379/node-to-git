export declare type AccordionType = 'primary' | 'secondary';
/**
 * The AES Accordion element for high levels of editorial control
 * @element aes-menu-accordion
 * @slot summary - The slot to render the accordion summary or title.
 * @slot content - The primary slot to render the accordion contents.
 */
export declare class AesMenuAccordion {
  el: HTMLAesMenuAccordionElement;
  /**
   * Whether to display the accordion in open or close state
   */
  isOpen: boolean;
  /**
   * The variant of the accordion.
   */
  variant: AccordionType;
  isCollapsible: boolean;
  hasChildren: boolean;
  private resizeTimer;
  componentDidLoad(): void;
  private onWindowResize;
  private onWindow;
  private setOpen;
  render(): any;
}
