import tailwindConfig from '../resolved-tailwind-config';
export { ALL_COLORS, NEUTRAL_COLORS } from '../resolved-tailwind-config';
export const SIGNATURE_PRIMARY_COLORS = [
  'signature-blue1',
  'signature-purple1',
  'signature-aqua1',
  'signature-green1',
];
export const ALL_SPACING_TOKENS = Object.keys(tailwindConfig.spacing);
export const ALL_SIZES = ['small', 'medium', 'large', 'none'];
export const ALL_VERTICAL_ALIGNMENT = ['top', 'middle', 'bottom'];
export const ALL_ORIENTATION = ['vertical', 'horizontal'];
export const ALL_TEXT_INPUTS = [
  'text',
  'search',
  'password',
  'email',
  'tel',
  'number',
  'url',
];
