import NavComponent from "./component/NavComponent.js";
import FooterComponent from './component/FooterComponent.js'
import MainComponent from "./component/MainComponent.js";

window.addEventListener('DOMContentLoaded', (e) => {
    new NavComponent(document.querySelector('#app'))
    new MainComponent(document.querySelector('#app'))
    new FooterComponent(document.querySelector('#app'))
})
