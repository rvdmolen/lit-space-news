// Import library dependencies
import { LitElement, html } from 'lit'
import { when } from 'lit/directives/when.js';
import { Task } from '@lit/task';

// Import Services
import { ApiService } from '../../services/api-service.js';

// Import styling
import { NewsListTaskStyle } from './NewsListTask.style.js';

// Import custom components
import '../NewsItem/NewsItem.js';
import '../Overlay/LoadingOverlay.js';
import '../Notification/Notification.js';
import { LoadingMixin } from '../../mixins/loading/LoadingMixin.js';

export class NewsListTask extends LoadingMixin(LitElement) {

  static styles = [NewsListTaskStyle];

  static properties = {
    _news: {type: Array, state: true},
  }

  #spaceNewsTask = new Task(this, {
    task: async ([searchString], {signal}) => {
      this.__showLoading();
      const response = await fetch(ApiService.makeRequest(searchString), {signal: AbortSignal.timeout( 500)});
      if (!response.ok) { throw new Error(response.status); }
      signal.throwIfAborted();
      return response.json();
    },
  });

  fetchSpaceNews(searchString) {
    this.#spaceNewsTask.run([searchString]);
  }

  __renderNewsList(news) {
    return html`
      <ul class="news-list">
        ${news?.map((newsItem) =>
          html`
            <lit-space-news-item .newsItem="${newsItem}"></lit-space-news-item>`
        )}
      </ul>
      ${when(news?.length === 0,
              () => html`<lit-space-news-notification warning>No space news is found!</lit-space-news-notification>`
      )}
    `
  }

  __renderError() {
    return html`
      <lit-space-news-notification error>Oeps, something went wrong</lit-space-news-notification>
    `
  }


  __renderStartMessage() {
    return html`
      <lit-space-news-notification info>Ready for takeoff??? Start a search</lit-space-news-notification>
    `
  }

  render() {
    return html`
      <loading-overlay id="overlay-dialog"></loading-overlay>
      ${this.#spaceNewsTask.render({
        initial: () => this.__renderStartMessage(),
        pending: () => this.__showLoading(),
        complete: (value) => {
          this.__hideLoading();
          return this.__renderNewsList(value?.results)
        },
        error: (value) => {
          this.__hideLoading();
          return this.__renderError();
        },
      })}
    `;
  }
}

window.customElements.define('lit-space-news-list-task', NewsListTask)
