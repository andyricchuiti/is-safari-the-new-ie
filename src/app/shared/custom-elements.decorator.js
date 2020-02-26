export function customElement(elemName) {
  return function (target) {
    customElements.define(elemName, target);
  }
}
