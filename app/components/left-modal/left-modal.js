import { LocalizeMixin } from '@open-cells/localize'
import { html, LitElement } from 'lit'

import styles from './left-modal.css.js'

class LeftModal extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.isOpen = false
  }

  static get properties () {
    return {
      isOpen: { type: Boolean }
    }
  }

  static get is () {
    return 'left-modal'
  }

  static get styles () {
    return styles
  }

  toogleModal () {
    this.isOpen = !this.isOpen
  }

  render () {
    return html`
      <main ?hidden="${!this.isOpen}">
        <section>
          <slot></slot>
        </section>
        <button @click="${() => this.toogleModal()}"></button>
      </main>
    `
  }
}

customElements.define(LeftModal.is, LeftModal)
