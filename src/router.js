import DesignComponent from './component/DesignComponent';
import MainComponent from './component/MainComponent';
import ArticleComponent from './component/ArticleComponent';
import NotFound from './component/NotFound';
import MOCK_DATA from '../TECH_MOCK_DATA.json';

const $main = document.querySelector('.main');
const pathToRegex = (path) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');
const jsonDataList = MOCK_DATA;

const getDataFromCurrentUrl = () => {
  const { pathname } = location;
  const pageId = pathname.split('/').slice(-1)[0];
  const refinedData = jsonDataList.find((ele) => ele.id === Number(pageId));
  return refinedData;
}

const navigateTo = (url) => {
  history.pushState(null, '', url);
  router(getDataFromCurrentUrl());
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
  const viewComponent = new match.route.view(getDataFromCurrentUrl());

  $main.innerHTML = await viewComponent.render();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.main').addEventListener('click', (e) => {
    window.scrollTo(0, 0);
    const mainContainer = e.target.closest('.main-container');
    if (mainContainer) {
      navigateTo(`/article/${mainContainer.getAttribute('data-link')}`);
    }
  });
});
export default router;
