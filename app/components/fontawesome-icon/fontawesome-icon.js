import { html } from 'lit';
import { icon } from '@fortawesome/fontawesome-svg-core'

import { CorePage } from '../../utils';

import styles from './fontawesome-icon.css';

import '../../components/app-layout/app-layout';

export class FontawesomeIcon extends CorePage {
  constructor() {
    super();

    this.icon = {};
  }

  static get is() {
    return 'fontawesome-icon';
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      icon: { type: Object },
    };
  }

  render() {
    return html`${icon(this.icon).node[0]}`;
  }
}

customElements.define(FontawesomeIcon.is, FontawesomeIcon);