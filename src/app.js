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

      .astronaut-background {
        background-repeat: no-repeat;
        background-position: bottom right;
        background-attachment: fixed;
      }

      .astronaut-background-light {
         background-image: radial-gradient(at top, rgba(240, 240, 240, 0.5) 40%, rgba(240, 240, 240, 1) 90%, rgba(240, 240, 240, 1) 100%), url('/assets/as2.webp');
      }

      .astronaut-background-dark {
        background-image: url('/assets/as2.webp');
      }
    `
  }

  connectedCallback() {
    super.connectedCallback();
    this.colorMode = COLOR_THEME.LIGHT;
  }

  async #handleSearchChange({detail}) {
    SignalService.searchSpaceItemSignal.set(detail.value);
  }

  #handleThemeChange({detail}) {
    this.colorMode = detail.theme;
    console.log(this.colorMode);
  }

  async #openSidebar() {
    const current = SignalService.openSideBarSignal.get();
    SignalService.openSideBarSignal.set(!current);
  }

  render() {
    const classes = {
      'astronaut-background-light': this.colorMode === COLOR_THEME.LIGHT,
      'astronaut-background-dark': this.colorMode === COLOR_THEME.DARK,
    };
    return html`
      <div>
        <lit-space-news-header @search-change="${this.#handleSearchChange}" @theme-change="${this.#handleThemeChange}" ></lit-space-news-header>
        <lit-space-news-sidebar></lit-space-news-sidebar>
        <main>
          <lit-space-news-banner></lit-space-news-banner>
          <lit-space-news-list-task class="astronaut-background ${classMap(classes)}" @open-side-bar="${this.#openSidebar}" id="lit-space-news-list"></lit-space-news-list-task>
        </main>
      </div>
    `
  }
}

window.customElements.define('lit-space-news', LitSpaceNews)
