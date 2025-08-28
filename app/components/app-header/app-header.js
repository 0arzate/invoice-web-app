import { LitElement, html } from 'lit'

import { faDollarSign, faLanguage, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { LANGUAGES, THEMES } from '../../utils/constants/index.js'

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

  firstUpdated () {
    this.isDarkMode = document.documentElement.classList.contains(THEMES.DARK_MODE)
  }

  get iconTheme () {
    return this.isDarkMode ? faSun : faMoon
  }

  toggleTheme () {
    document.documentElement.classList.toggle(THEMES.DARK_MODE)

    this.isDarkMode = document.documentElement.classList.contains(THEMES.DARK_MODE)

    this.saveInLocalStorage('isDarkMode', this.isDarkMode)
  }

  saveInLocalStorage (key, newValue) {
    window.localStorage.setItem(key, newValue)
  }

  toggleLanguage () {
    const currentLanguage = window.localStorage.getItem('language') || LANGUAGES.EN
    const newLanguage = currentLanguage === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN

    document.documentElement.setAttribute('lang', newLanguage)

    this.saveInLocalStorage('language', newLanguage)
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
            class="header__theme--language"
            .icon="${faLanguage}"
            @click="${this.toggleLanguage}"
          ></fontawesome-icon>
          <fontawesome-icon
            class="header__theme--theme"
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
