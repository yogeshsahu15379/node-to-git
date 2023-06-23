import { create } from '@storybook/theming/create'

import logoRGB from '../src/components/aes-icon/assets/logo-rgb.svg'

export default create({
  base: 'light',
  brandTitle: 'AES Design System Storybook',
  brandUrl: 'https://aes.com',
  brandImage: logoRGB,

  fontBase: 'neue-haas-grotesk-text, Helvetica, Arial, sans-serif',
})
