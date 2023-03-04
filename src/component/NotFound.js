class NotFound {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    return `
    <div class='container'>
      <div>
        Not Found
      </div>
    </div>
  `;
  }
}

export default NotFound;
