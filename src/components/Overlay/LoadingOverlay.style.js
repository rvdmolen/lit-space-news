import { css } from 'lit';


export const LoadingOverlayStyle = css`
  dialog {
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
    width: 500px;
  }

  dialog::backdrop {
    background: #666666;
    opacity: 0.6;

  }

  dialog[open] {
    display: block;
  }

  form {
    display: flex;
    justify-content: center;
    padding-block: 10em;
  }

  .loading-ball {
    width: 100px !important;
    height: 100px !important;
  }

  .la-ball-circus, .la-ball-circus > div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }

  .la-ball-circus {
    display: block;
    font-size: 0;
    color: #fff
  }

  .la-ball-circus > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor
  }

  .la-ball-circus > div {
    position: absolute;
    top: 0;
    left: -100%;
    display: block;
    width: 16px;
    width: 100%;
    height: 16px;
    height: 100%;
    border-radius: 100%;
    opacity: .5;
    -webkit-animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
    -moz-animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
    -o-animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
    animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1)
  }

  .la-ball-circus > div:nth-child(1) {
    -webkit-animation-delay: 0s, -0.5s;
    -moz-animation-delay: 0s, -0.5s;
    -o-animation-delay: 0s, -0.5s;
    animation-delay: 0s, -0.5s
  }

  .la-ball-circus > div:nth-child(2) {
    -webkit-animation-delay: -0.5s, -1s;
    -moz-animation-delay: -0.5s, -1s;
    -o-animation-delay: -0.5s, -1s;
    animation-delay: -0.5s, -1s
  }

  .la-ball-circus > div:nth-child(3) {
    -webkit-animation-delay: -1s, -1.5s;
    -moz-animation-delay: -1s, -1.5s;
    -o-animation-delay: -1s, -1.5s;
    animation-delay: -1s, -1.5s
  }

  .la-ball-circus > div:nth-child(4) {
    -webkit-animation-delay: -1.5s, -2s;
    -moz-animation-delay: -1.5s, -2s;
    -o-animation-delay: -1.5s, -2s;
    animation-delay: -1.5s, -2s
  }

  .la-ball-circus > div:nth-child(5) {
    -webkit-animation-delay: -2s, -2.5s;
    -moz-animation-delay: -2s, -2.5s;
    -o-animation-delay: -2s, -2.5s;
    animation-delay: -2s, -2.5s
  }

  .la-ball-circus.la-3x {
    width: 100px;
    height: 100px
  }

  .la-ball-circus.la-3x > div {
    width: 100px;
    height: 100px
  }

  @-webkit-keyframes ball-circus-position {
    50% {
      left: 100%
    }
  }
  @-moz-keyframes ball-circus-position {
    50% {
      left: 100%
    }
  }
  @-o-keyframes ball-circus-position {
    50% {
      left: 100%
    }
  }
  @keyframes ball-circus-position {
    50% {
      left: 100%
    }
  }
  @-webkit-keyframes ball-circus-size {
    50% {
      -webkit-transform: scale(0.3, 0.3);
      transform: scale(0.3, 0.3)
    }
  }
  @-moz-keyframes ball-circus-size {
    50% {
      -moz-transform: scale(0.3, 0.3);
      transform: scale(0.3, 0.3)
    }
  }
  @-o-keyframes ball-circus-size {
    50% {
      -o-transform: scale(0.3, 0.3);
      transform: scale(0.3, 0.3)
    }
  }
  @keyframes ball-circus-size {
    50% {
      -webkit-transform: scale(0.3, 0.3);
      -moz-transform: scale(0.3, 0.3);
      -o-transform: scale(0.3, 0.3);
      transform: scale(0.3, 0.3)
    }
  }
`;
