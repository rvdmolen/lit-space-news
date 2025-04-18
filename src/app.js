// Import library dependencies
import { LitElement, css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

// Import custom components
import './components/Banner/Banner.js';
import './components/Header/Header.js';
import './components/NewsList/NewsList.js';
import './components/NewsListTask/NewsListTask.js';
import './components/SideBar/SideBar.js';

// Store
import { SignalService } from './services/state-service.js';
import { themeManager } from './services/theme-manager.js';

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
    SignalService.searchSpaceItemSignal.set(detail.value);
  }

  #handleThemeChange({detail}) {
    this.colorMode = themeManager.handleThemeChange(detail.theme);
  }

  async #openSidebar({detail}) {
    const current = SignalService.openSideBarSignal.get();
    SignalService.openSideBarSignal.set({current: !current, detail});
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
          <lit-space-news-banner></lit-space-news-banner>
          <lit-space-news-list-task class="astronaut-background ${classMap(classes)}" @open-side-bar="${this.#openSidebar}" id="lit-space-news-list"></lit-space-news-list-task>
        </main>
      </div>
      <div class="picture-container">
        <img src="/assets/as2.webp" aria-label="Image" alt="Image" />
      </div>
    `
  }
}

window.customElements.define('lit-space-news', LitSpaceNews)
