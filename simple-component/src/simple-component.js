import { LitElement, css, html } from "lit";

export class SimpleComponent extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;
  static properties = {
    holamundo: { type: String },
  };
  constructor() {
    super();
    this.holamundo = "Hola mundo litlelement julio cesar";
  }
  render() {
    return html` <p>${this.holamundo}</p> `;
  }
}
customElements.define("simple-component", SimpleComponent);
