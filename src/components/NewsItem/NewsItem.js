import { LitElement, html, css } from 'lit'

// import styling
import { NewsItemStyle } from './NewsItem.style.js';
import { buttonStyles } from '../../styles/button-styles.js';

import { Events } from '../../events/events.js';
import { when } from 'lit/directives/when.js';

export class NewsItem extends LitElement {
  #intersectionObserver;

  static styles = [NewsItemStyle, buttonStyles];

  get dom() {
    return {
      image: () => this.shadowRoot.querySelector('img'),
    };
  }

  static properties = {
    newsItem: {type: Object},
    _imageUrl: {type: String, state: true},
  }

  constructor() {
    super();
    this.#intersectionObserver = new IntersectionObserver(this.handleIntersectionQuotaCard.bind(this), {threshold: 0.5});
    this._imageUrl = '/assets/image_loading.png';
  }

  firstUpdated() {
    this.#intersectionObserver.observe(this.dom.image());
  }

  handleIntersectionQuotaCard([footer]) {
    if (footer.isIntersecting) {
      this.#loadImage();
    }
  }

  #loadImage() {
    const img = new Image()
    img.onload = () => {
      this.dom.image().classList.add('loaded');
     this._imageUrl = this.newsItem?.image_url;
    }
    img.src = this.newsItem?.image_url;
  }

  #openSideBar() {
    this.dispatchEvent(
      new CustomEvent(Events.OPEN_SIDEBAR, {
        bubbles: true,
        composed: true,
        detail: {
          newsItemId: this.newsItem.id,
        }
      })
    );
  }

  #mapSummaryText(summary) {
    if (summary.length > 300) {
      return summary.slice(0, 250) + ' [.....]';
    }
    return summary;
  }

  #mapTitle(title) {
    if (title.length > 50) {
      return title.slice(0, 50) + ' .....';
    }
    return title;
  }

  render() {
    return html`
      <li class="news-list__box">
        <img
          src="${this._imageUrl}"
          aria-label="${this.newsItem.title}"
          alt=""/>
        <h3>${this.#mapTitle(this.newsItem.title)}</h3>
        <p>${this.#mapSummaryText(this.newsItem.summary)}</p>
        <div class="button-container">
          <button class="btn-transparant" @click="${this.#openSideBar}">read more</button>
        </div>
      </li>
    `
  }
}

window.customElements.define('lit-space-news-item', NewsItem);
