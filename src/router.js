import DesignComponent from './component/DesignComponent';
import MainComponent from './component/MainComponent';
import ArticleComponent from './component/ArticleComponent';
import NotFound from './component/NotFound';
import MOCK_DATA from '../TECH_MOCK_DATA.json';

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

const jsonDataList = MOCK_DATA;
const { pathname } = location;
const pageId = pathname.split('/').slice(-1)[0];
const refinedData = jsonDataList.find((ele) => ele.id === Number(pageId));

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
  const view = new match.route.view(refinedData);
  $main.innerHTML = await view.render();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#main-container').forEach((ele) => {
    ele.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log(e.currentTarget.getAttribute('data-link'));
      if (e.currentTarget.matches('[data-link]')) {
        navigateTo(`/article/${e.currentTarget.getAttribute('data-link')}`);
      }
    });
  });
});

export default router;
