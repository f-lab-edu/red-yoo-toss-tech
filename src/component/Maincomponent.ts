import MOCK_DATA from '../../TECH_MOCK_DATA.json';

interface Article {
  title: string;
  summary: string;
  date: string;
  id: number;
}

class MainComponent {
  private $container: Element;

  constructor($container: Element) {
    this.$container = $container;
  }

  render() {
    return `
    <h3 class='main-subject'>개발</h3>
    ${this.jsonRender()}
    `;
  }

  jsonRender() {
    const jsonDataList = MOCK_DATA;
    let result = '';

    jsonDataList.reduce((acc, { title, summary, date, id }) => {
      acc += `
        <a id="main-container" href='/article/${id}'>
          <img class="logo-img" src="./src/img/content1.png" alt="컨텐츠 이미지" data-link>
          <div>
            ${this.totalComponent(title, summary, date)}
          </div>
        </a>    
        `;

      result = acc;
      return acc;
    }, '');
    return result;
  }

  totalComponent(title: string, summary: string, date: string): string {
    return `
        ${this.titleComponent(title)}
        ${this.contentComponent(summary)}
        ${this.dateComponent(date)}
    `;
  }

  titleComponent(title: string): string {
    return `
        <h4 class="txt-title">${title}</h4>
    `;
  }

  contentComponent(summary: string): string {
    return `
      <span class="txt-content">
        ${summary}
      </span>      
    `;
  }

  Unix_timestamp(t: any): string {
    let date = new Date(t * 1000);
    let year = date.getFullYear();
    let month = '0' + (date.getMonth() + 1);
    let day = '0' + date.getDate();

    return year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' ';
  }

  dateComponent(date: string) {
    return `
      <span class="txt-date">${this.Unix_timestamp(date)}</span>
    `;
  }
}

export default MainComponent;
