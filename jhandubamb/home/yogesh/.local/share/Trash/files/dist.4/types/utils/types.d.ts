import tailwindConfig from '../resolved-tailwind-config';
declare type Extends<T, U extends T> = U;
export { ALL_COLORS, NEUTRAL_COLORS } from '../resolved-tailwind-config';
/**
 * Pass along all the Tailwind colors
 */
export type { Color, NeutralColor, SignatureColor, } from '../resolved-tailwind-config';
/**
 * Build just the primary signature colors union
 */
import type { SignatureColor } from '../resolved-tailwind-config';
export declare type SignaturePrimaryColor = Extends<SignatureColor, 'signature-blue1' | 'signature-purple1' | 'signature-aqua1' | 'signature-green1'>;
export declare const SIGNATURE_PRIMARY_COLORS: SignaturePrimaryColor[];
export declare type SpacingTokens = keyof typeof tailwindConfig.spacing;
export declare const ALL_SPACING_TOKENS: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
export declare type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6' | undefined;
export declare type HeadingStyle = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';
export declare const ALL_SIZES: readonly ["small", "medium", "large", "none"];
declare type SizeTuple = typeof ALL_SIZES;
export declare type Size = SizeTuple[number];
export declare const ALL_VERTICAL_ALIGNMENT: readonly ["top", "middle", "bottom"];
declare type AlignmentTuple = typeof ALL_VERTICAL_ALIGNMENT;
export declare type VerticalAlignment = AlignmentTuple[number];
export declare const ALL_ORIENTATION: readonly ["vertical", "horizontal"];
declare type OrientationTuple = typeof ALL_ORIENTATION;
export declare type Orientation = OrientationTuple[number];
export declare const ALL_TEXT_INPUTS: readonly ["text", "search", "password", "email", "tel", "number", "url"];
declare type TextInputTuple = typeof ALL_TEXT_INPUTS;
export declare type TextInput = TextInputTuple[number];
export declare type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
export interface LinkType {
  target?: LinkTarget;
  text: string;
  url: string;
}
