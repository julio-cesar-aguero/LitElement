import { LitElement, css, html } from "lit";
import { map } from "lit/directives/map.js";
export class SimpleComponent extends LitElement {
  static properties = {
    items: { state: true },
  };
  constructor() {
    super();
    this.items = new Set(["Apple", "Banana", "Grape", "Orange", "Lime"]);
  }
  render() {
    return html`
      <p>My uniue fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
customElements.define("simple-component", SimpleComponent);
