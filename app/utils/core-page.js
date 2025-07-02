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

  get header () {
    return html`
      <app-header></app-header>
    `
  }
}
