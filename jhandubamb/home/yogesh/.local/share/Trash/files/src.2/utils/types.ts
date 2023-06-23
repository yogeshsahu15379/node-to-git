import tailwindConfig from '../resolved-tailwind-config'

type Extends<T, U extends T> = U

export { ALL_COLORS, NEUTRAL_COLORS } from '../resolved-tailwind-config'

/**
 * Pass along all the Tailwind colors
 */
export type {
  Color,
  NeutralColor,
  SignatureColor,
} from '../resolved-tailwind-config'

/**
 * Build just the primary signature colors union
 */
import type { SignatureColor } from '../resolved-tailwind-config'
export type SignaturePrimaryColor = Extends<
  SignatureColor,
  | 'signature-blue1'
  | 'signature-purple1'
  | 'signature-aqua1'
  | 'signature-green1'
>
export const SIGNATURE_PRIMARY_COLORS: SignaturePrimaryColor[] = [
  'signature-blue1',
  'signature-purple1',
  'signature-aqua1',
  'signature-green1',
]

export type SpacingTokens = keyof typeof tailwindConfig.spacing

export const ALL_SPACING_TOKENS = Object.keys(
  tailwindConfig.spacing,
) as SpacingTokens[]

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6' | undefined
export type HeadingStyle =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'

export const ALL_SIZES = ['small', 'medium', 'large', 'none'] as const
type SizeTuple = typeof ALL_SIZES
export type Size = SizeTuple[number]

export const ALL_VERTICAL_ALIGNMENT = ['top', 'middle', 'bottom'] as const
type AlignmentTuple = typeof ALL_VERTICAL_ALIGNMENT
export type VerticalAlignment = AlignmentTuple[number]

export const ALL_ORIENTATION = ['vertical', 'horizontal'] as const
type OrientationTuple = typeof ALL_ORIENTATION
export type Orientation = OrientationTuple[number]

export const ALL_TEXT_INPUTS = [
  'text',
  'search',
  'password',
  'email',
  'tel',
  'number',
  'url',
] as const
type TextInputTuple = typeof ALL_TEXT_INPUTS
export type TextInput = TextInputTuple[number]

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top'

export interface LinkType {
  target?: LinkTarget
  text: string
  url: string
}
