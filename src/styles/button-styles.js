import { css } from 'lit';

export const buttonStyles = css`
  .btn {
    font-size: var(--fs-400);
    padding: 0.7rem 1.5rem;
    border-radius: 0.3rem;
    border: none;
    right: 0.5rem;
    bottom: 0.5rem;
    background-color: light-dark(var(--purple), var(--blue));
    color: var(--white);
  }

  .btn-transparant {
    text-align: center;
    text-decoration: none;
    letter-spacing: .025em;
    text-transform: uppercase;
    font-size: .85rem;
    padding-top: .5rem;
    border-radius: 0.3rem;
    border: none;
    right: 0.5rem;
    bottom: 0.5rem;
    background-color: transparent;
    color: light-dark(var(--font-color-light), var(--font-color-dark));
    cursor: pointer;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: var(--grey-border);
  }

  .btn-black {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    background-color2: var(--grey-dark);
    background-color: light-dark(var(--blue), var(--grey-light-dark));

    color: var(--white);
    border: none;
    height: 43px;
    border-radius: 8px;
    font-size: var(--fs-300);
    font-weight: 700;
  }
`
