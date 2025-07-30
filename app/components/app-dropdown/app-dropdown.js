import { LitElement, html } from 'lit'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './app-dropdown.css.js'

export class AppDropdown extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.showOptions = false
    this.options = [
      { name: 'pendiente', value: 'PENDING' },
      { name: 'pagada', value: 'PAID' },
      { name: 'borrador', value: 'DRAFT' }
    ]
  }

  static get is () {
    return 'app-dropdown'
  }

  static get properties () {
    return {
      options: { type: Array },
      showOptions: { type: Boolean, attribute: 'show-options', reflect: true }
    }
  }

  static get styles () {
    return styles
  }

  toggleShowOptions () {
    this.showOptions = !this.showOptions
  }

  render () {
    return html`
      <main>
        <p>${this.t('app-dropdown.label')}</p>
        <fontawesome-icon @click="${this.toggleShowOptions}" .icon="${faChevronDown}"></fontawesome-icon>
        <ul ?hidden="${!this.showOptions}">
          ${this.options.map((option) => html`
            <li value="${option.value}">
              <input name="${option.value}" type="checkbox" />
              ${option.name}
            </li>
          `)}
        </ul>
      </main>
    `
  }
}

customElements.define(AppDropdown.is, AppDropdown)
