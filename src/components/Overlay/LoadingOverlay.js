import { LitElement, css, html } from 'lit';
import { LoadingOverlayStyle } from './LoadingOverlay.style.js';
import {range} from 'lit/directives/range.js';
import {map} from 'lit/directives/map.js';

export class LoadingOverlay extends LitElement {

  static styles = [LoadingOverlayStyle];

  static get properties() {
    return {
      _options: {
        type: Object,
        state: true
      },
      _nrOfCircusBalls : {
        type: Number,
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._nrOfCircusBalls = 5;
    this._options = {
      'spinnerColor': 'red'
    }
  }

  get overlayDialog() {
    return this.shadowRoot.querySelector('dialog');
  }

  setOptions(options) {
    if (typeof options !== 'undefined') {
      for (let key in options) {
        this._options[key] = options[key];
      }
    }
  }

  async show(options) {
    this.setOptions(options);
    this.update();
    await this.updateComplete;
    this.overlayDialog.showModal();
  }

  hide() {
    this.overlayDialog.close();
  }

  render() {
    return html`
      <dialog>
        <form>
          <div style="color: ${this._options.spinnerColor}" class="loading-ball la-ball-circus la-3x">
            ${map(range(this._nrOfCircusBalls), (i) => html`<div></div>`)}
          </div>
        </form>
      </dialog>
    `
  }
}

window.customElements.define('loading-overlay', LoadingOverlay)
