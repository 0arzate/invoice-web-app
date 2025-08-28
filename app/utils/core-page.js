import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'
import { PageMixin } from '@open-cells/page-mixin'

import '../components/app-header/app-header'

export class CorePage extends PageMixin(LocalizeMixin(LitElement)) {
  constructor () {
    super()
  }

  showLoader (message) {
    const loader = document.createElement('app-loader')
    loader.message = message

    document.body.appendChild(loader)
  }

  hideLoader () {
    const loader = document.querySelector('app-loader')

    if (!loader) return

    document.body.removeChild(loader)
  }

  changeBreakpoint (breakpoint, callback) {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

    callback(mediaQuery.matches)

    mediaQuery.addEventListener('change', (event) => callback(event.matches))
  }

  showNotification (message, delay = 3000) {
    const currentNotification = document.querySelector('app-notification')

    if (currentNotification) {
      currentNotification.message = message
      return
    }

    const notification = document.createElement('app-notification')
    notification.message = message

    document.body.appendChild(notification)

    setTimeout(() => {
      document.body.removeChild(notification)
    }, delay)
  }

  get header () {
    return html`
      <app-header></app-header>
    `
  }
}
