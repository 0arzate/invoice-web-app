import { html } from 'lit'

import { CorePage } from '../../utils'

import { BUTTON_TYPES, THEMES } from '../../utils/constants'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import styles from './home-page.css'

import '../../components/app-layout/app-layout'
import '../../components/button-default/button-default'
import '../../components/invoice-card/invoice-card'
import '../../utils/services/logical-components/get-invoices'

export class HomePage extends CorePage {
  constructor () {
    super()

    this.invoices = []
    this.isLoading = false
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
      isLoading: { type: Boolean }
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

  render () {
    return html`
      <app-layout>
        <main slot="content">
          ${super.header}
          <section>

            <header class="invoices-header">
              <div>
                <h1>${this.t('home-page.title')}</h1>
                <h2>${this.t('home-page.subtitle', { invoices: 10 })}</h2>
              </div>
              <div>
                <button-default
                  .variant="${BUTTON_TYPES.ICON}"
                  .icon="${faCirclePlus}"
                >${this.t('home-page.button.new-invoice')}</button-default>
              </div>
            </header>

            ${this.invoices.map((invoice) => html`
              <invoice-card
                .loading="${this.isLoading}"
                .data="${invoice}"
              ></invoice-card>
            `)}

          </section>
        </main>
      </app-layout>

      <get-invoices
        @invoices-loading="${() => this.showLoader('home-page.loader.get-invoices')}"
        @invoices-success="${this.setInvoices}"
        @invoices-finished="${() => this.hideLoader()}"
      ></get-invoices>
    `
  }
}

customElements.define(HomePage.is, HomePage)
