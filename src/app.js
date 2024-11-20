// Import library dependencies
import { LitElement, css, html } from 'lit';

// Import custom components
import './components/Banner/Banner.js';
import './components/Header/Header.js';
import './components/NewsList/NewsList.js';
import './components/NewsListTask/NewsListTask.js';
import './components/SideBar/SideBar.js';

// Store
import { SignalService } from './services/state-service.js';

export class LitSpaceNews extends LitElement {

  static get styles() {
    return css`
      :host {
        display: grid;
        margin: 0 auto;
        text-align: center;
      }
    `
  }

  async #handleSearchChange({detail}) {
    SignalService.searchSpaceItemSignal.set(detail.value);
  }

  async #openSidebar() {
    const current = SignalService.openSideBarSignal.get();
    SignalService.openSideBarSignal.set(!current);
  }

  render() {
    return html`
      <lit-space-news-header @search-change="${this.#handleSearchChange}"></lit-space-news-header>
      <lit-space-news-sidebar></lit-space-news-sidebar>
      <main>
        <lit-space-news-banner></lit-space-news-banner>
        <lit-space-news-list-task @open-side-bar="${this.#openSidebar}" id="lit-space-news-list"></lit-space-news-list-task>
      </main>
    `
  }
}

window.customElements.define('lit-space-news', LitSpaceNews)
