import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './home-page.css';

import '../../components/app-layout/app-layout';

import { THEMES } from '../../utils/constants';

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
        <h1 class="title">Invoce app</h1>
        <button @click="${this.darkModeToggle}">dark mode toggle</button>
      </main>
    </app-layout>
    `;
  }
}

customElements.define(HomePage.is, HomePage);