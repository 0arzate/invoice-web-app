import { html } from 'lit'

import { CorePage } from '../../utils'

import { BUTTON_TYPES, MEDIA_QUERIES, THEMES } from '../../utils/constants'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import styles from './home-page.css'

import '../../components/app-layout/app-layout'
import '../../components/button-default/button-default'
import '../../components/invoice-card/invoice-card'
import '../../components/app-dropdown/app-dropdown'
import '../../utils/services/logical-components/get-invoices'
import '../../components/left-modal/left-modal'
import '../../components/invoice-form/invoice-form'

export class HomePage extends CorePage {
  constructor () {
    super()

    this.queries = []
    this.invoices = []
    this.isLoading = false

    this.subtitle = 'home-page.subtitle'
    this.dropdownLabel = 'app-dropdown.label'
    this.buttonText = 'home-page.button.new-invoice'

    this.changeBreakpoint(MEDIA_QUERIES.MOBILE, (isResponsive) => {
      this.updateSubtitle(isResponsive)
      this.updateDropdownLabel(isResponsive)
      this.updateButtonText(isResponsive)
    })
  }

  static get is () {
    return 'home-page'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      invoices: { type: Array },
      isLoading: { type: Boolean },
      subtitle: { type: String },
      dropdownLabel: { type: String },
      buttonText: { type: String }
    }
  }

  darkModeToggle () {
    document.documentElement.classList.toggle(THEMES.DARK_MODE)
  }

  toggleLoading () {
    this.isLoading = !this.isLoading
  }

  setInvoices (event) {
    const invoices = event.detail

    this.invoices = invoices
  }

  get renderInvoices () {
    if (!this.invoices || !this.invoices.length) {
      return html`
        <section class="invoices-empty">
          <img src="https://i.ibb.co/35qpBryz/invoices-app-not-found-invoices.png" alt="No invoices found" />
          <h3>${this.t('home-page.messages.not-found.title')}</h3>
          <p>${this.t('home-page.messages.not-found.description')}</p>
        </section>
      `
    }

    return html`
      <ul>
        ${this.invoices.map((invoice) => html`
          <invoice-card
            @open-invoice-detail="${this.navigateToInvoiceDetail}"
            .loading="${this.isLoading}"
            .data="${invoice}"
          ></invoice-card>
        `)}
      </ul>
    `
  }

  navigateToInvoiceDetail (event) {
    const { id } = event.detail

    this.publish('invoice-data', event.detail)
    this.navigate('invoice-detail', { id })
  }

  setGetInvoiceQueries (event) {
    const isChecked = event?.detail?.checked
    const queryValue = event?.detail?.value || ''

    if (!isChecked) {
      this.queries = this.queries.filter((query) => query !== queryValue)
    }

    if (isChecked) {
      this.queries = [...this.queries, queryValue]
    }

    this.updateQueries()
  }

  updateQueries () {
    const getInvoices = this.shadowRoot.querySelector('get-invoices')

    getInvoices.queries = { status: this.queries.join(',') }
  }

  updateSubtitle (isResponsive) {
    this.subtitle = isResponsive ? 'home-page.responsive.subtitle' : 'home-page.subtitle'
  }

  updateDropdownLabel (isResponsive) {
    this.dropdownLabel = isResponsive ? 'app-dropdown.responsive.label' : 'app-dropdown.label'
  }

  updateButtonText (isResponsive) {
    this.buttonText = isResponsive ? 'home-page.button.responsive.new-invoice' : 'home-page.button.new-invoice'
  }

  openModal () {
    const leftModal = this.shadowRoot.querySelector('left-modal')

    leftModal.toogleModal()
  }

  render () {
    return html`
      <app-layout>
        <main slot="content">
          ${super.header}

          <section>
            <header class="invoices-header">
              <div>
                <h1>${this.t('home-page.title')}</h1>
                <h2>${this.t(this.subtitle, { invoices: this.invoices.length })}</h2>
              </div>
              <div class="invoices-header-actions">
                <app-dropdown
                  label="${this.dropdownLabel}"
                  @dropdown-change="${this.setGetInvoiceQueries}"
                ></app-dropdown>
                <button-default
                  .variant="${BUTTON_TYPES.ICON}"
                  .icon="${faCirclePlus}"
                  @click="${() => this.openModal()}"
                >${this.t(this.buttonText)}</button-default>
              </div>
            </header>

            ${this.renderInvoices}
          </section>
        </main>
      </app-layout>

      <left-modal>
        <invoice-form></invoice-form>
      </left-modal>

      <get-invoices
        @invoices-loading="${() => this.showLoader('home-page.loader.get-invoices', { invoiceId: this.params.id })}"
        @invoices-success="${this.setInvoices}"
        @invoices-finished="${() => this.hideLoader()}"
        @invoices-error="${() => this.showNotification(this.t('home-page.notification.error.get-invoices'))}"
      ></get-invoices>
    `
  }
}

customElements.define(HomePage.is, HomePage)
