// Import library dependencies
import { LitElement, css, html } from 'lit';

// Import custom components
import './components/Banner/Banner.js';
import './components/Header/Header.js';
import './components/Footer/Footer.js';
import './components/NewsList/NewsList.js';
import './components/NewsListTask/NewsListTask.js';
import './components/SideBar/SideBar.js';
import './components/ThemeSwitcher/ThemeSwitcher.js';
import './components/Toast/Toast.js';

// Store
import { themeManager } from './services/theme-manager.js';
import { sideBarService } from './services/side-bar.js';
import { searchService } from './services/search.js';

const COLOR_THEME =  Object.freeze({
  DARK: 'dark',
  LIGHT: 'light'
});

export class LitSpaceNews extends LitElement {

  static get properties() {
    return {
      colorMode: {
        type: String,
      }
    }
  }

  static get styles() {
    return css`
      :host > div:nth-child(1) {
        height: 100vh;
        display: grid;
        grid-template-rows: min-content 0 1fr;
      }

      main {
        display: grid;
        grid-template-rows: min-content 1fr;
      }

      .picture-container {
        position: fixed;
        bottom: 0;
        width: 100%;
        opacity:0.2;
        z-index: -1;
        display: flex;
        justify-content: center;
      }

      .picture-container > img {
        display: table;
        position: relative;
        height: 20rem;
      }

      @media (min-width: 35em) {
        .picture-container > img {
          height: 30rem;
        }

        .picture-container {
          justify-content: right;
        }
      }

      @media (min-width: 45em) {
        .picture-container > img {
          height: 40rem;
        }

        .picture-container {
          justify-content: right;
        }
      }
    `
  }

  connectedCallback() {
    super.connectedCallback();
    this.colorMode = themeManager.setInitialTheme();
  }

  async #handleSearchChange({detail}) {
    searchService.search(detail.value);
  }

  #handleThemeChange({detail}) {
    this.colorMode = themeManager.handleThemeChange(detail.theme);
  }

  async #openSidebar({detail}) {
    sideBarService.open(detail);
  }

  render() {
    const classes = {
      'astronaut-background-light': this.colorMode === COLOR_THEME.LIGHT,
      'astronaut-background-dark': this.colorMode === COLOR_THEME.DARK,
    };
    return html`
      <div>
        <lit-space-news-header @search-change="${this.#handleSearchChange}" @theme-change="${this.#handleThemeChange}" ></lit-space-news-header>
        <lit-space-news-sidebar open></lit-space-news-sidebar>
        <main>
          <lit-space-news-banner @search-change="${this.#handleSearchChange}"></lit-space-news-banner>
          <lit-space-news-list-task  @open-side-bar="${this.#openSidebar}" id="lit-space-news-list"></lit-space-news-list-task>
        </main>
        <lit-space-news-footer></lit-space-news-footer>
        <lit-space-news-toast></lit-space-news-toast>
      </div>
    `
  }
}

window.customElements.define('lit-space-news', LitSpaceNews)
