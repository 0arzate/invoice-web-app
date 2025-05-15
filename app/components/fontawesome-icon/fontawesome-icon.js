import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './fontawesome-icon.css';

import '../../components/app-layout/app-layout';

import { icon } from '@fortawesome/fontawesome-svg-core'

export class FontawesomeIcon extends CorePage {
  constructor() {
    super();

    this.icon = '';
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
      size: { type: Number },
    };
  }

  update(changedProperties) {
    super.update(changedProperties);

    const sizeHasChanged = changedProperties.has('size');

    if(sizeHasChanged) {
      this.style.setProperty('--icon-size', `${this.size}px`);
    }
    console.log('changedProperties', changedProperties, this.size);
  }

  render() {
    return html`${icon(this.icon).node[0]}`;
  }
}

customElements.define(FontawesomeIcon.is, FontawesomeIcon);