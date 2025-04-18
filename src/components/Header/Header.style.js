import { css } from 'lit';


export const HeaderStyle = css`
  :host {
    background-color: light-dark(var(--white), var(--grey-dark));
  }

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    height: 3rem;
  }

  header > div:last-of-type {
    width: 20em;
  }

  div {
    box-sizing: border-box;
  }

  h2 {
    margin: 0;
    align-content: center;
  }

  img {
    width: 30px;
  }

  .title {
    display: flex;
    gap: 0.5rem;
    flex-grow: 1;
  }

  input {
    width: 100%;
    font-size: 1rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: #E2E8F0;
    outline-color: var(--blue);
    padding: 9px 4px 9px 40px;
    background: transparent url("/assets/search.svg") no-repeat 13px;
  }

  .buttons {
    display: flex;
    justify-content: right;

    button {
      width: 35px;
      margin: 0;
      padding: 0;
      border: 0;
      display: flex;
      background-color: light-dark(var(--white), var(--grey-dark));
      cursor: pointer;
    }
  }

  .dark-mode input {
    background: transparent url("/assets/search-white.svg") no-repeat 13px;
  }

  @media (prefers-color-scheme: dark) {
    input {
      background: transparent url("/assets/search-white.svg") no-repeat 13px;
    }
  }
`;
