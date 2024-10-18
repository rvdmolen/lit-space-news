import { css } from 'lit';

export const NewsListStyle = css`
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

  .btn {
    font-size: 1.1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 0.3rem;
    border: none;
    right: 0.5rem;
    bottom: 0.5rem;
    background-color: light-dark(var(--purple), var(--blue));
    color: var(--white);
  }

`;
