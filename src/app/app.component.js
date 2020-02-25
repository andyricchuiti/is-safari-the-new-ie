import {html, LitElement} from "lit-element";
import {style} from './app.style.js';

class IsSafariIe extends LitElement {
  static get styles() {
    return style;
  }

  render() {
    return html`
      <h1>Yes</h1>
    `;
  }
}

customElements.define('is-safari-ie', IsSafariIe);
