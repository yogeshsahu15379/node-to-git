import { html } from 'lit-html';
export default {
  title: 'Molecules/Menu Accordion',
  component: 'aes-menu-accordion',
};
export const Default = () => html `
    <aes-menu-accordion>
      <span slot="summary">Applying innovation</span>
      <li slot="menu">
        <aes-menu-link href="#">Products that innovate</aes-menu-link>
      </li>
      <li slot="menu">
        <aes-menu-link href="#">New clean energy</aes-menu-link>
      </li>
      <li slot="menu">
        <aes-menu-link href="#">Advanced energy networks</aes-menu-link>
      </li>
      <li slot="menu">
        <aes-menu-link href="#">Cleaner reliability</aes-menu-link>
      </li>
      <li slot="menu">
        <aes-menu-link href="#">Scalable ecosystems</aes-menu-link>
      </li>
    </aes-menu-accordion>
  `;
