import { LitElement, html, css } from "lit";
import './color-list.js'
const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class TemplateBind extends LitElement {
  static properties = {
    header: { type: String },
    prop1: { type: String },
    prop2: { type: String },
    prop3: { type: Boolean },
    prop4: { type: String },
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--template-bind-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = "My app";
    this.prop1 = 'text binding';
    this.prop2 = 'mydiv';
    this.prop3 = true;
    this.prop4 = 'pie';
  }

  render() {
    return html`
      <!-- text binding -->
      <div>${this.prop1}</div>
      <!-- attribute binding -->
      <div id=${this.prop2}></div>
      <!-- boolean binding -->
      <div>
      Boolean attribute binding
      <input type="text" ?disabled="${this.prop3}" />
      </div>
      <!-- property binding -->
      <div>
      property binding
      <input type="text" .value="${this.prop4}" />
      </div>
      <!-- event handler binding -->
      <div>
      event handler binding
      <button @click="${this.clickHandler}">click</button>
      </div>
      <color-list></color-list>
    `;
  }
  clickHandler(e){
    console.log(e.target)
  }
}

customElements.define("template-bind", TemplateBind);
