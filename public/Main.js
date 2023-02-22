import { navComponent } from "./component/NavComponent.js";
import { footerComponent } from "./component/FooterComponent.js";

document.querySelector('#app').innerHTML += `
    ${navComponent}
    ${footerComponent}
`
