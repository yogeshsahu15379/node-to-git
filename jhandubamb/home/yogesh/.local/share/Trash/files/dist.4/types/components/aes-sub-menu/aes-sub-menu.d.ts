/**
 * The Sub Menu.
 * @element aes-sub-menu
 */
export declare class AesSubMenu {
  /**
   * for sub menu titles and links
   */
  subMenu: ({
    url: string;
    title: string;
    external: boolean;
    colorvariation: string;
  } | {
    url: string;
    external: boolean;
    title?: undefined;
    colorvariation?: undefined;
  })[];
  render(): any;
}
