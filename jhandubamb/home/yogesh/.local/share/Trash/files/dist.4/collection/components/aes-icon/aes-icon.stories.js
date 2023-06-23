import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { IconType } from '../../utils/enums';
import { argTypeIcon } from '../../utils/utils';
export default {
  title: 'Atoms/Icon',
  component: 'aes-icon',
  argTypes: {
    icon: Object.assign({}, argTypeIcon),
    url: {
      control: {
        type: 'text',
      },
    },
  },
};
const Template = ({ icon, url }) => html `
    <aes-icon
      class="w-12"
      icon="${ifDefined(icon)}"
      url="${ifDefined(url)}"
    ></aes-icon>
  `;
export const ProvidedIcon = Template.bind({});
ProvidedIcon.args = {
  icon: IconType.LOGIN,
};
export const RemoteIcon = Template.bind({});
RemoteIcon.args = {
  url: 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/address-book.svg',
};
export const AllIcons = () => html `
  <p class="mb-8">
    Hover on boxes to apply a darker background and see white icons.
  </p>
  <div class="grid grid-cols-6 gap-4">
    ${Object.values(IconType).map(icon => html `
          <div
            class="flex flex-col items-center justify-between p-4 text-center border border-solid border-neutrals-gray2 rounded-lg hover:bg-neutrals-gray2"
          >
            <aes-icon class="w-2/3" icon="${ifDefined(icon)}"></aes-icon>
            <div class="mt-4 text-sm">${icon}</div>
          </div>
        `)}
  </div>
`;
