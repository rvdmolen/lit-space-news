import { LitElement, css, html } from 'lit'
import { HeaderStyle } from './Header.style.js';
import { Events } from '../../events/events.js';

const THEMES = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light'
})

export class Header extends LitElement {

  static styles = [HeaderStyle];

  get currentTheme() {
    return document.querySelector('html').style['color-scheme'];
  }

  set currentTheme(theme) {
    document.querySelector('html').style['color-scheme'] = theme;
  }

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

  __changeTheme() {
    if (!this.currentTheme || this.currentTheme === THEMES.LIGHT) {
      this.currentTheme = THEMES.DARK;
    } else {
      this.currentTheme = THEMES.LIGHT;
    }
  }

  render() {
    return html`
      <header>
        <div class="title">
          <img src="../../../assets/logo.png" aria-label="Flight space news logo" alt="Flight space news logo" />
          <h2>Flight space news</h2>
        </div>
        <div class="buttons">
          <button @click="${this.__changeTheme}">
            <img src="../../../assets/theme-switcher.svg" aria-label="Switch the theme" alt="Switch the theme" />
          </button>
        </div>
        <div>
          <input @change="${this.__searchChange}" type="search" placeholder="Search" />
        </div>
      </header>
    `
  }
}

window.customElements.define('lit-space-news-header', Header)
