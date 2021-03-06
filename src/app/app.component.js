import { html, LitElement } from 'lit-element';
import { style } from './app.style.js';
import { customElement } from './shared/custom-elements.decorator.js';

@customElement('is-safari-ie')
// eslint-disable-next-line no-unused-vars
class IsSafariIe extends LitElement {
  static get styles() {
    return style;
  }

  render() {
    return html`
      <div class="container" role="main">
        <h1>Yes</h1>
        <p is="safari-test"></p>
        <feature-list></feature-list>
      </div>
    `;
  }
}
