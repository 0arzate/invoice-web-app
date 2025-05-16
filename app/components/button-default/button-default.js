import { LitElement, html } from "lit";

import styles from "./button-default.css";

import "../fontawesome-icon/fontawesome-icon";

import { BUTTON_TYPES } from "../../utils/constants";

export class ButtonDefault extends LitElement {
  constructor() {
    super();
  }

  static get is() {
    return "button-default";
  }

  static get properties() {
    return {
      icon: { type: Object },
      variant: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  get isIconVariant() {
    return this.variant === BUTTON_TYPES.ICON || this.variant === BUTTON_TYPES.FULL_ICON;
  }

  render() {
    return html`
      <button variant="${this.variant}">
        <fontawesome-icon ?hidden="${!this.isIconVariant}" .icon="${this.icon}"></fontawesome-icon>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define(ButtonDefault.is, ButtonDefault);