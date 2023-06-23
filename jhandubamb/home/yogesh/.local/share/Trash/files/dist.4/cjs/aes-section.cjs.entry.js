'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e7a00b2.js');

const aesSectionCss = ":host{display:block;padding-top:1.25rem;padding-bottom:1.25rem;overflow:hidden}@media (min-width: 768px){:host{padding-top:1.25rem;padding-bottom:1.25rem}}@media (min-width: 1024px){:host{padding-top:2.5rem;padding-bottom:2.5rem}}:host([vertical-padding='large']){padding-top:6rem;padding-bottom:6rem}@media (min-width: 768px){:host([vertical-padding='large']){padding-top:12rem;padding-bottom:12rem}}:host([vertical-padding='medium']){padding-top:3rem;padding-bottom:3rem}@media (min-width: 768px){:host([vertical-padding='medium']){padding-top:6rem;padding-bottom:6rem}}:host([vertical-padding='small']){padding-top:1.5rem;padding-bottom:1.5rem}@media (min-width: 768px){:host([vertical-padding='small']){padding-top:3rem;padding-bottom:3rem}}";

const AesSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The background color (chosen from a given set of brand colors) of the section.
     */
    this.verticalPadding = 'small';
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
AesSection.style = aesSectionCss;

exports.aes_section = AesSection;
