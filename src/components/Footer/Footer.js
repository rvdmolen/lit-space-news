import { html, LitElement } from 'lit'
import { FooterStyles } from './Footer.styles.js';
import { inputStyles } from '../../styles/input-styles.js';
import { buttonStyles } from '../../styles/button-styles.js';


export class Footer extends LitElement {

  static styles = [buttonStyles, inputStyles ,FooterStyles];


  render() {
    return html`
      <div class="footer">
        <div class="social-links">
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
          <a href="#">NASA Feed</a>
        </div>
        <div class="newsletter">
          <input type="email" placeholder="Subscribe to our newsletter">
          <button class="btn-black">Subscribe</button>
        </div>
        <p>© 2025 Flight space news. All rights reserved.</p>
      </div>
    `
  }
}

window.customElements.define('lit-space-news-footer', Footer)
