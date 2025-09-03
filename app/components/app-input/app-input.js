import { LocalizeMixin } from '@open-cells/localize'
import { html, LitElement } from 'lit'

import styles from './app-input.css'

class AppInput extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.label = ''
    this.type = 'text'
  }

  static get is () {
    return 'app-input'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      label: { type: String },
      type: { type: String }
    }
  }

  render () {
    return html`
      <label>
        ${this.t(this.label)}
        <input
          .type="${this.type}"
        />
      </label>
    `
  }
}

customElements.define(AppInput.is, AppInput)
