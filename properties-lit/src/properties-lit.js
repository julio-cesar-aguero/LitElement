import { LitElement, html, css } from "lit";

class PropertiesLit extends LitElement {
  static properties = {
    header: { type: String },
  };

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
      <h1>Properties</h1>
      <p>LitElement administra las propiedades y atributos.</p>
      <ul>
        Las acciones que realiza por default son:
        <li>Actualizar propiedades declaradas de un elemento</li>
        <li>Capturar valores de una instancia para propiedades</li>
        <li>Aplicar valores establecidos antes del navegador</li>
        <li>cinfigurar u  atributo observado</li>
        <li>Manejar la conversión</li>
      </ul>
    `;
  }
}

customElements.define("properties-lit", PropertiesLit);
