import MOCK_DATA from '../../MOCK_DATA.json';

class DesignComponent {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    return `
    <h3 class='main-subject'>디자인</h3>
    ${this.jsonRender()}
    `
  }

  jsonRender() {
    const jsonDataList = MOCK_DATA;
    let result = '';

    jsonDataList.reduce((acc, { title, content, date }) => {
      acc += `
        <a id="main-container">
          <img class="logo-img" src="./src/img/content1.png" alt="컨텐츠 이미지">
          <div>
            ${this.totalComponent(title, content, date)}
          </div>
        </a>    
        `;

      result = acc;
      return acc;
    }, '');
    return result;
  }

  totalComponent(title, content, date) {
    return `
        ${this.titleComponent(title)}
        ${this.contentComponent(content)}
        ${this.dateComponent(date)}
    `;
  }

  titleComponent(title) {
    return `
        <h4 class="txt-title">${title}</h4>
    `;
  }

  contentComponent(content) {
    return `
      <span class="txt-content">
        ${content}
      </span>      
    `;
  }

  Unix_timestamp(t) {
    let date = new Date(t * 1000);
    let year = date.getFullYear();
    let month = '0' + (date.getMonth() + 1);
    let day = '0' + date.getDate();

    return year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' ';
  }

  dateComponent(date) {
    return `
      <span class="txt-date">${this.Unix_timestamp(date)}</span>
    `;
  }
}

export default DesignComponent;
