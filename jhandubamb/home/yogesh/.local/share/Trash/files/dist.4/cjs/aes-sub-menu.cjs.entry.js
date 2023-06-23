'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesSubMenuCss = ":host{display:block}label{display:block;margin-bottom:0.5rem;font-size:1rem}label.hide{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([disabled='true']) label,:host([disabled='']) label{--text-opacity:1;color:rgb(102, 102, 102);color:rgba(102, 102, 102, var(--text-opacity))}:host([required='true']) label:after,:host([required='']) label:after{--text-opacity:1;color:rgb(225, 9, 9);color:rgba(225, 9, 9, var(--text-opacity));content:' *'}.navbar{overflow:hidden;background-color:#333}.navbar a{float:left;font-size:16px;color:white;text-align:center;padding:14px 16px;text-decoration:none}.subnav{float:left;overflow:hidden}.subnav .subnavbtn{font-size:16px;border:none;outline:none;color:white;padding:14px 16px;background-color:inherit;font-family:inherit;margin:0}.navbar a:hover,.subnav:hover .subnavbtn{background-color:red}.subnav-content{display:none;position:absolute;left:0;background-color:red;width:100%;z-index:1}.subnav-content a{float:left;color:white;text-decoration:none}.subnav-content a:hover{background-color:#eee;color:black}.subnav:hover .subnav-content{display:block}";

const AesSubMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * for sub menu titles and links
     */
    this.subMenu = [
      {
        url: '/hello',
        title: 'Link1',
        external: false,
        colorvariation: 'blue',
      },
      {
        url: '#',
        title: 'Link1',
        external: false,
        colorvariation: 'blue',
      },
      {
        url: '#',
        title: 'Link3',
        external: false,
        colorvariation: 'blue',
      },
      {
        url: '#',
        title: 'link4',
        external: false,
        colorvariation: 'blue',
      },
      {
        url: '#',
        external: false,
      },
    ];
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "subMenuContent" })));
  }
};
AesSubMenu.style = aesSubMenuCss;

exports.aes_sub_menu = AesSubMenu;
