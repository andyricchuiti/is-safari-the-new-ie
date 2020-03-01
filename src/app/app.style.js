import { css } from 'lit-element';

export const style = css`
  :host {
    font-size: 16px;
  }

  .container {
    margin: 0 1em;
    text-align: center;
  }
  @media (min-width: 768px) {
    .container {
      margin: 0 auto;
      max-width: 475px;
    }
  }

  h1 {
    font-size: 6em;
  }

  p {
    margin-bottom: 1em;
  }
`;
