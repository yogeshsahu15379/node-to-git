import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
export default {
  title: 'Atoms/Language Select',
  component: 'aes-i18n-select',
};
export const LanguageSelect = ({ options, disabled }) => html `
    <aes-i18n-select
      value="en"
      options="${options}"
      class="w-64"
      disabled="${ifDefined(disabled)}"
    ></aes-i18n-select>
  `;
LanguageSelect.args = {
  options: JSON.stringify([
    { url: 'http://issue-89-aes.kube.fayze2.com/', value: 'Global' },
    {
      url: 'http://argentina-issue-89-aes.kube.fayze2.com/',
      value: 'Argentina',
    },
    {
      url: 'http://brasil-issue-89-aes.kube.fayze2.com/',
      value: 'Brasil',
    },
    {
      url: 'http://bulgaria-issue-89-aes.kube.fayze2.com/',
      value: 'Bulgaria',
    },
    { url: 'http://chile-issue-89-aes.kube.fayze2.com/', value: 'Chile' },
    {
      url: 'http://colombia-issue-89-aes.kube.fayze2.com/',
      value: 'Colombia',
    },
    {
      url: 'http://dominicana-issue-89-aes.kube.fayze2.com/',
      value: 'Dominicana',
    },
    {
      url: 'http://elsalvador-issue-89-aes.kube.fayze2.com/',
      value: 'El Salvador',
    },
    { url: 'http://india-issue-89-aes.kube.fayze2.com/', value: 'India' },
    {
      url: 'http://indiana-issue-89-aes.kube.fayze2.com/',
      value: 'Indiana',
    },
    {
      url: 'http://mexico-issue-89-aes.kube.fayze2.com/',
      value: 'Mexico',
    },
    { url: 'http://ohio-issue-89-aes.kube.fayze2.com/', value: 'Ohio' },
    {
      url: 'http://panama-issue-89-aes.kube.fayze2.com/',
      value: 'Panama',
    },
    {
      url: 'http://puertorico-issue-89-aes.kube.fayze2.com/',
      value: 'Puerto Rico',
    },
    {
      url: 'http://vietnam-issue-89-aes.kube.fayze2.com/',
      value: 'Vietnam',
    },
  ]),
};
