import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './home-page.css';

import '../../components/app-layout/app-layout';
import '../../components/button-default/button-default';

import { BUTTON_TYPES, THEMES } from '../../utils/constants';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export class HomePage extends CorePage {
  constructor() {
    super();

    this.invoices = [];
  }

  static get is() {
    return 'home-page';
  }

  static get styles() {
    return styles
  }

  darkModeToggle() {
    document.documentElement.classList.toggle(THEMES.DARK_MODE)
  }

  render() {
    return html`
    <app-layout>
      <main slot="content">
        ${super.header}
        <section class="invoices-header">
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
        </section>
      </main>
    </app-layout>
    `;
  }
}

customElements.define(HomePage.is, HomePage);