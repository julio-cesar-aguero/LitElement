import { LitElement, html, css } from "lit";
import "./components/eit-counter";
class LitElementMain extends LitElement {
  render() {
    return html`
      <h1>Lit Element</h1>
      <eit-counter counter="10"></eit-counter> 
      <eit-counter counter="0"></eit-counter> 
      `;
      
  }
}

customElements.define("lit-element", LitElementMain);
