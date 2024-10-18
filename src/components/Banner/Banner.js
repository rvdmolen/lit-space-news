import { LitElement, css, html } from 'lit'
import { BannerStyle } from './Banner.style.js';

export class Banner extends LitElement {

  static styles = [BannerStyle];

  render() {
    return html`
      <section class="banner">
        <h1>Search the best flight space news 🚀</h1>
      </section>
    `
  }
}

window.customElements.define('lit-space-news-banner', Banner)
