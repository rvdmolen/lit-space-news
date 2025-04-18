// Import library dependencies
import { LitElement, css, html } from 'lit'

// Import components
import '../Spinner/Spinner.js';

// Import styling
import { SideBarStyle } from './SideBar.style.js';
import { SignalService } from '../../services/state-service.js';
import { when } from 'lit/directives/when.js';

export class SideBar extends LitElement {

  static properties = {
    _newsItemId: {type: String, state: true},
    _loading: {type: Boolean, state: true},
  }

  static styles = [SideBarStyle];

  connectedCallback() {
    super.connectedCallback();
    SignalService.createSignalWatcher(SignalService.openSideBarSignal, (data) => {
      this._loading = true;
      this.#processData(data);
      this.#openSideBar(data);
      // this._loading = false;
    });
  }

  get dom() {
    return {
      dialog: this.shadowRoot.querySelector('dialog')
    };
  }

  #processData(data) {
    const { detail: { newsItemId } } = data;
    this._newsItemId = newsItemId;
  }

  #openSideBar({detail}) {
    const dialog = this.dom.dialog;
    dialog.classList.remove('hidden');
    dialog.showModal();
    this.dom.dialog.showModal();
  }

  #closeSideBar(e) {
    if (e) {e.preventDefault();}
    const dialog = this.dom.dialog;
    dialog.showModal();
    dialog.classList.add('hidden');
    setTimeout(() => {
      this.dom.dialog.close();
    }, 500)

  }

  #onEsc(e) {
    if (e.code === 'Escape') {
      e.preventDefault();
    }
    this.#closeSideBar();
  }

  render() {
    return html`
      <dialog @keydown=${this.#onEsc}>
        <form >
          <header>
            <h2>Dialog header</h2>
          </header>
          <content>
            ${when(this._loading,() =>
                html`
                  <p></p>
                  <lit-space-news-spinner></lit-space-news-spinner>
                `,
              () =>
                html`
                  <p>Content goes here</p>
                  <p>${this._newsItemId}</p>
                `
              )}
          </content>
          <footer>
            <button @click="${this.#closeSideBar}">Close</button>
          </footer>
        </form>
      </dialog>
    `
  }
}

window.customElements.define('lit-space-news-sidebar', SideBar)
