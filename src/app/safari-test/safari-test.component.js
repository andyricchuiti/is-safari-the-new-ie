import { customElement } from '../shared/custom-elements.decorator.js';

@customElement('safari-test', 'p')
// eslint-disable-next-line no-unused-vars
class SafariTestComponent extends HTMLParagraphElement {
  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this.innerText = `Neither Safari nor IE11 can see this tag`;
  }
}
