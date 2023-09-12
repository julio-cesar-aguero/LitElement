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
    return html`
      <h1>Rendering lists with Lit</h1>
      <p>Lit has built-in support for any iterables!</p>
      <h2>Array</h2>
      <p>${[":*", ":*", ":*"]}</p>
      <h2>Set</h2>
      <p>${new Set(["A", "B", "C"])}</p>
      <h2>Generator</h2>
      <p>
        ${function* () {
          for (let i = 1; i < 4; i++) {
            yield i;
          }
        }}
      </p>
    `;
  }
}
customElements.define("simple-component", SimpleComponent);
