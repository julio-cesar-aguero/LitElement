import { LitElement, css, html } from "lit";

export class LitElementTemplates extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        padding: 5px 25px;
        color: var(--litelement-templates-text-color, #000);
      }
    `;
  }
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }
  constructor() {
    super();
    this.title = "Hey there";
    this.counter = 5;
  }
  __increment() {
    this.counter += 1;
  }
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}</h2>
      <button @click=${this.__increment}>Increment</button>
    `;
  }
}
customElements.define("litelement-templates", LitElementTemplates);
