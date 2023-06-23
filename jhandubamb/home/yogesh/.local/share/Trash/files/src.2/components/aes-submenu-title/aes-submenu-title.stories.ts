import { html } from 'lit-html'
import { IconType } from '../../utils/enums'
import { argTypeIcon } from '../../utils/utils'

export default {
  title: 'Molecules/Submenu Title',
  component: 'aes-submenu-title',
  argTypes: {
    text: {
      name: 'Text',
      description: 'The header text',
      type: 'text',
    },
    icon: {
      ...argTypeIcon,
    },
  },
  args: {
    text: 'Our products',
    icon: IconType.PRODUCTS,
  },
}

export const SubmenuTitle = ({ text, icon }) =>
  html` <aes-submenu-title icon="${icon}"> ${text} </aes-submenu-title> `
