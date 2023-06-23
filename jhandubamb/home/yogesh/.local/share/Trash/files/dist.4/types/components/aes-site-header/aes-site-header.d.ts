/**
 * The site header component.
 * @element aes-site-header
 * @slot logo - The logo element to display in the site header.
 * @slot nav - The list items to be included in the primary navigation.
 * @slot search-form - The markup for the search form.
 * @slot user-buttons - The area in which user account and language buttons can be placed.
 */
export declare class AesSiteHeader {
  /**
   * Whether or not the menu is open. (Med- only.)
   */
  menuIsOpen: boolean;
  /**
   * Whether or not the search is open. (Large+ only.)
   */
  searchIsOpen: boolean;
  constructor();
  private toggleMenu;
  private toggleSearch;
  render(): any;
}
