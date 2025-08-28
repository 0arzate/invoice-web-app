import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './app-notification.css.js'

export class AppNotification extends LocalizeMixin(LitElement) {
  constructor () {
    super()
  }

  static get is () {
    return 'app-notification'
  }

  static get properties () {
    return {
      message: { type: String }
    }
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <main>
        <p>${this.message}</p>
      </main>
    `
  }
}

customElements.define(AppNotification.is, AppNotification)
