import { LitElement, html, css } from "lit";

export class ThemeElement extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--my-element-text-color);
        background-color: var(--my-element-background-color);
        font-family: var(--my-element-font-family, Roboto);
      }
      :host([hidden]) {
        display: none;
      }
    `;
  }

  render() {
    return html` <h3>Theme element</h3> `;
  }
}
customElements.define("theme-element", ThemeElement);
