import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

export default {
  title: 'Molecules/Language Selector',
  component: 'aes-language-selector',
}

const Template = ({ languageSelector }) =>
  html`
    <aes-language-selector language-selector="${ifDefined(languageSelector)}">
    </aes-language-selector>
  `

export const dropDown = Template.bind({})
dropDown.args = {
  LanguageSelector: [
    {
      title: 'Español',
    },
    {
      title: 'български',
    },
    {
      title: 'Português',
    },
    {
      title: 'Tiếng Việt',
    },
  ],
}
