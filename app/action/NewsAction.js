import Dispatcher from '../dispatcher/dispatcher';
import * as api from '../components/Api';

export function getSources() {
  api.getNewsFeed().then( (result) => {
    Dispatcher.dispatch({
      type: 'GET_SOURCES',
      data: result,
    });
    console.log('action', result);
  });
}

export function newsHeadlines(source, sortBy) {
  api.getHeadLines(source, sortBy).then((articles) => {
    Dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data: articles,
    });
  });
}

