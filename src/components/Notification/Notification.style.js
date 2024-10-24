
import { css } from 'lit';


export const NotificationStyle = css`
  :host {
    padding: 2em;
    display: block;
    width: 75%;
  }

  .info, .warning, .error {
    padding: 1em;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }

  .info {
    color: rgb(29 78 216);
    background-color: rgb(219 234 254);
    border-color: rgb(59 130 246);
  }

  .warning {
    color: rgb(180 83 9);
    background-color: rgb(254 243 199);
    border-color: rgb(245 158 11 );
  }

  .error {
    color: rgb(185 28 28);
    background-color: rgb(254 226 226);
    border-color: rgb(239 68 68);
  }

`;
