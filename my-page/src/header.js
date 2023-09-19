import { LitElement, html, css } from "lit";

class Header extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      width: 100vw;
      min-height: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #2a548e;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: pink;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html` <h1>Header template</h1> `;
  }
}

customElements.define("header-template", Header);
