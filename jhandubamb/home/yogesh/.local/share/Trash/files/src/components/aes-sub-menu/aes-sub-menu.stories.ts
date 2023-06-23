import { html } from 'lit-html'

export default {
  title: 'Atoms/Sub Menu',
  component: 'aes-sub-menu',
}

// const configs = [
//   {
//     "url": "/hello",
//     "title" : "Link1",
//     "external" : false
//   },
//   {
//     "url" : "#",
//     "title" : "Link1",
//     "external" : false
//   },
//   {
//     "url" : "#",
//     "title" : "Link3",
//     "external" : false
//   },
//   {
//     "url" : "#",
//     "title" : "link4",
//     "external" : false
//   },
//   {
//     "url" : "#",
//     "title" : "link5",
//     "external" : false
//   }
// ]

// <aes-sub-menu color-variation="{{ menu_links_color }}" external="{{ menu_link.external }}" sub-menu="{{ menu_links }}"></aes-sub-menu>

// subMenu = [
//   {
//     url: '/hello',
//     title: 'Link1',
//     external: false,
//     colorvariation: 'blue',
//   },
//   {
//     url: '#',
//     title: 'Link1',
//     external: false,
//     colorvariation: 'blue',
//   },
//   {
//     url: '#',
//     title: 'Link3',
//     external: false,
//     colorvariation: 'blue',
//   },
//   {
//     url: '#',
//     title: 'link4',
//     external: false,
//     colorvariation: 'blue',
//   },
//   {
//     url: '#',
//     external: false,
//   },
// ]
const Template = () =>
  html` 
  <aes-sub-menu"> 

    <slot="subMenuContent">
      <aes-link 
        class='pb-3 pt-3 pr-6 pl-6 '
        href="#"
        rel={menuItem.external ? 'noreferrer  noopener' : ''}
        target={menuItem.external ? '_blank' : '_self'}
        >
          Link1 
      </aes-link>
    </slot>

    <slot="subMenuContent">
      <aes-link 
        class='pb-3 pt-3 pr-6 pl-6'
        href="#"
        rel={menuItem.external ? 'noreferrer  noopener' : ''}
        target={menuItem.external ? '_blank' : '_self'}
        >
          Link2  
      </aes-link>
    </slot>

    <slot="subMenuContent">
      <aes-link 
        class='pb-3 pt-3 pr-6 pl-6'
        href="#"
        rel={menuItem.external ? 'noreferrer  noopener' : ''}
        target={menuItem.external ? '_blank' : '_self'}
        >
          Link3  
      </aes-link>
    </slot>
    <slot="subMenuContent">
      <aes-link 
        class='pb-3 pt-3 pr-6 pl-6 text-signature-blue1'
        href="#"
        rel={menuItem.external ? 'noreferrer  noopener' : ''}
        target={menuItem.external ? '_blank' : '_self'}
        >
          Link4 
      </aes-link>
    </slot>

    <slot="subMenuContent">
      <aes-link 
        class='pb-3 pt-3 pr-6 pl-6'
        href="#"
        rel={menuItem.external ? 'noreferrer  noopener' : ''}
        target={menuItem.external ? '_blank' : '_self'}
        >
          Link 5  
      </aes-link>
    </slot> 
  </aes-sub-menu> `

export const Default = Template.bind({})
Default.args = {}
