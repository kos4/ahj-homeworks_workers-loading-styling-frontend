import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
import News from './News';

export default class Data {
  constructor() {
    this.host = 'https://ahj-homeworks-workers-loading-styling.onrender.com';
  }

  getNews(container) {
    const news = new News(container);
    const obs$ = this.createRequest('/', container);
    obs$.subscribe({
      next: (response) => news.renderNews(response.news),
      error: (err) => console.log(err),
    });
  }

  createRequest(url, container) {
    return ajax({
      url: this.host + url,
      crossDomain: true,
    }).pipe(
      map((ajaxResponse) => ajaxResponse.response),
      catchError((error) => {
        console.log('error: ', error);
        const news = new News(container);
        news.offline();
        return of([]);
      }),
    );
  }
}
