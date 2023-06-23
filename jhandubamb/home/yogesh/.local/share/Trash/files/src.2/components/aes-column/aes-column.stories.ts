import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import { repeat } from 'lit-html/directives/repeat'

import {
  argTypeSlotContent,
  argTypeColSpan,
  argTypeVerticalAlign,
} from '../../utils/utils'

export default {
  title: 'Molecules/Content Column',
  component: 'aes-column',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...argTypeSlotContent,
    colSpanDefault: {
      ...argTypeColSpan,
      name: 'Default Number of Columns to Span',
      defaultValue: 12,
    },
    colSpanSm: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Small+',
    },
    colSpanMd: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Medium+',
    },
    colSpanLg: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Large+',
    },
    colSpanXl: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Extra Large+',
    },
    colSpanXxl: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Extra Extra Large+',
    },
    numContentCols: {
      ...argTypeColSpan,
      name: 'Number of Content Blocks',
      description: 'The number of blocks to place for this demo.',
      defaultValue: 12,
    },
    verticalAlignment: {
      ...argTypeVerticalAlign,
      name: 'Column Content Vertical Alignment',
    },
  },
  decorators: [
    Story => html`
      <aes-container>
        <aes-heading level-style="3">Responsive Grid</aes-heading>
      </aes-container>
      <aes-grid gap-size="small"> ${Story()} </aes-grid>
    `,
  ],
}

const Template = ({
  colSpanDefault,
  colSpanSm,
  colSpanMd,
  colSpanLg,
  colSpanXl,
  colSpanXxl,
  numContentCols,
  verticalAlignment,
}) => {
  const colArray = new Array(numContentCols)
  return repeat(
    colArray,
    () => html`
      <aes-column
        content-align="${ifDefined(verticalAlignment)}"
        col-span-default="${colSpanDefault}"
        col-span-sm="${ifDefined(colSpanSm)}"
        col-span-md="${ifDefined(colSpanMd)}"
        col-span-lg="${ifDefined(colSpanLg)}"
        col-span-xl="${ifDefined(colSpanXl)}"
        col-span-xxl="${ifDefined(colSpanXxl)}"
        class="border-2 border-signature-blue1"
      >
        <p>
          This is an example of a grid column layout in which the content
          doesn't expand the whole width of the container. The blue borders are
          just here to show where the column starts and ends and will not be
          visible on the actual component being used in production.
        </p>
      </aes-column>
    `,
  )
}

export const ResponsiveColumns = Template.bind({})
ResponsiveColumns.args = {
  colSpanDefault: 12,
  colSpanSm: 6,
  colSpanMd: 4,
  colSpanLg: 3,
  colSpanXl: 3,
  colSpanXxl: 3,
  numContentCols: 12,
  verticalAlignment: 'top',
}
