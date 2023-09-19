import { LitElement, html, css } from "lit";
import "./mi-mensaje";
const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class WebComponents extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css``;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    
    return html`
      <h2>mensaje:</h2>
      <mi-mensaje msj="Hola soy un mensaje"> aqui </mi-mensaje>
    `;
  }
}

customElements.define("web-components", WebComponents);
