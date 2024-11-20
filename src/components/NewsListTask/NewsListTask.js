// Import library dependencies
import { html, LitElement } from 'lit'
import { when } from 'lit/directives/when.js';
import { Task } from '@lit/task';

// Import Services
import { ApiService } from '../../services/api-service.js';

// Import styling
import { NewsListTaskStyle } from './NewsListTask.style.js';

// Import custom components
import '../NewsItem/NewsItem.js';
import '../LoadingOverlay/LoadingOverlay.js';
import '../Notification/Notification.js';
import { LoadingMixin } from '../../mixins/loading/LoadingMixin.js';

// Store
import { SignalService } from '../../services/state-service.js';

export class NewsListTask extends LoadingMixin(LitElement) {

  #intersectionObserver;
  #news;
  #next;
  #spaceNewsTask;

  static styles = [NewsListTaskStyle];

  get dom() {
    return {
      footer: () => this.shadowRoot.querySelector('.footer'),
    };
  }

  constructor() {
    super();
    this.#news = [];
    this.#intersectionObserver = new IntersectionObserver(
      this.handleIntersectionQuotaCard.bind(this),
      { threshold: 0.5 },
    );
    this.#spaceNewsTask = new Task(this, {
      task: async ([searchString, offset = 10], {signal}) => {
        // const response = await fetch(ApiService.makeRequest(searchString), {signal: AbortSignal.timeout( 500)});
        const response = await fetch(ApiService.makeRequest(searchString, offset));
        if (!response.ok) { throw new Error(response.status); }
        signal.throwIfAborted();

        const apiResult = await response.json();
        const {results, next} = apiResult;

        const mergedNews = [...this.#news, ...results];
        this.#next = next;
        this.#news = mergedNews;

        return {
          results: mergedNews,
        };
      },
    });
  }

  firstUpdated() {
    this.#intersectionObserver.observe(this.dom.footer());
  }

  handleIntersectionQuotaCard([footer]) {
    if ((footer.isIntersecting) && (this.#next)) {
      const params = new URLSearchParams(this.#next.split('?')[1]);
      const nextOffset = params.get('offset');
      const searchString = params.get('title_contains');
      this.#spaceNewsTask.run([searchString, nextOffset]);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    SignalService.createSignalWatcher(SignalService.searchSpaceItemSignal, () => {
      this.__fetchSpaceNews(SignalService.searchSpaceItemSignal.get());
    });
  }

  __fetchSpaceNews(searchString) {
    this.#spaceNewsTask.run([searchString]);
  }

  __renderNewsList(news) {
    return html`

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

  get news() {
    const { results } = this.#spaceNewsTask?.value || false;
    return results || [];
  }

  render() {
    return html`
      <loading-overlay id="overlay-dialog"></loading-overlay>
      <ul class="news-list">
        ${this.news.map((newsItem) =>
          html`
            <lit-space-news-item data-seq=${newsItem.id} .newsItem="${newsItem}"></lit-space-news-item>`
        )}
      </ul>
      ${this.#spaceNewsTask.render({
        initial: () => this.__renderStartMessage(),
        pending: () => this.__showLoading(),
        complete: ({results}) => {
          this.__hideLoading();
          return this.__renderNewsList(results);
        },
        error: (value) => {
          console.log(value);
          this.__hideLoading();
          return this.__renderError();
        },
      })}
      <div class="footer"></div>
    `;
  }
}

window.customElements.define('lit-space-news-list-task', NewsListTask)
