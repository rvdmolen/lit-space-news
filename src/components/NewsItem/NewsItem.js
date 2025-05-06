import { LitElement, html, css } from 'lit'

// import styling
import { NewsItemStyle } from './NewsItem.style.js';
import { buttonStyles } from '../../styles/button-styles.js';

import { Events } from '../../events/events.js';

export class NewsItem extends LitElement {

  static styles = [NewsItemStyle, buttonStyles];

  static properties = {
    newsItem: {type: Object},
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
          src="${this.newsItem?.image_url}"
          aria-label="${this.newsItem.title}">
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
