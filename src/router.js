import DesignComponent from './component/DesignComponent';
import MainComponent from './component/MainComponent';
import ArticleComponent from './component/ArticleComponent';
import NotFound from './component/NotFound';

const $main = document.querySelector('.main');

const navigateTo = (url) => {
  history.pushState(null, '', url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: MainComponent },
    { path: '/design', view: DesignComponent },
    { path: '/article', view: ArticleComponent },
    { path: '/404', view: NotFound },
  ];

  const matches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  console.log(matches);

  let match = matches.find((v) => v.isMatch);
  console.log(match);

  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }
  const view = new match.route.view();
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
