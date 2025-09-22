// Import library dependencies
import { html, LitElement } from 'lit'

// Import components
import '../Spinner/Spinner.js';

// Import styling
import { ThemeSwitcherStyle } from './ThemeSwitcher.style.js';
import { Events } from '../../events/events.js';
import { THEMES } from '../../model/constants.js';

export class ThemeSwitcher extends LitElement {

  static styles = [ThemeSwitcherStyle];

  get currentTheme() {
    return document.querySelector('html').style['color-scheme'];
  }

  set currentTheme(theme) {
    document.querySelector('html').style['color-scheme'] = theme;
    this.dispatchEvent(
      new CustomEvent(Events.THEME_CHANGE, {
        bubbles: true,
        composed: true,
        detail: {
          theme
        },
      })
    );
  }

  #changeTheme() {
    if (!this.currentTheme || this.currentTheme === THEMES.LIGHT) {
      this.currentTheme = THEMES.DARK;
    } else {
      this.currentTheme = THEMES.LIGHT;
    }
  }

  render() {
    return html`
      <div>
        <input @click="${this.#changeTheme}" type="checkbox" id="theme-toggle" ?checked="${this.currentTheme === THEMES.DARK}">
        <label for="theme-toggle"><span></span></label>
      </div>
    `
  }
}

window.customElements.define('lit-space-news-theme-switcher', ThemeSwitcher)
