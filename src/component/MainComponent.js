import MOCK_DATA from '../../MOCK_DATA.json'

class MainComponent {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    const json = JSON.stringify(MOCK_DATA);
    const jsonDataList = JSON.parse(json)
    let makeList = ``
    
      for(let i = 0; i < 14; i++) {
        makeList += `
        <a id="main-container">
          <img class="logo-img" src="./src/img/content1.png" alt="컨텐츠 이미지">
          <div>
            ${this.totalComponent(jsonDataList[i].title, jsonDataList[i].content, jsonDataList[i].date)}
          </div>
        </a>
        `
    }
    return makeList
  };

  totalComponent(title, content, date) {
    return `
        ${this.titleComponent(title)}
        ${this.contentComponent(content)}
        ${this.dateComponent(date)}
    `
  }

  titleComponent(title) {
    return `
        <h4 class="txt-title">${title}</h4>
    `
  }

  contentComponent(content) {
    return `
      <span class="txt-content">
        ${content}
      </span>      
    `
  }

  dateComponent(date) {
    return `
      <span class="txt-date">${date}</span>    
    `
  }
}

export default MainComponent;
