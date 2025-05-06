import { css } from 'lit';

export const NewsListTaskStyle = css`
  :host {
    margin-bottom: 2em;
    justify-items: center;
    height: 100%;
  }

  .news-list {
    display: flex;
    justify-content: center;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;
    gap: 2em;
    padding-block: 2em;
    padding-inline: 0;
    margin-block: 0;
  }

  .footer {
    height: 10em;
    background-color: var(--purple);
  }

  .wrapper {
    width: 25em;
  }

`;
