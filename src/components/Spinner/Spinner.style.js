
import { css } from 'lit';


export const SpinnerStyle = css`
  :host {
        display: flex;
    justify-content: center;
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid var(--spin-color); /* Blue */
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`;
