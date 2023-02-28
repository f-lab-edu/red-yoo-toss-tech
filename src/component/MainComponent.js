import MOCK_DATA from '../../MOCK_DATA.json'

class MainComponent {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    const json = JSON.stringify(MOCK_DATA);
    const jsonDataList = JSON.parse(json)

    for(let newArr of jsonDataList) {
      return `
      <a id="main-container">
        <img class="logo-img" src="./src/img/content1.png" alt="컨텐츠 이미지">
        <div>
          <h4 class="txt-title">${newArr.title}</h4>
          <span class="txt-content">
          ${newArr.content}
          </span>
          <span class="txt-date">${newArr.date}</span>
        </div>
      </a>
`;
    }

      
  };
}

export default MainComponent;
