import { LitElement, html } from 'lit';

import { startApp } from '@open-cells/core';
import { ElementController } from '@open-cells/element-controller';

import { routes } from './router/routes';

import styles from './index.css';

import "./components/app-layout/app-layout";

import {
  setUrl,
  setLocalesHost,
  requestResources,
  setUseBundles,
} from '@open-cells/localize';

setUseBundles(true);
setLocalesHost('./public/locales');
setUrl('locales.json');

requestResources();

startApp({
  routes,
  mainNode: 'app-content',
});

export class AppIndex extends LitElement {
  constructor() {
    super();
    this.elementController = new ElementController(this);
  }

  static get is() {
    return 'app-index';
  }

  static get styles() {
    return styles
  }

  render() {
    return html`
    <app-layout>
      <main slot="content" role="main" tabindex="-1">
        <slot></slot>
      </main>
    </app-layout>
    `;
  }
}

customElements.define(AppIndex.is, AppIndex);