import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'
import { PageMixin } from '@open-cells/page-mixin'

import '../components/app-header/app-header'

export class CorePage extends PageMixin(LocalizeMixin(LitElement)) {
  constructor () {
    super()
  }

  get header () {
    return html`
      <app-header></app-header>
    `
  }
}
