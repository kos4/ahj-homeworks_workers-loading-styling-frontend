export default class News {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.update();
  }

  update() {
    const btnUpdate = this.container.querySelector('.news__btn-update');

    btnUpdate.addEventListener('click', () => {
      window.location.reload();
    });
  }

  renderNews(data) {
    if (!Array.isArray(data)) return;

    const container = this.container.querySelector('.news__list');
    container.innerHTML = '';
    data.forEach((item) => {
      container.insertAdjacentHTML('beforeend', News.markupItem(item));
    });
  }

  offline() {
    this.container.insertAdjacentHTML('beforeend', News.markupOffline());
  }

  static markupOffline() {
    return `
      <div class="news__offline">
        <div class="news__offline-text">
          Не удалось загрузить данные.<br>
          Проверьте подключение<br>
          и обновить страницу.
        </div>
      </div>
    `;
  }

  static markupItem(item) {
    return `
      <div class="news__item">
        <div class="news__title">${item.title}</div>
        <div class="news__flex-block">
          <picture class="news__picture">
            <img src="${item.image}" alt="${item.title}" class="news__image">
          </picture>
          <div class="news__announcement">${item.announcement}</div>
        </div>
      </div>
    `;
  }
}
