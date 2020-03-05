import { html, LitElement } from 'lit-element';
import { style } from './feature-list.style.js';
import { customElement } from '../shared/custom-elements.decorator.js';

@customElement('feature-list')
// eslint-disable-next-line no-unused-vars
class FeatureList extends LitElement {
  static get styles() {
    return style;
  }

  render() {
    return html`
      <hr>
        <h2>
          Here's a list of things Chrome, Edge, and Firefox support, but IE11 and Safari do not.
        </h2>
        <ul>
          <li>Extending Built-in Elements</li>
          <li>Date and time input types</li>
          <li>CSSOM Scroll-behavior</li>
          <li>CSS Motion Path</li>
          <li>CSS Containment</li>
          <li>Custom protocol handling</li>
          <li>Vibration API</li>
          <li>Shared Web Workers <small>(IE actually supports this.)</small></li>
          <li>requestIdleCallback</li>
          <li>Push API</li>
          <li>BroadcastChannel</li>
          <li>BigInt</li>
          <li>Touch events</li>
          <li>MediaRecorder API</li>
          <li>Auxclick</li>
          <li>Permissions API</li>
          <li>WebP image format</li>
          <li>createImageBitmap</li>
        </ul>
        <hr></hr>
        <p><small style="text-align: left;">Data gotten from caniuse.com and experience.</small></p>
      </section>
    `;
  }
}
