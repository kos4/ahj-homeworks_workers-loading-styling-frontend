import News from './News';
import Data from './Data';

const container = document.querySelector('.news__container');
const data = new Data();
const news = new News(container);

news.init();
data.getNews(container);
