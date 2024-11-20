import { LitElement, html, css } from 'lit'
import { NewsItemStyle } from './NewsItem.style.js';
import { Events } from '../../events/events.js';

export class NewsItem extends LitElement {

  static styles = [NewsItemStyle];

  static properties = {
    newsItem: {type: Object},
  }

  #openSideBar() {
    this.dispatchEvent(
      new CustomEvent(Events.OPEN_SIDEBAR, {
        bubbles: true,
        composed: true,
        detail: {}
      })
    );
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
          <a href="#" class="link_button" @click="${this.#openSideBar}">read more</a>
          <button @click="${this.#openSideBar}">Mpre</button>
        </div>
      </li>
    `
  }
}

window.customElements.define('lit-space-news-item', NewsItem);
