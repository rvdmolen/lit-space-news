// Import library dependencies
import { LitElement, css, html } from 'lit';

// Import services
import { toastService } from '../../services/toast-service.js';

export class Toast extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    toastService.subscribe((newValue) => {
      this.#handleToastMessage(newValue);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    toastService.unsubscribe();
  }

  #handleToastMessage(message) {
    console.log(`Toast message received ${JSON.stringify(message)}`);
  }

  render() {
    return html`
      <div class="loader"></div>
    `
  }
}

window.customElements.define('lit-space-news-toast', Toast);
