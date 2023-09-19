import { LitElement, html, css } from "lit";

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1em;
        border: 1px solid #ccc;
      }
      h2 {
        color: red;
      }
    `,
  ];

  static properties = {
    counter: { type: Number },
  };
  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <h2>Mi contador</h2>
      <p>${this.counter}</p>
      <button @click=${this.increment}>Increment</button>
      <button @click=${this.decrement}>Decrement</button>
    `;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
customElements.define("eit-counter", EitCounter);
