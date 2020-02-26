import {LitElement} from "lit-element";
import {style} from './feature-list.style.js';
import {customElement} from "../shared/custom-elements.decorator.js";

@customElement('feature-list')
class FeatureList extends LitElement {
  static get styles() {
    return style;
  }
}
