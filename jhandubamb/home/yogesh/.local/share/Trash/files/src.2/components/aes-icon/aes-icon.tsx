import { Component, Prop, h } from '@stencil/core'

import { IconType } from '../../utils/enums'

import aesHamburger from './assets/aes-hamburger.svg'
import allTogether from './assets/all-together.svg'
import arrowRight from './assets/arrow-right.svg'
import arrowRightBlue from './assets/arrow-right-blue.svg'
import arrowRightWhite from './assets/arrow-right-white.svg'
import arrowUp from './assets/arrow-up.svg'
import bill from './assets/bill.svg'
import book from './assets/book.svg'
import checkWhite from './assets/check-white.svg'
import chevronDown from './assets/chevron-down.svg'
import chevronLeft from './assets/chevron-left.svg'
import chevronRight from './assets/chevron-right.svg'
import chevronUp from './assets/chevron-up.svg'
import close from './assets/close.svg'
import documentDefault from './assets/document-default.svg'
import expand from './assets/expand.svg'
import facebookBlack from './assets/facebook-black.svg'
import facebookGray from './assets/facebook-gray.svg'
import glassdoorBlack from './assets/glassdoor-black.svg'
import glassdoorGray from './assets/glassdoor-gray.svg'
import globe from './assets/globe.svg'
import graph from './assets/graph.svg'
import i18nWhite from './assets/i18n-white.svg'
import i18nGray from './assets/i18n-gray.svg'
import instagramBlack from './assets/instagram-black.svg'
import instagramGray from './assets/instagram-gray.svg'
import investors from './assets/investors.svg'
import linkedinBlack from './assets/linkedin-black.svg'
import linkedinGray from './assets/linkedin-gray.svg'
import login from './assets/login.svg'
import logoBlack from './assets/logo-black.svg'
import logoMono from './assets/logo-mono.svg'
import logoRGB from './assets/logo-rgb.svg'
import logoWhite from './assets/logo-white.svg'
import menu from './assets/menu.svg'
import outage from './assets/outage.svg'
import products from './assets/products.svg'
import search from './assets/search.svg'
import service from './assets/service.svg'
import sustainability from './assets/sustainability.svg'
import talent from './assets/talent.svg'
import twitterBlack from './assets/twitter-black.svg'
import twitterGray from './assets/twitter-gray.svg'
import youtubeBlack from './assets/youtube-black.svg'
import youtubeGray from './assets/youtube-gray.svg'

const icons: Record<IconType, string> = {
  aesHamburger,
  allTogether,
  arrowRight,
  arrowRightBlue,
  arrowRightWhite,
  arrowUp,
  bill,
  book,
  checkWhite,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  close,
  documentDefault,
  expand,
  facebookBlack,
  facebookGray,
  glassdoorBlack,
  glassdoorGray,
  globe,
  graph,
  i18nWhite,
  i18nGray,
  instagramBlack,
  instagramGray,
  investors,
  linkedinBlack,
  linkedinGray,
  login,
  logoBlack,
  logoMono,
  logoRGB,
  logoWhite,
  menu,
  outage,
  products,
  search,
  service,
  sustainability,
  talent,
  twitterBlack,
  twitterGray,
  youtubeBlack,
  youtubeGray,
}

/**
 * The logo component.
 * @element aes-icon
 */
@Component({
  tag: 'aes-icon',
  styleUrl: 'aes-icon.css',
  shadow: true,
})
export class AESIcon {
  /**
   * The icon type to display from ./assets. Takes precedence over url.
   */
  @Prop() icon: IconType
  /**
   * The url to display a remote icon
   */
  @Prop() url = ''

  render() {
    const iconSrc = icons[this.icon] !== undefined ? icons[this.icon] : this.url
    return <img src={iconSrc} alt={this.icon} />
  }
}
