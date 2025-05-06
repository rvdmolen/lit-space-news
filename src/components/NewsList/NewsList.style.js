import { css } from 'lit';

export const NewsListStyle = css`
  :host {
    display: grid;
    margin-bottom: 2em;
    justify-items: center;
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

`;
