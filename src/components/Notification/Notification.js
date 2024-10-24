// Import library dependencies
import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';

// Import styling
import { NotificationStyle } from './Notification.style.js';

export class Notification extends LitElement {

  static properties = {
    error: { type: Boolean, attribute: true },
    info: { type: Boolean, attribute: true },
    warning: { type: Boolean, attribute: true },
  }

  static styles = [NotificationStyle];

  render() {
    const classes = { error: this.error, info: this.info, warning: this.warning };
    return html`
      <div class=${classMap(classes)}>
        <p><slot></slot></p>
      </div>
    `
  }
}

window.customElements.define('lit-space-news-notification', Notification)
