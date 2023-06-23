import { Component, h, Host, Prop } from '@stencil/core';
/**
 * The Sub Menu.
 * @element aes-sub-menu
 */
export class AesSubMenu {
  constructor() {
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
    return (h(Host, null,
      h("slot", { name: "subMenuContent" })));
  }
  static get is() { return "aes-sub-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-sub-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-sub-menu.css"]
  }; }
  static get properties() { return {
    "subMenu": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "({ url: string; title: string; external: boolean; colorvariation: string; } | { url: string; external: boolean; title?: undefined; colorvariation?: undefined; })[]",
        "resolved": "({ url: string; title: string; external: boolean; colorvariation: string; } | { url: string; external: boolean; title?: undefined; colorvariation?: undefined; })[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "for sub menu titles and links"
      },
      "defaultValue": "[\n    {\n      url: '/hello',\n      title: 'Link1',\n      external: false,\n      colorvariation: 'blue',\n    },\n    {\n      url: '#',\n      title: 'Link1',\n      external: false,\n      colorvariation: 'blue',\n    },\n    {\n      url: '#',\n      title: 'Link3',\n      external: false,\n      colorvariation: 'blue',\n    },\n    {\n      url: '#',\n      title: 'link4',\n      external: false,\n      colorvariation: 'blue',\n    },\n    {\n      url: '#',\n      external: false,\n    },\n  ]"
    }
  }; }
}
