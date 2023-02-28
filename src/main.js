import NavComponent from './component/NavComponent.js';
import MainComponent from './component/MainComponent.js';
import FooterComponent from './component/FooterComponent.js';

const $app = document.querySelector('#app');
const nav = new NavComponent($app);
const main = new MainComponent($app);
const footer = new FooterComponent($app);

window.addEventListener('DOMContentLoaded', () => {
  $app.innerHTML += `
    ${nav.render()}
    ${main.render()}
    ${footer.render()}
    `;
});
