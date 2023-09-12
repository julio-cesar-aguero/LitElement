import { html, css, LitElement } from "lit";

export class EContact extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--e-contact-text-color, #000);
    }
  `;

  static get properties() {
    return {
      nombre: {
        type: String,
      },
      email: {
        type: String,
      },
      verMas: {
        type: String,
      },
    };
  }
  constructor() {
    super();
    this.verMas = false;
  }

  render() {
    return html`
      <style>
        div {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
        }
        h1 {
          font-size: 1.2em;
          font-weight: normal;
        }
      </style>
      <div>
        <h1>${this.nombre}</h1>
        <p><a href="#" @click="${this.toogle}">Ver más</a></p>
        ${this.verMas ? html`Email: ${this.email}` : ""}
      </div>
    `;
  }
  toogle(e) {
    e.preventDefault();
    this.verMas = !this.verMas;
  }
}
window.customElements.define('e-contact', EContact);