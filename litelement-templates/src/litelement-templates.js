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
      myString: { type: String },
      myBool: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.title = "Hey there";
    this.counter = 5;
    this.myString = "Hello World";
    this.myArray = ["an", "array", "of", "test", "data"];
    this.myBool = false;
  }
  __increment() {
    this.counter += 1;
  }
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}</h2>
      <button @click=${this.__increment}>Increment</button>
      <hr />
      <p>array loops and conditionals.</p>
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map((i) => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool
        ? html`<p>Render some HTML if myBool is true</p>`
        : html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}
customElements.define("litelement-templates", LitElementTemplates);
