import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './home-page.css';

import '../../components/app-layout/app-layout';
import '../../components/button-default/button-default';

import { THEMES } from '../../utils/constants';
import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons';

export class HomePage extends CorePage {
  constructor() {
    super();
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
        <section>
          <h1 class="title">Invoce app</h1>
          <button-default
            variant="light"
            .icon="${faPlus}"
            @click="${this.darkModeToggle}"
          >
            dark mode
          </button-default>
        </section>
      </main>
    </app-layout>
    `;
  }
}

customElements.define(HomePage.is, HomePage);