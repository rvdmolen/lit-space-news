
import { css } from 'lit';


export const SideBarStyle = css`
  :host {
    --minimum-size: 25vw;
  }

  dialog {
    width: clamp(var(--minimum-size), 40%, 1600px);
    height: 95vh;
    position: absolute;
    border-radius: 20px;
    margin-right: 10px;
    outline: none;
    border: 0;
    box-shadow: 3px 2px 4px 2px rgb(0 0 0 / 30%);
    transform-origin: right;
    animation: slide-in 0.3s ease forwards;
  }

  dialog::backdrop {
    visibility: hidden;
  }


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header h2 {
    flex-grow: 1;
  }

  .cancel-btn {
    position: relative;
    top: -25px;
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
