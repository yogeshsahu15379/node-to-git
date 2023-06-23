import {
  ALL_COLORS,
  ALL_SPACING_TOKENS,
  NEUTRAL_COLORS,
  ALL_SIZES,
  ALL_VERTICAL_ALIGNMENT,
  ALL_ORIENTATION,
} from './types'

import { IconType, LogoType, Markets, LogoVariants } from './enums'

export function format(
  first: string,
  middle: string | undefined,
  last: string | undefined,
): string {
  return (
    (first || '') +
    (middle !== undefined ? ` ${middle}` : '') +
    (last !== undefined ? ` ${last}` : '')
  )
}

/**
 * Merge into argTypes in stories for a repeatable slot content type
 * This is for a control to dump in arbitrary strings which are NOT properties
 * of a component.
 */
export const argTypeSlotContent = {
  defaultSlot: {
    name: 'Default Slot',
    description:
      'The default slot; show everything that is passed into the inner HTML of the given element. It is not an attribute of the component.',
  },
}

export const argTypeOrientation = {
  orientation: {
    name: 'Orientation',
    control: {
      type: 'radio',
      options: ALL_ORIENTATION,
    },
  },
}

export const argTypeColSpan = {
  name: 'Number of Columns to Span',
  control: { type: 'range', min: 1, max: 12, step: 1 },
}

export const argTypeGapSize = {
  name: 'Gap Size',
  control: {
    type: 'select',
    options: ['large', 'medium', 'small', 'none'],
  },
}

export const argTypeVerticalAlign = {
  name: 'Content Vertical Alignment',
  control: {
    type: 'select',
    options: ALL_VERTICAL_ALIGNMENT,
  },
}

export const argTypeSize = {
  name: 'Size',
  control: {
    type: 'select',
    options: ALL_SIZES,
  },
}

export const argTypeColor = {
  name: 'Color',
  control: {
    type: 'select',
    options: ALL_COLORS,
  },
}

export const argTypeNeutralColor = {
  name: 'Color',
  control: {
    type: 'select',
    options: NEUTRAL_COLORS,
  },
}

export const argTypeSpacing = {
  name: 'Spacing',
  control: {
    type: 'select',
    options: ALL_SPACING_TOKENS,
  },
}

export const argTypeWidth = {
  name: 'Width',
  control: {
    type: 'select',
    options: ALL_SPACING_TOKENS,
  },
}

export const argTypeImageUrl = {
  name: 'Image URL',
  description: 'The image URL to use for this demo.',
  control: {
    type: 'text',
  },
}

export const argTypeIcon = {
  name: 'Icon',
  control: {
    type: 'select',
    options: IconType,
  },
}

export const argTypeMarket = {
  name: 'Market',
  control: {
    type: 'select',
    options: Markets,
  },
}

export const argTypeLogoVariant = {
  name: 'Logo Variant',
  control: {
    type: 'select',
    options: LogoVariants,
  },
}

export const argTypeLogo = {
  name: 'Logo',
  control: {
    type: 'select',
    options: LogoType,
  },
}

export const argTypeHidden = {
  table: {
    disable: true,
  },
}

export const argTypeTarget = {
  target: {
    name: 'Link Target',
    control: {
      type: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
}

/**
 * Turn a rem string like `4rem` into a px string like `64px`
 * @param {string} remVal
 */
export const extractPx = (remVal: string) => {
  const [num, unit] = remVal.split('rem')

  return unit === 'px' || unit === undefined
    ? remVal
    : `${parseFloat(num) * 16}px`
}
