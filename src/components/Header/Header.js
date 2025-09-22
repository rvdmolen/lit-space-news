import { html, LitElement } from 'lit'
import { HeaderStyle } from './Header.style.js';


export class Header extends LitElement {

  static styles = [HeaderStyle];


  render() {
    return html`
      <header>
        <div class="title">
          <img src="/assets/logo.png" aria-label="Flight space news logo" alt="Flight space news logo" />
          <h2>Flight space news</h2>
          <div class="buttons">
            <lit-space-news-theme-switcher></lit-space-news-theme-switcher>
          </div>
        </div>

      </header>
    `
  }
}

window.customElements.define('lit-space-news-header', Header)
