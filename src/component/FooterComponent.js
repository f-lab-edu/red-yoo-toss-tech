class FooterComponent {
    constructor($container) {
        this.$container = $container;

        this.render = () => {
            this.$container.innerHTML += `
        <footer>
          <div class='footer-container'>
              <div class='footer-links-list'>
                  <ul class='footer-links'>
                      <li>토스테크</li>    
                      <li>
                          <a href="#">의견 보내기</a>
                      </li>    
                  </ul>
                  <ul class='footer-links'>
                      <li>토스</li>    
                      <li>
                          <a href="#">홈페이지</a>
                      </li>
                      <li>
                          <a href="#">회사 소개</a>
                      </li>
                      <li>
                          <a href="#">채용</a>
                      </li>    
                  </ul>
                  <ul class='footer-links'>
                      <li>고객센터</li>    
                      <li>
                          <a>의견 보내기</a>
                      </li>
                      <li>
                          <a href="#">전화: 1599-4905 (24시간 연중무휴)</a>
                      </li>
                      <li>
                          <a href="#">이메일: support@toss.im</a>
                      </li>
                      <li>
                          <a href="#">카카오톡: @toss</a>
                      </li>
                  </ul>
              </div>
              <address class='footer-address'>
                  <p>㈜비바리퍼블리카</p>
                  Copyright © Viva Republica, Inc. All Rights Reserved.
              </address>
              <ul class="footer-social-links">
                  <li class='footer-social-item'>
                      <a href='#'>
                          <img src="./src/img/icon-facebook.svg"/>
                      </a>
                  </li>
                  <li class='footer-social-item'>
                      <a href='#'>
                          <img src="./src/img/icon-blog.svg"/>
                      </a>
                  </li>
                  <li class='footer-social-item'>
                      <a href='#'>
                          <img src="./src/img/icon-naver.svg"/>
                      </a>
                  </li>
                  <li class='footer-social-item'>
                      <a href='#'>
                          <img src="./src/img/icon-twitter.svg"/>
                      </a>
                  </li>
                  <li class='footer-social-item'>
                      <a href='#'>
                          <img src="./src/img/icon-instagram.svg"/>
                      </a>
                  </li>
              </ul>
          </div>
        </footer>
      `;
        };

        this.render();
    }
}

export default FooterComponent
