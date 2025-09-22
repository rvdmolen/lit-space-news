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

  @media (min-width: 35em) {
    img {
      width: 35px;
    }
  }

  @media (min-width: 45em) {
    img {
      width: 45px;
    }
  }

  .title {
    display: flex;
    gap: 0.5rem;
    flex-grow: 1;
  }

  .buttons {
    margin-left: auto;
    align-content: center;

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
