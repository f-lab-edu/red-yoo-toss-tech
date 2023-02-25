class MainComponent {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    this.$container.innerHTML += `
      <a id="main-container">
        <img class="logo-img" src="./src/img/content1.png" alt="컨텐츠 이미지">
        <div>
          <h4 class="txt-title">우리에게는 당연하지만 사용자는 아닌 것들</h4>
          <span class="txt-content">
          사용자 관점에서 본다는 게 엄청난 게 아닌데도, 왠지 엄청난 것으로 개선해야 할 것 같은 느낌이 들 때도 있죠. 그래서 오늘은 사용자 관점을 활용해 개선한 굉장히 가벼운 사례들을 가져와봤어요.
          </span>
          <span class="txt-date">2023. 1. 19</span>
        </div>
      </a>
`;
  };
}

export default MainComponent;
