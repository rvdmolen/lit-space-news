// Import library dependencies
import {html, LitElement} from 'lit'
import {when} from 'lit/directives/when.js';
import {Task} from '@lit/task';

// Import Services
import {ApiService} from '../../services/api-service.js';

// Import styling
import {NewsListTaskStyle} from './NewsListTask.style.js';
import {buttonStyles} from '../../styles/button-styles.js';

// Import custom components
import '../NewsItem/NewsItem.js';
import '../LoadingOverlay/LoadingOverlay.js';
import '../Notification/Notification.js';
import {LoadingMixin} from '../../mixins/loading/LoadingMixin.js';

// Store
import {SignalService} from '../../services/state-service.js';

export class NewsListTask extends LoadingMixin(LitElement) {
  #intersectionObserver;
  #news;
  #next;
  #spaceNewsTask;

  static styles = [NewsListTaskStyle, buttonStyles];

  get dom() {
    return {
      footer: () => this.shadowRoot.querySelector('.footer'),
    };
  }

  get news() {
    const {results} = this.#spaceNewsTask?.value || false;
    return results || [];
  }


  constructor() {
    super();
    this.#news = [];
    this.#intersectionObserver = new IntersectionObserver(this.handleIntersectionQuotaCard.bind(this), {threshold: 0.5});
    this.#spaceNewsTask = new Task(this, {
      task: async ([searchString, offset = 10], {signal}) => {
        let response;
        try {
          response = await ApiService.fetchNews(searchString, offset,  {signal: AbortSignal.timeout( 1000)});
        } catch (e) {
          signal.throwIfAborted();
        }

        const {results, next} = response;

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
    this.#spaceNewsTask.run('test');
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
    SignalService.createSignalWatcher(SignalService.searchSpaceItemSignal, (newValue) => {
      this.#spaceNewsTask.run([newValue]);
    });
  }

  #renderNewsList(news) {
    return html`
      ${when(news?.length === 0,
        () => html`
          <lit-space-news-notification warning>No space news is found!</lit-space-news-notification>`
      )}
    `
  }

  #renderError() {
    return html`
      <lit-space-news-notification error>Oeps, something went wrong</lit-space-news-notification>
    `
  }

  #renderStartMessage() {
    return html`

    `
  }

  #renderHiddenCards() {
    return html`
      <li class="wrapper" aria-hidden="true"></li>
      <li class="wrapper" aria-hidden="true"></li>
      <li class="wrapper" aria-hidden="true"></li>
      <li class="wrapper" aria-hidden="true"></li>
    `
  }

  render() {
    return html`
      <loading-overlay id="overlay-dialog"></loading-overlay>
      <ul class="news-list">
        ${this.news.map((newsItem) =>
          html`
            <lit-space-news-item data-seq=${newsItem.id} .newsItem="${newsItem}"></lit-space-news-item>`
        )}
        ${this.#renderHiddenCards()}
      </ul>
      ${this.#spaceNewsTask.render({
        initial: () => this.#renderStartMessage(),
        pending: () => this.showLoading(),
        complete: ({results}) => {
          this.hideLoading();
          return this.#renderNewsList(results);
        },
        error: (value) => {
          this.hideLoading();
          return this.#renderError();
        },
      })}
      <div class="footer"></div>
    `;
  }
}

window.customElements.define('lit-space-news-list-task', NewsListTask)
