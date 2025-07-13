import { html } from 'lit'

import { CorePage } from '../../utils'

import styles from './invoice-detail-page.css'

import '../../components/app-layout/app-layout'

export class InvoiceDetailPage extends CorePage {
  constructor () {
    super()
  }

  static get is () {
    return 'invoice-detail-page'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {}
  }

  render () {
    return html`
      <app-layout>
        <main slot="content">
          ${super.header}

          <section>
            ${InvoiceDetailPage.is}
          </section>
        </main>
      </app-layout>
    `
  }
}

customElements.define(InvoiceDetailPage.is, InvoiceDetailPage)
