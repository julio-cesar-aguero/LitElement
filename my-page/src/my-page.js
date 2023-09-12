import { LitElement, html, css } from 'lit';
import './header'
import './principal-template'
import './footer'
class MyPage extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
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
      background-color: var(--my-page-background-color);
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <h1>Hola Mundo</h1>
    <header-template></header-template>
    <br/>
    <principal-template></principal-template>
    <br>
    <footer-template></footer-template>
    `;
  }
}

customElements.define('my-page', MyPage);