import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { LocalizeMixin } from '@open-cells/localize'
import { html, LitElement } from 'lit'

import styles from './app-loader.css'

class AppLoader extends LocalizeMixin(LitElement) {
  static get is () {
    return 'app-loader'
  }

  static get properties () {
    return {
      message: { type: String },
      show: { type: Boolean, refelect: true }
    }
  }

  constructor () {
    super()

    this.show = false
    this.message = 'app-loader.message'
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <main>
        <section>
          <fontawesome-icon .icon="${faRotateRight}"></fontawesome-icon>
          <h2>${this.t(this.message)}</h2>
        </section>
      </main>
    `
  }
}

customElements.define(AppLoader.is, AppLoader)
