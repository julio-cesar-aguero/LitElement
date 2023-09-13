import { LitElement, html, css } from "lit";

class ShadowTree extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      * {
        color: red;
      }
      p {
        font-family: sans-serif;
      }
      .myclass {
        margin: 100px;
      }
      #main {
        padding: 30px;
      }
      h1 {
        font-size: 4em;
      }
    `;
  }

  render() {
    return html`
      <h3>Shadow Tree</h3>
      <p>
        lorem ipsum dolor sit, amet consectetur adipisicing elit. voluptatibus
      </p>
      <p class="myclass">Parrafor 1</p>
      <p id="main">Parrafor 2</p>
      <h1>T i t u l o</h1>
    `;
  }
}
customElements.define("shadow-tree", ShadowTree);
