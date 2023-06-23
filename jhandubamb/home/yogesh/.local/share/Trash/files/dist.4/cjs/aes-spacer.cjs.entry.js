'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesSpacerCss = ":host{display:block}:host([t='0']){padding-top:0}:host([t='1']){padding-top:0.25rem}:host([t='2']){padding-top:0.5rem}:host([t='3']){padding-top:0.75rem}:host([t='4']){padding-top:1rem}:host([t='5']){padding-top:1.25rem}:host([t='6']){padding-top:1.5rem}:host([t='8']){padding-top:2rem}:host([t='10']){padding-top:2.5rem}:host([t='12']){padding-top:3rem}:host([t='16']){padding-top:4rem}:host([t='20']){padding-top:5rem}:host([t='24']){padding-top:6rem}:host([t='32']){padding-top:8rem}:host([t='40']){padding-top:10rem}:host([t='48']){padding-top:12rem}:host([t='56']){padding-top:14rem}:host([t='64']){padding-top:16rem}:host([t='px']){padding-top:1px}:host([r='0']){padding-right:0}:host([r='1']){padding-right:0.25rem}:host([r='2']){padding-right:0.5rem}:host([r='3']){padding-right:0.75rem}:host([r='4']){padding-right:1rem}:host([r='5']){padding-right:1.25rem}:host([r='6']){padding-right:1.5rem}:host([r='8']){padding-right:2rem}:host([r='10']){padding-right:2.5rem}:host([r='12']){padding-right:3rem}:host([r='16']){padding-right:4rem}:host([r='20']){padding-right:5rem}:host([r='24']){padding-right:6rem}:host([r='32']){padding-right:8rem}:host([r='40']){padding-right:10rem}:host([r='48']){padding-right:12rem}:host([r='56']){padding-right:14rem}:host([r='64']){padding-right:16rem}:host([r='px']){padding-right:1px}:host([b='0']){padding-bottom:0}:host([b='1']){padding-bottom:0.25rem}:host([b='2']){padding-bottom:0.5rem}:host([b='3']){padding-bottom:0.75rem}:host([b='4']){padding-bottom:1rem}:host([b='5']){padding-bottom:1.25rem}:host([b='6']){padding-bottom:1.5rem}:host([b='8']){padding-bottom:2rem}:host([b='10']){padding-bottom:2.5rem}:host([b='12']){padding-bottom:3rem}:host([b='16']){padding-bottom:4rem}:host([b='20']){padding-bottom:5rem}:host([b='24']){padding-bottom:6rem}:host([b='32']){padding-bottom:8rem}:host([b='40']){padding-bottom:10rem}:host([b='48']){padding-bottom:12rem}:host([b='56']){padding-bottom:14rem}:host([b='64']){padding-bottom:16rem}:host([b='px']){padding-bottom:1px}:host([l='0']){padding-left:0}:host([l='1']){padding-left:0.25rem}:host([l='2']){padding-left:0.5rem}:host([l='3']){padding-left:0.75rem}:host([l='4']){padding-left:1rem}:host([l='5']){padding-left:1.25rem}:host([l='6']){padding-left:1.5rem}:host([l='8']){padding-left:2rem}:host([l='10']){padding-left:2.5rem}:host([l='12']){padding-left:3rem}:host([l='16']){padding-left:4rem}:host([l='20']){padding-left:5rem}:host([l='24']){padding-left:6rem}:host([l='32']){padding-left:8rem}:host([l='40']){padding-left:10rem}:host([l='48']){padding-left:12rem}:host([l='56']){padding-left:14rem}:host([l='64']){padding-left:16rem}:host([l='px']){padding-left:1px}";

const AesSpacer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Top spacing from Tailwind config
     */
    this.t = '0';
    /**
     * Right spacing from Tailwind config
     */
    this.r = '0';
    /**
     * Bottom spacing from Tailwind config
     */
    this.b = '0';
    /**
     * Left spacing from Tailwind config
     */
    this.l = '0';
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
AesSpacer.style = aesSpacerCss;

exports.aes_spacer = AesSpacer;
