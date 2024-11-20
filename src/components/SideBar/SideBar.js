// Import library dependencies
import { LitElement, css, html } from 'lit'

// Import styling
import { SideBarStyle } from './SideBar.style.js';
import { SignalService } from '../../services/state-service.js';

export class SideBar extends LitElement {

  static properties = {}

  static styles = [SideBarStyle];

  connectedCallback() {
    super.connectedCallback();
    SignalService.createSignalWatcher(SignalService.openSideBarSignal, () => {
      this.#openSideBar();
    });
  }

  get dom() {
    return {
      dialog: this.shadowRoot.querySelector('dialog')
    };
  }

  #openSideBar() {
    console.log('open side bar');
    this.dom.dialog.showModal();
  }

  #hide() {
    this.dom.dialog.close();
  }

  render() {
    return html`
      <p>Hello</p>
      <button @click="${this.#openSideBar}">Show</button>
      <dialog>
        <form>
          <header>
            <h2>Dialog header</h2>
            <button class="cancel-btn" @click="${this.#hide}">X</button>
          </header>
          <button @click="${this.#hide}">Close</button>
        </form>
      </dialog>
    `
  }
}

window.customElements.define('lit-space-news-sidebar', SideBar)
