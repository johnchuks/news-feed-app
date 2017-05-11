import Dispatcher from '../dispatcher/dispatcher';
import * as api from '../components/Api';

export function getSources() {
  api.getNewsFeed((sources) => {
    Dispatcher.dispatch({
      type: 'GET_SOURCES',
      data: sources,
    });
  });
	
	//console.log('action', source);
}

export function newsHeadlines(source, sortBy) {
  api.getHeadLines(source, sortBy, (articles) => {
    Dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data: articles,
    });
    console.log('app', articles);
  });
}


