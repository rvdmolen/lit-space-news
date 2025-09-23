// Import library dependencies
import { LitElement, css, html } from 'lit';

// Import services
import { toastService } from '../../services/toast.js';

export class Toast extends LitElement {

  #toastSubscription;

  connectedCallback() {
    super.connectedCallback();
    this.#toastSubscription = toastService.subscribe((newValue) => {
      this.#handleToastMessage(newValue);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#toastSubscription.unsubscribe();
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
