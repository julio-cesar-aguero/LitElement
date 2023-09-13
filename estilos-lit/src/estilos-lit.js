import { LitElement, html, css } from "lit";
import "./shadow-tree";
import "./dynamic-style";
import "./theme-element";
class EstilosLit extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`

  `;
  constructor() {
    super();
    this.header = "My app";
  }
  render() {
    return html`
      <h1>Estilos LitElement</h1>
      <shadow-tree></shadow-tree>
      <dynamic-style></dynamic-style>
      <theme-element></theme-element>
      <theme-element hidden></theme-element>
      <theme-element class="warning"></theme-element>
    `;
  }
}
customElements.define("estilos-lit", EstilosLit);
