import { html } from 'lit-html';
export default {
  title: 'Protons/Timelines/Custome Line',
  component: 'aes-custome-line',
};
const Template = () => html ` <aes-custome-line /> `;
export const Default = Template.bind({});
Default.args = {};
export const Placeholder = Template.bind({});
Placeholder.args = {
  hideLabel: true,
};
// <aes-pradeep
//         field-type="${fieldType}"
//         label-text="${labelText}"
//         field-name="${fieldName}"
//         hide-label="${hideLabel}"
//         required="${ifDefined(required)}"
//         disabled="${ifDefined(disabled)}"
//       >
//       <div class="tm-scroll"><span></span></div>
//       <input/>
//       </aes-pradeep>
