
import { css } from 'lit';


export const SideBarStyle = css`
  :host {
    --minimum-size: 25vw;
  }

  dialog {
    outline: none;
    width: 100%;
    height: 100vh;
    border-color: var(--grey-border);
  }

  @media (min-width: 35em) {
    dialog {
      width: clamp(var(--minimum-size), 60%, 1600px);
      height: 95vh;
      position: absolute;
      border-radius: 20px;
      margin-right: 10px;
      border: 0;
      box-shadow: 3px 2px 4px 2px rgb(0 0 0 / 30%);
      transform-origin: right;
      animation: slide-in 0.3s ease forwards;
      padding: 0;
    }
  }



  form > content {
    padding: 1.0em;
  }

  form > header {
    padding-inline: 1.0em;
  }

  dialog > form {
    display: grid;
    grid-template-rows: minmax(25px, max-content) 1fr;
    height: 100%;
  }

  header {
    background-color: #49495c;
    color: var(--white);
  }

  header > .close-container {
    position: fixed;
    top: 1.35em;
    right: 1.65em;
  }
  footer {
    padding: 1.0em;
    text-align: center;
  }

  footer > button {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    width: 15em;
    background: var(--purple);
    border: none;
    color: var(--white);
    height: 46px;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 700;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: scaleX(0.00001);
    }
    35% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: scaleX(0.00001);
    }
    35% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: scaleX(1);
    }
  }

`;
