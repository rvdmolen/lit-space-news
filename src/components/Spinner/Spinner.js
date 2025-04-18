// Import library dependencies
import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';

// Import styling
import { SpinnerStyle } from './Spinner.style.js';

export class Spinner extends LitElement {

  static styles = [SpinnerStyle];

  render() {
    return html`
      <div class="loader"></div>
    `
  }
}

window.customElements.define('lit-space-news-spinner', Spinner)
