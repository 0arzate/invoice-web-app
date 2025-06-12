import { LitElement, html } from 'lit'

import { faDollarSign, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { THEMES } from '../../utils/constants/index.js'

import styles from './app-header.css.js'

export class AppHeader extends LitElement {
  constructor () {
    super()

    this.isDarkMode = false
  }

  static get is () {
    return 'app-header'
  }

  static get properties () {
    return {
      isDarkMode: { type: Boolean }
    }
  }

  static get styles () {
    return styles
  }

  get iconTheme () {
    return this.isDarkMode ? faSun : faMoon
  }

  toggleTheme () {
    document.documentElement.classList.toggle(THEMES.DARK_MODE)

    this.isDarkMode = document.documentElement.classList.contains(THEMES.DARK_MODE)
  }

  render () {
    return html`
      <header>
        <section class="header__logo">
          <span></span>
          <fontawesome-icon .icon="${faDollarSign}"></fontawesome-icon>
          <span></span>
        </section>
        <section class="header__theme">
          <fontawesome-icon
            .icon="${this.iconTheme}"
            @click="${this.toggleTheme}"
          ></fontawesome-icon>
          <img />
        </section>
      </header>
    `
  }
}

customElements.define(AppHeader.is, AppHeader)
