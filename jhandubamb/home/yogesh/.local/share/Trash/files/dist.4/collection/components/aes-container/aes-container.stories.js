import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypeSlotContent } from '../../utils/utils';
export default {
  title: 'Molecules/Container',
  component: 'aes-container',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: Object.assign(Object.assign({}, argTypeSlotContent), { isNested: {
      name: 'Nested Container',
      control: {
        type: 'boolean',
      },
    } }),
};
export const Container = ({ isNested }) => html `
    <aes-container
      class="border-l-2 border-r-2 border-signature-blue1"
      is-nested="${ifDefined(isNested)}"
    >
      <aes-heading level-style="3">Container</aes-heading>
      <p>
        This is some text inside of the container. The border is just here to
        show where the container starts and ends and will not be visible on the
        actual component being used in production.
      </p>
    </aes-container>
  `;
