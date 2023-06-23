import type { Components, JSX } from "../types/components";

interface OurFeatures extends Components.OurFeatures, HTMLElement {}
export const OurFeatures: {
  prototype: OurFeatures;
  new (): OurFeatures;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
