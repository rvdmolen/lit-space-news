import { css } from 'lit';


export const BannerStyle = css`
  .banner {
    background-color: light-dark(var(--purple), var(--grey-light-dark));
    color: var(--white);
    padding-top: 2rem;
    padding-inline: 2rem;
    margin: 0;
    display: grid;
    justify-content: center;
  }

  svg {
    fill: light-dark(var(--purple), var(--grey-light-dark));
  }

  input {
    height: 2.5rem;
    background: white url("/assets/search.svg") no-repeat 13px;
    padding: 9px 4px 9px 40px;
    margin-bottom: 5px;
    color: var(--black);
  }

  h1 {
    margin: 0;
  }

  p {
    font-size: var(--fs-500);
    margin-bottom: 20px;
  }

`;
