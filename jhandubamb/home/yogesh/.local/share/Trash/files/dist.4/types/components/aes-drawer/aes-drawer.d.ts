/**
 * Trigger the opening a closing of a side-drawer. Handles both the trigger
 * element and the content of the drawer
 *
 * @element aes-drawer
 * @slot trigger - Anything placed in here becomes a button that opens drawer content
 * @slot content - The markup to show in the fly-out drawer. Can be anything.
 */
export declare class AesDrawer {
  open: boolean;
  private show;
  private hide;
  private keyListener;
  private toggleOpen;
  render(): any;
}
