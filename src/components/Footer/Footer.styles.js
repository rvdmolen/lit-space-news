import { css } from 'lit';


export const FooterStyles = css`
  .footer {
    background-color: light-dark(var(--purple), var(--grey-dark));
    padding: 20px;
    text-align: center;
    display: grid;
    gap: 10px;
  }

  .footer > p {
    font-size: var(--fs-300);
    color: var(--white);
  }

  .social-links a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-size: var(--fs-300);
  }

  .newsletter input {
    margin-right: 10px;
  }


`;
