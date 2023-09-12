import { LitElement, html, css } from "lit";

class ListElelement extends LitElement {
    static get properties(){
        return{
            items: { type: Array }
        };
    }
    render(){
        return html`
        <ul>
            ${this.items.map(item => html`<li>${item}</li>`)}
        </ul>
        `
    }
}

customElements.define("list-element", ListElelement);
