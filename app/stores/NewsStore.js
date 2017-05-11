import { EventEmitter } from 'events';
//import * as action from '../action/NewsAction';
import Dispatcher from '../dispatcher/dispatcher';

class FeedStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.articles = [];
  }

  fetchSources() {
    return this.sources;
  }

  fetchArticles() {
    return this.articles;
  }

  handleAction(action) {
    switch (action.type) {
      case 'GET_SOURCES': {
        this.sources = action.data;
        console.log('hit', this.sources);
        this.emit('change');
        break;
      }
      case 'GET_ARTICLES': {
        this.articles = action.data;
        console.log('fetch', this.action);
        this.emit('change');
        break;
      }
    }
  }
}
const feedstore = new FeedStore();

Dispatcher.register(feedstore.handleAction.bind(feedstore));

export default feedstore;
