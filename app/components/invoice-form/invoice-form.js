import { LocalizeMixin } from '@open-cells/localize'
import { html, LitElement } from 'lit'

import styles from './invoice-form.css'

import '../app-input/app-input'
import { BUTTON_TYPES } from '../../utils/constants'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class InvoiceForm extends LocalizeMixin(LitElement) {
  constructor () {
    super()
  }

  static get is () {
    return 'invoice-form'
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <form>
        <h2>${this.t('invoice-form.title.new-invoice')}</h2>
        <section>
          <h3>${this.t('invoice-form.subtitle.bill-from')}</h3>
          <app-input label="invoice-form.inputs.street-address"></app-input>
          <section class="three-columns">
            <app-input label="invoice-form.inputs.city"></app-input>
            <app-input label="invoice-form.inputs.post-code"></app-input>
            <app-input label="invoice-form.inputs.country"></app-input>
          </section>
        </section>
        <section class="bill-to">
          <h3>${this.t('invoice-form.subtitle.bill-to')}</h3>
          <app-input label="invoice-form.inputs.client-name"></app-input>
          <app-input label="invoice-form.inputs.client-email"></app-input>
          <app-input label="invoice-form.inputs.client-address"></app-input>
          <section class="three-columns">
            <app-input label="invoice-form.inputs.client-city"></app-input>
            <app-input label="invoice-form.inputs.client-post-code"></app-input>
            <app-input label="invoice-form.inputs.client-city"></app-input>
          </section>
          <section class="two-columns">
            <app-input type="date" label="invoice-form.inputs.invoice-date"></app-input>
            <app-input label="invoice-form.inputs.payment-terms"></app-input>
          </section>
          <app-input label="invoice-form.inputs.project-description"></app-input>
          <h4>${this.t('invoice-form.subtitle.item-list')}</h4>
          <section class="item-list">
            <p>${this.t('invoice-form.item-list.item-name')}</p>
            <p>${this.t('invoice-form.item-list.item-quantity-abbreviation')}</p>
            <p>${this.t('invoice-form.item-list.item-price')}</p>
            <p>${this.t('invoice-form.item-list.item-total')}</p>
          </section>
          <button-default .icon="${faPlus}" variant="${BUTTON_TYPES.FULL_ICON}">
            ${this.t('invoice-form.buttons.add-item')}
          </button-default>
          <section class="actions">
            <button-default variant="${BUTTON_TYPES.LIGHT}">
              ${this.t('invoice-form.buttons.discard')}
            </button-default>
            <div>
              <button-default variant="${BUTTON_TYPES.DARK}">
                ${this.t('invoice-form.buttons.save-as-draft')}
              </button-default>
              <button-default>
                ${this.t('invoice-form.buttons.save-and-send')}
              </button-default>
            </div>
          </section>
        </section>
      </form>
    `
  }
}

customElements.define(InvoiceForm.is, InvoiceForm)
