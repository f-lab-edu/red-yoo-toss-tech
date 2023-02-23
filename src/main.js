import { navComponent } from "./component/NavComponent.js";
import { mainComponent } from "./component/MainComponent.js";
import { footerComponent } from "./component/FooterComponent.js";

document.querySelector('#app').innerHTML += `
    ${navComponent}
    ${mainComponent}
    ${footerComponent}
`
