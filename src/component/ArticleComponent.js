class ArticleComponent {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    const { title, date, author, job, content } = this.$container;
    return `
      <div class="article-container">
        <div class="article-img">
          <img src='../src/img/content1.png'/>
        </div>
        ${this.totalComponent(title, date, author, job, content)}
      </div>
    `;
  }

  totalComponent(title, date, author, job, content) {
    return `
        ${this.titleComponent(title)}
        ${this.authorComponent(author, job, date)}
        ${this.contentComponent(content)}
    `;
  }

  titleComponent(title) {
    return `
        <h2 class="article-title">${title}</h2>
    `;
  }

  authorComponent(author, job, date) {
    return `
    <div class='author-section'>
      <img src='../src/img/author-img.png'class='author-img'>
      <div>
        <div class='author-info'>
          <h3 class='author'>${author}</h3>
          <h3 class='author'>ㆍ${job}</h3>
        </div>
        <div class="create-date">${this.dateComponent(date)}</div>
      </div>
    </div>
    `;
  }

  contentComponent(content) {
    return `
      <div class="article-content">
        ${content}
      </div>      
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

export default ArticleComponent;
