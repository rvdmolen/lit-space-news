import { css } from 'lit';

export const inputStyles = css`
  input {
    font-size: 1rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: var(--light-blue-border);
    padding: 10px;
    background: white;
  }

  input:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: light-dark(var(--blue), var(--blue));
  }
`
