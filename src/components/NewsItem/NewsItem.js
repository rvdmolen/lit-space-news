import { LitElement, html, css } from 'lit'
import { NewsItemStyle } from './NewsItem.style.js';

export class NewsItem extends LitElement {

  static styles = [NewsItemStyle];

  static properties = {
    newsItem: {type: Object},
  }

  render() {
    return html`
      <li class="news-list__box">
        <img
          src="${this.newsItem?.image_url}"
          aria-label="${this.newsItem.title}">
        <h3>${this.newsItem.title}</h3>
        <p>${this.newsItem.summary}</p>
        <div class="button-container">
          <a href="#" class="link_button">read more</a>
        </div>
      </li>
    `
  }
}

window.customElements.define('lit-space-news-item', NewsItem);
