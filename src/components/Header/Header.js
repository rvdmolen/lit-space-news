import { LitElement, css, html } from 'lit'
import { HeaderStyle } from './Header.style.js';
import { Events } from '../../events/events.js';

export class Header extends LitElement {

  static styles = [HeaderStyle];

  __searchChange(event) {
    const searchValue = event?.target.value;
    this.__sendSearchChangeEvent(searchValue);
  }

  __sendSearchChangeEvent(value) {
    this.dispatchEvent(
      new CustomEvent(Events.SEARCH_CHANGE, {
        bubbles: true,
        composed: true,
        detail: {
          value
        },
      })
    );
  }

  render() {
    return html`
      <header>
        <div class="title">
          <img src="../../../assets/logo.png" aria-label="Flight space news logo" alt="Flight space news logo" />
          <h2>Flight space news</h2>
        </div>
        <div>
          <input @change="${this.__searchChange}" type="search" placeholder="Search" />
        </div>
      </header>
    `
  }
}

window.customElements.define('lit-space-news-header', Header)
