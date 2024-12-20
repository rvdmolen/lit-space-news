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
    this.dom.dialog.showModal();
  }

  #closeSideBar() {
    this.dom.dialog.close();
  }


  render() {
    return html`
      <dialog>
        <form method="dialog">
          <header>
            <h2>Dialog header</h2>
          </header>
          <content>
            <p>Content goes here</p>
          </content>
          <footer>
            <button>Close</button>
          </footer>
        </form>
      </dialog>
    `
  }
}

window.customElements.define('lit-space-news-sidebar', SideBar)
