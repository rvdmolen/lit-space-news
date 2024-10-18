
import { css } from 'lit';


export const NotificationStyle = css`
  :host {
    padding: 2em;
    display: block;
  }

  .info, .success, .warning, .error, .validation {
    border: 1px solid;
    padding: 1em;
    opacity: 0.5;
  }

  .info {
    color: #00529B;
    background-color: #BDE5F8;
  }

  .success {
    color: #4F8A10;
    background-color: #DFF2BF;
  }

  .warning {
    color: #9F6000;
    background-color: #FEEFB3;
  }

  .error {
    color: #D8000C;
    background-color: #FFBABA;
  }

  .validation {
    color: #D63301;
    background-color: #FFCCBA;
  }
`;
