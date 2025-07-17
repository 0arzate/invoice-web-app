import { LitElement, nothing } from 'lit'

import { ServiceGET } from '../service-get'
import { HOST } from '../../constants/env'

export const GET_INVOICE_DETAIL_EVENTS = Object.freeze({
  LOADING: 'invoice-detail-loading',
  SUCCESS: 'invoice-detail-success',
  ERROR: 'invoice-detail-error',
  FINISHED: 'invoice-detail-finished'
})

export class GetInvoiceDetail extends LitElement {
  constructor () {
    super()

    this.service = new ServiceGET({
      host: HOST
    })

    this.invoiceId = ''
  }

  static get is () {
    return 'get-invoice-detail'
  }

  static get properties () {
    return {
      invoiceId: { type: String, attribute: 'invoice-id' }
    }
  }

  updated (changedProperties) {
    const invoiceIdUpdated = changedProperties.has('invoiceId')

    if (invoiceIdUpdated && this.invoiceId) {
      this.getInvoiceDetail()
    }
  }

  async getInvoiceDetail () {
    this.service.path = `/invoices/${this.invoiceId}`

    this.dispatchCustomEvent(GET_INVOICE_DETAIL_EVENTS.LOADING)

    try {
      const response = await this.service.generateRequest()

      this.dispatchCustomEvent(GET_INVOICE_DETAIL_EVENTS.SUCCESS, response)
    } catch (error) {
      this.dispatchCustomEvent(GET_INVOICE_DETAIL_EVENTS.ERROR, error.message)
    } finally {
      this.dispatchCustomEvent(GET_INVOICE_DETAIL_EVENTS.FINISHED)
    }
  }

  dispatchCustomEvent (eventName, data = {}) {
    this.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: data
    }))
  }

  render () {
    return nothing
  }
}

customElements.define(GetInvoiceDetail.is, GetInvoiceDetail)
