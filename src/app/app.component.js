import {html, LitElement} from "lit-element";
import {style} from './app.style.js';
import {customElement} from './shared/custom-elements.decorator.js';

@customElement('is-safari-ie')
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
