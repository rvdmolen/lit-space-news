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

  .wrapper {
    width: 25em;
  }

  .empty-state {
    display: grid;
    justify-items: center;
    margin-top: -170px;
    width: 100%;
  }

  .empty-state img {
    width: 10rem;
  }

  .empty-state p {
    font-size: var(--fs-400);
  }

`;
