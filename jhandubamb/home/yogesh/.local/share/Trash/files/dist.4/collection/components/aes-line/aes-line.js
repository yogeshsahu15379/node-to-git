import { Component, Element, h, Host, Prop } from '@stencil/core';
/**
 * The Decor gradient component
 * @element aes-line
 */
export class AESDecor {
  constructor() {
    /**
     * The time the animation lasts
     * https://developer.mozilla.org/en-US/docs/Web/CSS/time
     */
    this.animDuration = '1s';
    /**
     * Portion of the element visible to trigger the animation
     */
    this.animThreshold = 0.2;
    /**
     * The direction for the line to exist.
     */
    this.direction = 'horizontal';
    /**
     * Whether the line should be animated when
     */
    this.displayAnimated = false;
  }
  attachObserver() {
    if (this.animObserver !== undefined) {
      return;
    }
    this.animObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // console.log(entry, '$$$$$$$$$$', this.animThreshold)
        if (entry.intersectionRatio >= this.animThreshold) {
          // if (this.animDuration !== '') {
          this.el.style.setProperty('--animation-duration', this.animDuration);
          // }
          this.el.classList.add('animate');
        }
        this.el.classList.add('animate');
        // }
      });
    }, { threshold: [this.animThreshold] });
  }
  checkObserver() {
    this.attachObserver();
  }
  cleanUpObserver() {
    this.el.classList.remove('animate');
    if (this.animObserver !== undefined) {
      this.animObserver.takeRecords();
    }
  }
  componentDidLoad() {
    if (this.displayAnimated) {
      this.checkObserver();
      this.animObserver.observe(this.el);
    }
  }
  componentDidUpdate() {
    if (this.displayAnimated) {
      this.cleanUpObserver();
      this.checkObserver();
      this.animObserver.observe(this.el);
    }
  }
  disconnectedCallback() {
    this.displayAnimated && this.animObserver.disconnect();
  }
  render() {
    return h(Host, null);
  }
  static get is() { return "aes-line"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["aes-line.css"]
  }; }
  static get styleUrls() { return {
    "$": ["aes-line.css"]
  }; }
  static get properties() { return {
    "animObserver": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IntersectionObserver",
        "resolved": "IntersectionObserver",
        "references": {
          "IntersectionObserver": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Stores the IntersectionObserver instance"
      }
    },
    "animDuration": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The time the animation lasts\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/time"
      },
      "attribute": "anim-duration",
      "reflect": false,
      "defaultValue": "'1s'"
    },
    "animThreshold": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Portion of the element visible to trigger the animation"
      },
      "attribute": "anim-threshold",
      "reflect": false,
      "defaultValue": "0.2"
    },
    "direction": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'horizontal' | 'vertical'",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The direction for the line to exist."
      },
      "attribute": "direction",
      "reflect": true,
      "defaultValue": "'horizontal'"
    },
    "displayAnimated": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the line should be animated when"
      },
      "attribute": "display-animated",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
