import { LitElement, html } from 'lit'

import { faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import { INVOICE_ID_ICON } from '../../utils/constants/service-data.js'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './invoice-card.css.js'

import '../../components/fontawesome-icon/fontawesome-icon'

export class InvoiceCard extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.loading = false
    this.data = {}
  }

  static get is () {
    return 'invoice-card'
  }

  static get properties () {
    return {
      data: { type: Object }
    }
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <article>
        <h2>
          <span>${INVOICE_ID_ICON}</span>${this.data.id}
        </h2>
        <p class="light-text">${this.data.date}</p>
        <p class="light-text">${this.data.receiver}</p>
        <p class="invoice-amount">${this.data.amount}</p>
        <span class="status ${this.data.statusClass}">
          <fontawesome-icon .icon="${faCircle}"></fontawesome-icon>
          <p>${this.t(this.data.status)}</p>
        </span>
        <fontawesome-icon .icon="${faChevronRight}"></fontawesome-icon>
      </article>
    `
  }
}

customElements.define(InvoiceCard.is, InvoiceCard)
