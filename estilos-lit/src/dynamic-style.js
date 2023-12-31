import { LitElement, html, css } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

class DynamicStyle extends LitElement {
  static get properties() {
    return {
      classes: { type: Object },
      styles: { type: Object },
    };
  }
  static get styles() {
    return css`
      .mydiv {
        background-color: blue;
      }
      .someclass {
        border: 1px solid red;
      }
    `;
  }
  constructor() {
    super();
    this.classes = { mydiv: true, someclass: true };
    this.styles = { color: "green", fontFamily: "Roboto" };
  }

  render() {
    return html`
      <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
        <h2>Dynamic Style</h2>
      </div>
    `;
  }
}
customElements.define("dynamic-style", DynamicStyle);
