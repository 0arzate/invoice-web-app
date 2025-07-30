import { LitElement, nothing } from 'lit'

import { ServiceGET } from '../service-get'
import { HOST } from '../../constants/env'
import { getInvoicesNormalize } from '../normalize/get-invoices-normalize'

export const GET_INVOICE_EVENTS = Object.freeze({
  LOADING: 'invoices-loading',
  SUCCESS: 'invoices-success',
  ERROR: 'invoices-error',
  FINISHED: 'invoices-finished'
})

export class GetInvoices extends LitElement {
  constructor () {
    super()

    this.queries = {}
    this.service = new ServiceGET({
      host: HOST
    })
  }

  static get is () {
    return 'get-invoices'
  }

  static get properties () {
    return {
      queries: { type: Object }
    }
  }

  firstUpdated () {
    this.getInvoices()
  }

  update (changedProperties) {
    const queriesChanged = changedProperties.has('queries')
    const previousQueries = changedProperties.get('queries')

    if (queriesChanged && previousQueries) {
      this.getInvoices()
    }

    super.update(changedProperties)
  }

  async getInvoices () {
    this.service.path = '/invoices'
    this.service.config.params = this.queries

    this.dispatchCustomEvent(GET_INVOICE_EVENTS.LOADING)

    try {
      const response = await this.service.generateRequest()
      const normalozedResponse = getInvoicesNormalize(response)

      this.dispatchCustomEvent(GET_INVOICE_EVENTS.SUCCESS, normalozedResponse)
    } catch (error) {
      this.dispatchCustomEvent(GET_INVOICE_EVENTS.ERROR, error.message)
    } finally {
      this.dispatchCustomEvent(GET_INVOICE_EVENTS.FINISHED)
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

customElements.define(GetInvoices.is, GetInvoices)
