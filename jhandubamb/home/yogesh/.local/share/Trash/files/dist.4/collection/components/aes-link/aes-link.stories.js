import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypeSlotContent } from '../../utils/utils';
export default {
  title: 'Atoms/Link',
  component: 'aes-link',
  argTypes: Object.assign(Object.assign({}, argTypeSlotContent), { href: {
      control: {
        type: 'text',
      },
    }, rel: {
      control: {
        type: 'text',
      },
    }, target: {
      control: {
        type: 'text',
      },
    } }),
  args: {
    href: '/page-that-doesnt-exist.html',
    slotContent: 'Sample Link',
  },
};
export const Link = ({ href, rel, slotContent, target }) => html `
    <aes-link
      href="${ifDefined(href)}"
      rel="${ifDefined(rel)}"
      target="${ifDefined(target)}"
    >
      ${ifDefined(slotContent)}
    </aes-link>
  `;
