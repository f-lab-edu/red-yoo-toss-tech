import DesignComponent from './component/DesignComponent';
import MainComponent from './component/MainComponent';
import ArticleComponent from './component/ArticleComponent';
import NotFound from './component/NotFound';

const $main = document.querySelector('.main');
const pathToRegex = (path) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    }),
  );
};

const navigateTo = (url) => {
  history.pushState(null, '', url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: MainComponent },
    { path: '/design', view: DesignComponent },
    { path: '/article/:id', view: ArticleComponent },
    { path: '/404', view: NotFound },
  ];

  const matches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = matches.find((matches) => matches.result !== null);

  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }
  const view = new match.route.view(getParams(match));
  $main.innerHTML = await view.render();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
});

export default router;
