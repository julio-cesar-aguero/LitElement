import { LitElement, css, html } from "lit";
import "./EContact";

export class ContactList extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;
  static properties = {
    contactos: { type: Array },
  };
  constructor() {
    super();
    this.contactos = [
      {
        nombre: "Lucho Godinez",
        email: "user1_some_email@mail.com",
      },
      {
        nombre: "Hugo Sanchez",
        email: "user2_some_email@mail.com",
      },
      {
        nombre: "Jhon Doe",
        email: "user3_some_email@mail.com",
      },
    ];
  }
  render() {
    return html`
      <div>
        ${this.contactos.map(
          (contact) => html`<e-contact
            nombre="${contact.nombre}"
            email="${contact.email}"
          ></e-contact> `
        )}
      </div>
    `;
  }
}
customElements.define("contact-list", ContactList);
