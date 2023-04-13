import MOCK_DATA from '../../TECH_MOCK_DATA.json';

interface JsonData {
  title: string;
  summary: string;
  date: string;
  id: number;
}

class MainComponent {
  private $container: HTMLDivElement;

  constructor($container: HTMLDivElement) {
    this.$container = $container;
  }

  render(): string {
    return `
    <h3 class='main-subject'>개발</h3>
    ${this.jsonRender()}
    `;
  }

  private jsonRender(): string {
    const jsonDataList: JsonData[] = MOCK_DATA;
    let result: string = '';

    jsonDataList.reduce((acc: string, { title, summary, date, id }) => {
      acc += `
        <div class="main-container" data-link='${id}'>
          <img class="logo-img" src="./src/img/content1.png" alt="컨텐츠 이미지">
          <div>
            ${this.totalComponent(title, summary, date)}
          </div>
        </div>
        `;
      result = acc;
      return acc;
    }, '');
    return result;
  }

  private totalComponent(title: string, summary: string, date: string): string {
    return `
        ${this.titleComponent(title)}
        ${this.contentComponent(summary)}
        ${this.dateComponent(date)}
    `;
  }

  private titleComponent(title: string): string {
    return `
        <h4 class="txt-title">${title}</h4>
    `;
  }

  private contentComponent(summary: string): string {
    return `
      <span class="txt-content">
        ${summary}
      </span>      
    `;
  }

  private Unix_timestamp(t: string | number): string {
    let date = new Date(Number(t) * 1000);
    let year = date.getFullYear();
    let month = '0' + (date.getMonth() + 1);
    let day = '0' + date.getDate();

    return year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' ';
  }

  private dateComponent(date: string): string {
    return `
      <span class="txt-date">${this.Unix_timestamp(date)}</span>
    `;
  }
}

export default MainComponent;
