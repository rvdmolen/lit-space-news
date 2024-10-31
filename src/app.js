// Import library dependencies
import { LitElement, css, html } from 'lit';

// Import custom components
import './components/Banner/Banner.js';
import './components/Header/Header.js';
import './components/NewsList/NewsList.js';
import './components/NewsListTask/NewsListTask.js';


export class LitSpaceNews extends LitElement {

  static get styles() {
    return css`
      :host {
        display: grid;
        margin: 0 auto;
        text-align: center;
      }

      loading-overlay {
        display: none;
      }
    `
  }

  get spaceListNewsElement() {
    return this.shadowRoot.getElementById('lit-space-news-list');
  }

  async __handleSearchChange({detail}) {
    await this.spaceListNewsElement.fetchSpaceNews(detail.value);
  }

  render() {
    return html`
      <lit-space-news-header @search-change="${this.__handleSearchChange}"></lit-space-news-header>
      <main>
        <lit-space-news-banner></lit-space-news-banner>
        <lit-space-news-list-task id="lit-space-news-list"></lit-space-news-list-task>
      </main>
    `
  }
}

window.customElements.define('lit-space-news', LitSpaceNews)
