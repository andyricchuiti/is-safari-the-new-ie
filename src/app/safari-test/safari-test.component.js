import {customElement} from "../shared/custom-elements.decorator.js";

@customElement('safari-test', 'p')
class SafariTestComponent extends HTMLParagraphElement {
  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this.innerText = `Neither Safari nor IE11 can see this tag`;
  }
}
