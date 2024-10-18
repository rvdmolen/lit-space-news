// Import library dependencies
import { LitElement, html } from 'lit'
import { when } from 'lit/directives/when.js';

// Import Services
import { ApiService } from '../../services/api-service.js';

// Import styling
import { NewsListStyle } from './NewsList.style.js';

// Import custom components
import '../NewsItem/NewsItem.js';
import '../Overlay/LoadingOverlay.js';
import '../Notification/Notification.js';

export class NewsList extends LitElement {

  static styles = [NewsListStyle];

  static properties = {
    _news: {type: Array, state: true},
    _next: {type: String, state: true},
    _loading: {type: Boolean, state: true},
    _error: {type: Boolean, state: true},
  }

  get _loadingElement() {
    return this.shadowRoot.getElementById('overlay-dialog');
  }

  async fetchSpaceNews(searchString) {
    this.__showLoading();
    this._news = [];
    this._error = undefined;
    try {
      const { results, next } = await ApiService.fetchNews(searchString);
      this._news = results || [];
      this._next = next;
    } catch (error) {
      this._error = error;
    } finally {
      this.__hideLoading();
    }
  }

  async __loadMoreNewsItems() {
    this.__showLoading();
    try {
      const { results, next } = await ApiService.fetchUrl(this._next);
      this._news = [...this._news, ...results];
      this._next = next;
    } catch (error) {
      this._error = error;
    } finally {
      this.__hideLoading();
    }
  }

  __showLoading() {
    this._loading = true;
    this._loadingElement.show({
      'spinnerColor': '#6120d0',
    });
  }

  __hideLoading() {
    this._loadingElement.hide();
    this._loading = false;
  }


  render() {
    return html`
      <loading-overlay id="overlay-dialog"></loading-overlay>
      <ul class="news-list">
        ${this._news?.map((newsItem) =>
          html`
            <lit-space-news-item .newsItem="${newsItem}"></lit-space-news-item>`
        )}
      </ul>

      ${when(this._next && !this._loading, () => html`<button class="btn" @click="${this.__loadMoreNewsItems}">More</button>`)}
      ${when(!this._news && !this._loading, () => html`<lit-space-news-notification info>Ready for takeoff??? Start a search</lit-space-news-notification>`)}
      ${when(this._news?.length === 0 && !this._loading && !this._error, () => html`<lit-space-news-notification warning>No space news is found!</lit-space-news-notification>`)}
      ${when(this._error && !this._loading, () => html`<lit-space-news-notification error>Oeps, something went wrong</lit-space-news-notification>`)}
    `
  }
}

window.customElements.define('lit-space-news-list', NewsList)
