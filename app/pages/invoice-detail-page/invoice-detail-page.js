import { html } from 'lit'

import { CorePage } from '../../utils'

import styles from './invoice-detail-page.css'

import '../../components/app-layout/app-layout'
import '../../utils/services/logical-components/get-invoice-detail'
export class InvoiceDetailPage extends CorePage {
  constructor () {
    super()

    this.invoice = {}
    this.title = ''

    this.handlerChannelInvoiceData()
  }

  static get is () {
    return 'invoice-detail-page'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      invoice: { type: Object },
      params: { type: Object }
    }
  }

  update (changedProperties) {
    const paramshasChanged = changedProperties.has('params')
    const hasParams = this.params.id

    if (paramshasChanged && hasParams) {
      this.getInvoice()
    }

    super.update(changedProperties)
  }

  getInvoice () {
    if (this.invoice.id) return

    const getInvoiceDetail = this.shadowRoot.querySelector('get-invoice-detail')
    getInvoiceDetail.invoiceId = this.params.id
  }

  handlerChannelInvoiceData () {
    this.subscribe('invoice-data', (newInvoice) => { this.invoice = newInvoice })
  }

  updateInvoice (invoice) {
    this.invoice = invoice
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

      <get-invoice-detail
        @invoice-detail-loading="${() => this.showLoader('invoice-detail-page.loader.get-invoice-detail')}"
        @invoice-detail-finished="${() => this.hideLoader()}"
        @invoice-detail-success="${(ev) => this.updateInvoice(ev.detail)}"
      ></get-invoice-detail>
    `
  }
}

customElements.define(InvoiceDetailPage.is, InvoiceDetailPage)
