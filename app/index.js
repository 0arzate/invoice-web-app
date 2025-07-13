import { LitElement, html } from 'lit'

import { startApp } from '@open-cells/core'
import { ElementController } from '@open-cells/element-controller'

import { routes } from './router/routes'
import { LANGUAGES, THEMES } from './utils/constants'

import styles from './index.css'

import './components/app-layout/app-layout'
import './components/fontawesome-icon/fontawesome-icon'

import {
  setUrl,
  setLocalesHost,
  requestResources,
  setUseBundles
} from '@open-cells/localize'

setUseBundles(true)
setLocalesHost('./public/locales')
setUrl('locales.json')

requestResources()

startApp({
  routes,
  mainNode: 'app-content'
})

export class AppIndex extends LitElement {
  constructor () {
    super()
    this.elementController = new ElementController(this)
  }

  static get is () {
    return 'app-index'
  }

  static get styles () {
    return styles
  }

  firstUpdated () {
    this.setCurrentTheme()
    this.setCurrentLanguage()
  }

  setCurrentTheme () {
    const isDarkMode = window.localStorage.getItem('isDarkMode')

    if (isDarkMode === 'true') {
      document.documentElement.classList.toggle(THEMES.DARK_MODE)
    }
  }

  setCurrentLanguage () {
    const language = window.localStorage.getItem('language') || LANGUAGES.EN

    document.documentElement.setAttribute('lang', language)
  }

  render () {
    return html`
    <app-layout>
      <main slot="content" role="main" tabindex="-1">
        <slot></slot>
      </main>
    </app-layout>
    `
  }
}

customElements.define(AppIndex.is, AppIndex)
