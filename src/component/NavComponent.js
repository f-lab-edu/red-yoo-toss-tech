class NavComponent {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    return `
    <div class='container'>
      <nav>
        <div class='nav-container'>
          <div class='nav-logo-container'>
            <a class='nav-logo-img' href="/" data-link>
              <img src="../src/img/toss-icon.png" alt="">
              <span class='t-font'>toss</span>
              tech
            </a>
          </div>
          <div class='nav-items-container'>
            <ul class='nav-items-list'>
              <li class='nav-item'><a href="/design" data-link>디자인</a></li>
              <li class='nav-item'><a href="/" data-link>개발</a></li>
              <li class='nav-item nav-item-button'><a>채용 바로가기</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  `;
  }
}

export default NavComponent;
