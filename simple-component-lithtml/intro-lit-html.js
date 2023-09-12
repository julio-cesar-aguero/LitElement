import { html, render } from "./node_modules/lit-html/lit-html.js";

const cadena = ">>>>>>>>Contanido<<<<<<<<<";
const templateHolder = (paramString) => {return html`<h2>Contenido estatico (template) + ${paramString}</h2>`};

const objectTemplateResult = templateHolder(cadena);

render(templateHolder(cadena), document.getElementById(container1));
render(templateHolder("textooooooo"), document.getElementById(container2));
