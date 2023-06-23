import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypeSlotContent, argTypeGapSize } from '../../utils/utils';
export default {
  title: 'Molecules/Grid',
  component: 'aes-grid',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: Object.assign(Object.assign({}, argTypeSlotContent), { gapSize: Object.assign(Object.assign({}, argTypeGapSize), { name: 'Default Gap Size' }), gapSizeSm: Object.assign(Object.assign({}, argTypeGapSize), { name: 'Gap Size on Small+' }), gapSizeMd: Object.assign(Object.assign({}, argTypeGapSize), { name: 'Gap Size on Medium+' }), gapSizeLg: Object.assign(Object.assign({}, argTypeGapSize), { name: 'Gap Size on Large+' }), gapSizeXl: Object.assign(Object.assign({}, argTypeGapSize), { name: 'Gap Size on Extra Large+' }), gapSizeXxl: Object.assign(Object.assign({}, argTypeGapSize), { name: 'Gap Size on Extra Extra Large+' }), isNested: {
      name: 'Nested Grid',
      control: {
        type: 'boolean',
      },
    } }),
};
const Template = ({ gapSize, gapSizeSm, gapSizeMd, gapSizeLg, gapSizeXl, gapSizeXxl, isNested, defaultSlot, }) => html `
  <aes-grid
    gap-size="${ifDefined(gapSize)}"
    gap-size-sm="${ifDefined(gapSizeSm)}"
    gap-size-md="${ifDefined(gapSizeMd)}"
    gap-size-lg="${ifDefined(gapSizeLg)}"
    gap-size-xl="${ifDefined(gapSizeXl)}"
    gap-size-xxl="${ifDefined(gapSizeXxl)}"
    is-nested="${ifDefined(isNested)}"
  >
    ${defaultSlot}
  </aes-grid>
`;
export const EqualColumns = Template.bind({});
EqualColumns.args = {
  gapSize: 'small',
  defaultSlot: html `
    <aes-column
      col-span-md="4"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <aes-heading level-style="3">Equal Column Grid</aes-heading>
      <p>
        This is some text inside of a grid column. All of the columns are
        equally wide. The blue borders are just here to show where the column
        starts and ends and will not be visible on the actual component being
        used in production.
      </p>
    </aes-column>
    <aes-column
      col-span-md="4"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <p>
        This is some text inside of a grid column. The blue borders are just
        here to show where the column starts and ends and will not be visible on
        the actual component being used in production.
      </p>
    </aes-column>
    <aes-column
      col-span-md="4"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <p>
        This is some text inside of a grid column. The blue borders are just
        here to show where the column starts and ends and will not be visible on
        the actual component being used in production.
      </p>
    </aes-column>
  `,
};
export const AsymmetricLeft = Template.bind({});
AsymmetricLeft.args = {
  gapSize: 'small',
  defaultSlot: html `
    <aes-column
      col-span-md="8"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <aes-heading level-style="3">Asymmetrical Grid</aes-heading>
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        this column is either twice as large or half the size of the other
        column. The blue borders are just here to show where the column starts
        and ends and will not be visible on the actual component being used in
        production.
      </p>
    </aes-column>
    <aes-column
      col-span-md="4"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        this column is either twice as large or half the size of the other
        column. The blue borders are just here to show where the column starts
        and ends and will not be visible on the actual component being used in
        production.
      </p>
    </aes-column>
  `,
};
export const AsymmetricRight = Template.bind({});
AsymmetricRight.args = {
  gapSize: 'small',
  defaultSlot: html `
    <aes-column
      col-span-md="4"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <aes-heading level-style="3">Asymmetrical Grid</aes-heading>
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        this column is either twice as large or half the size of the other
        column. The blue borders are just here to show where the column starts
        and ends and will not be visible on the actual component being used in
        production.
      </p>
    </aes-column>
    <aes-column
      col-span-md="8"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        this column is either twice as large or half the size of the other
        column. The blue borders are just here to show where the column starts
        and ends and will not be visible on the actual component being used in
        production.
      </p>
    </aes-column>
  `,
};
export const Offset = Template.bind({});
Offset.args = {
  defaultSlot: html `
    <aes-column
      col-span-default="10"
      class="border-l-2 border-r-2 border-signature-blue1"
    >
      <aes-heading level-style="3">Offset Grid</aes-heading>
      <p>
        This is an example of a grid column layout in which the content doesn't
        expand the whole width of the container. The blue borders are just here
        to show where the column starts and ends and will not be visible on the
        actual component being used in production.
      </p>
    </aes-column>
  `,
};
