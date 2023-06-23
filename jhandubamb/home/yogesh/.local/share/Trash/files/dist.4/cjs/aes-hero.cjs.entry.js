'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesHeroCss = ":host{position:relative;display:-ms-flexbox;display:flex;width:100vw;--text-opacity:1;color:rgb(255, 255, 255);color:rgba(255, 255, 255, var(--text-opacity));overflow:hidden;padding-top:clamp(200px, calc(67 * 100% / 144), 650px)}slot[name='multimedia']::slotted(picture){display:-ms-flexbox !important;display:flex !important;position:absolute !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;z-index:10 !important;width:100vw !important}slot[name='multimedia']::slotted(img){-o-object-fit:cover;object-fit:cover;width:100vw}aes-grid{position:absolute;top:0;right:0;bottom:0;left:0;z-index:20}.overlay{--bg-opacity:1;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, var(--bg-opacity));--bg-opacity:0.4}aes-grid,aes-column{height:100%}aes-column{grid-column-start:2}";

const AESHero = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Should the dark overlay sit over top of the bg image
     */
    this.overlay = true;
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "multimedia" }), index.h("aes-grid", { class: { overlay: this.overlay } }, index.h("aes-column", { "content-align": "middle", "col-span-default": "10" }, index.h("slot", { name: "title" })))));
  }
};
AESHero.style = aesHeroCss;

exports.aes_hero = AESHero;
