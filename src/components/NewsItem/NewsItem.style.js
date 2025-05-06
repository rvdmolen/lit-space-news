import { css } from 'lit';


export const NewsItemStyle = css`
  :host {
    --border-radius: .5rem;
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .news-list__box {
    background-color: light-dark(var(--white), var(--grey-dark));
    width: 25em;
    display: grid;
    grid-template-rows: 15em 6em 15em 4em;
    min-height: 0;
    min-width: 0;
    align-items: center;
    margin-top: 0;
    transition: width 0.5s, height 0.5s;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: var(--border-radius);
  }

  .news-list__box:hover {
    //width: 24.5em;
    background-color: light-dark(var(--grey-light-accent) ,var(--grey-dark-accent));
  }


  .news-list__box > h3 {
    text-align: center;
    padding-inline: 1rem;
  }

  .news-list__box > p {
    text-align: center;
    padding: 5px;
    margin: 0;
    align-self: start;
  }

  .news-list__box > img {
    width: 100%;
    height: 100%;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }



  .button-container {
    display: flex;
    justify-content: center;
  }

  .news-list__box  {
    opacity: 0;
    animation: fade-in 2s linear forwards   ;
    animation-timeline: view();
    animation-range: entry 0% 30%;
  }

  @keyframes fade-in {
      to {opacity: 1}
  }

`;
