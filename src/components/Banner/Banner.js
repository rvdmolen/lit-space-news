import { LitElement, css, html } from 'lit'
import { BannerStyle } from './Banner.style.js';
import { inputStyles } from '../../styles/input-styles.js';
import { toastService } from '../../services/toast-service.js';
import { Events } from '../../events/events.js';

export class Banner extends LitElement {

  static styles = [ inputStyles, BannerStyle];

  #searchChange(event) {
    const searchValue = event?.target.value;
    this.#sendSearchChangeEvent(searchValue);
  }

  #sendSearchChangeEvent(value) {
    toastService.publish('Some toast message from banner');
    this.dispatchEvent(
      new CustomEvent(Events.SEARCH_CHANGE, {
        bubbles: true,
        composed: true,
        detail: {
          value
        },
      })
    );
  }

  render() {
    return html`
      <section class="banner">
        <h1>Discover the Universe, One Story at a Time</h1>
        <p>Search for the latest news from space agencies, observatories, and cosmic explorers.</p>
        <input name="search-input" @change="${this.#searchChange}" type="text" placeholder="Try searching for 'James Webb Telescope' or 'Mars mission'" />

      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
        <path fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,112C640,107,800,117,960,117.3C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    `
  }
}

window.customElements.define('lit-space-news-banner', Banner)
