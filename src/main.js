import NavComponent from './component/NavComponent.js';
import MainComponent from './component/MainComponent.js';
import FooterComponent from './component/FooterComponent.js';
import router from './router.js';

const $app = document.querySelector('#app');
const $nav = document.querySelector('#nav');
const $footer = document.querySelector('#footer');
const nav = new NavComponent($nav);
const main = new MainComponent($app);
const footer = new FooterComponent($app);

window.addEventListener('DOMContentLoaded', () => {
  $nav.innerHTML += `
    ${nav.render()}
    `;
  $footer.innerHTML += `
    ${footer.render()}
    `;
});
router();
