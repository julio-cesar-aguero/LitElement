import { LitElement, html, css } from "lit";
import "./atribute-property-reflect";
import "./my-converter";
import "./observed-attribute";
import "./my-accesors";
import "./custom-changed";
class PropertiesLit extends LitElement {
  static get properties() {
    return {
      prop1: { type: String },
    };
  }

  constructor() {
    super();
    this.prop1 = "Propiedad 1";
  }

  render() {
    return html`
      <h1>Properties ${this.prop1}</h1>
      <p>LitElement administra las propiedades y atributos.</p>
      <ul>
        Las acciones que realiza por default son:
        <li>Actualizar propiedades declaradas de un elemento</li>
        <li>Capturar valores de una instancia para propiedades</li>
        <li>Aplicar valores establecidos antes del navegador</li>
        <li>configurar u atributo observado</li>
        <li>Manejar la conversión de atributos para las propiedades</li>
        <li>
          Usar la comparación (oldValue !== newValue) para probar los cambios de
          propiedad
        </li>
        <li>
          aplicar las opciones de propiedad y los accesorios declarados por una
          super clase
        </li>
      </ul>
      <!--<property-reflect></property-reflect> -->
      <!-- <my-converter></my-converter> -->
      <!-- <observed-attribute></observed-attribute> -->
      <!-- <h3>Metodos Setters y getters</h3>-->
      <!-- <my-accesors></my-accesors> -->
       <h3>hasChanged personalizado </h3> -->
       <custom-changed></custom-changed>-->

    `;
  }
}

customElements.define("properties-lit", PropertiesLit);
