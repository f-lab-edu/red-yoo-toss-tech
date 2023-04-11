interface jsonData {
  title: string;
  date: string;
  author: string;
  job: string;
  content: string;
}

class ArticleComponent {
  private $container: jsonData;

  constructor($container: jsonData) {
    this.$container = $container;
  }

  public render(): string {
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

  private totalComponent(title: string, date: string, author: string, job: string, content: string) {
    return `
        ${this.titleComponent(title)}
        ${this.authorComponent(author, job, date)}
        ${this.contentComponent(content)}
    `;
  }

  private titleComponent(title: string): string {
    return `
        <h2 class="article-title">${title}</h2>
    `;
  }

  private authorComponent(author: string, job: string, date: string): string {
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

  private contentComponent(content: string): string {
    return `
      <div class="article-content">
        ${content}
      </div>      
    `;
  }

  private Unix_timestamp(t: any): string {
    let date = new Date(t * 1000);
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

export default ArticleComponent;
