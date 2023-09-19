import { LitElement } from "lit";

export class MiMensaje extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", (e) => {
      alert("Click en mensaje");
    });
    console.log('constructor: Cuando el elemento es creado');
  }
  static get observedAttributes(){
    return ['msj']
  }
  connectedCallback(){
    console.log('connectedCallback: Cuando el elemento es creado');
  }
  disconnectedCallback(){
    alert('disconnected: Cuando el elemento es eliminado del documento');
  }
  adoptedCallback(){
    alert('adoptedCallback: Cuando el elemento es adoptado por otro documento')
  }
  attributeChangedCallback(attrName, oldVal, newVal){
    console.log('attributeChangedCallback: Cuando cambia un atributo');
    if( attrName === 'msj'){
        this.pintarMensaje(newVal);
    }
  }
  pintarMensaje(msj){
    this.innerHTML = msj;
  }
}
customElements.define('mi-mensaje', MiMensaje);