// Import library dependencies
import { LitElement, html } from 'lit'
import { Task } from '@lit/task';

// Import Services
import { ApiService } from '../../services/api-service.js';

// Import Mixins
import { LoadingMixin } from '../../mixins/loading/LoadingMixin.js';

// Import styling
import { NewsListTaskStyle } from './NewsListTask.style.js';

// Import custom components
import '../NewsItem/NewsItem.js';
import '../Overlay/LoadingOverlay.js';
import '../Notification/Notification.js';

export class NewsListTask extends LoadingMixin(LitElement) {

  static styles = [NewsListTaskStyle];

  static properties = {
    _news: {type: Array, state: true},
  }

  fetchSpaceNews(searchString) {
    this._spaceNewsTask.run([searchString]);
  }

  _spaceNewsTask = new Task(this, {
    task: async ([searchString], {signal}) => {
      this.__showLoading();
      const response = await fetch(ApiService.makeRequest(searchString), {signal});
      // const response = await fetch(ApiService.makeRequest(searchString), {signal: AbortSignal.timeout(500)});
      if (!response.ok) {
        throw new Error(response.status);
      }
      signal.throwIfAborted();
      return response.json();
    },
  });

  renderNewsList(news) {
    this.__hideLoading();
    return html`
      <ul class="news-list">
        ${news?.map((newsItem) =>
          html`
            <lit-space-news-item .newsItem="${newsItem}"></lit-space-news-item>`
        )}
      </ul>
    `
  }

  renderError() {
    this.__hideLoading();
    return html`
      <lit-space-news-notification error>Oeps, something went wrong</lit-space-news-notification>
    `
  }

  render() {
    return html`
      <loading-overlay id="overlay-dialog"></loading-overlay>
      ${this._spaceNewsTask.render({
        initial: () => html`
          <lit-space-news-notification info>Ready for takeoff??? Start a search</lit-space-news-notification>`,
        pending: () => html`<p>Running task...</p>`,
        complete: (value) => this.renderNewsList(value?.results),
        error: (error) => this.renderError(),
      })}
    `;
  }
}

window.customElements.define('lit-space-news-list-task', NewsListTask)
