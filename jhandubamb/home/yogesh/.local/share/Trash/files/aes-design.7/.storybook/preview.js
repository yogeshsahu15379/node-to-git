import { addParameters, setCustomElements } from '@storybook/web-components'
import { defineCustomElements } from '../dist/esm/loader'

import customElements from './custom-elements.json'
import customTheme from './CustomTheme'

import './storybook-styles.css'

defineCustomElements()
setCustomElements(customElements)

/**
 * Set responsive table headers.
 */
const makeTablesResponsive = () => {
  const tables = document.querySelectorAll('.wysiwyg table')
  tables.forEach((v, k) => {
    const tableId = `table-${k}`
    v.setAttribute('id', tableId)
    const thead =
      v.querySelectorAll('thead th') || v.querySelectorAll('tfoot th')
    if (thead) {
      const headers = [...thead]
        .map(
          (v, k) =>
            `#${tableId} td:nth-of-type(${k + 1}):before { content: "${
              v.innerText
            }: " }`,
        )
        .join('\n')
      const style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      style.innerHTML = headers
      document.getElementsByTagName('head')[0].appendChild(style)
    }
  })
}

document.addEventListener('DOMContentLoaded', function loader() {
  document.removeEventListener('DOMContentLoaded', loader)
  makeTablesResponsive()
})

addParameters({
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    expanded: true,
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Protons',
        'Atoms',
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
      ],
    },
  },
  docs: {
    theme: customTheme,
  },
})
