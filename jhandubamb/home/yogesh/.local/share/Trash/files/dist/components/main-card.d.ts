import type { Components, JSX } from "../types/components";

interface MainCard extends Components.MainCard, HTMLElement {}
export const MainCard: {
  prototype: MainCard;
  new (): MainCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
