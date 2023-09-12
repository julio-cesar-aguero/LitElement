import { LitElement, html, css } from "lit";

class Footer extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #2a548e;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color:  #b6ffa3;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html` <h1>Footer template</h1> `;
  }
}

customElements.define("footer-template", Footer);
