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
  }

  div {
    width: 20rem;
    box-sizing: border-box;
  }

  h2 {
    margin: 0;
    align-content: center;
  }

  img {
    width: 50px;
  }

  .title {
    display: flex;
    gap: 0.5rem;
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
    background: transparent url("/assets/search-white.svg") no-repeat 13px;
  }

  @media (prefers-color-scheme: light) {
    input {
      background: transparent url("/assets/search.svg") no-repeat 13px;
    }
  }
`;
