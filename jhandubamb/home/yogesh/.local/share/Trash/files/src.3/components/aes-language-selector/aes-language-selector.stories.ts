import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
// import { languageSelectorVariant } from './aes-language-selector'

const test= [
  {
    title: 'English',
    value: '0',
  },
  {
    title: 'Español',
    value: '1',
  },
  {
    title: 'български',
    value: '2',
  },
  {
    title: 'Português',
    value: '3',
  },
  {
    title: 'Tiếng Việt',
    value: '4',
  },
];

export default {
  title: 'Molecules/Language Selector',
  component: 'aes-language-selector',
  argTypes: {
    language: [{
      title: String,
      value: String,
    }]
  },
  args: {
    languageselector: test,
  }
}


const Template = ({ languageselector }) =>
  html`
    <aes-language-selector languageselector=${JSON.stringify(languageselector)} class=${languageselector}>
    </aes-language-selector>
  `;


export const dropDown = Template.bind({})
dropDown.args = {
  languageselector: test,
  
}
