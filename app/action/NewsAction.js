import Dispatcher from "../dispatcher/dispatcher";
import * as api from '../components/Api';

export function getSources() {
	api.getNewsFeed((sources) => {
		Dispatcher.dispatch ({
			type:'GET_SOURCES',
		    sources,
		})
	})
}

export function newsHeadlines (source, sortBy) {
	api.getHeadlines((articles) => {
		Dispatcher.dispatch ({
			type:'GET_ARTICLES',
		    data: articles
		})
		console.log('app',sources);
	})

}

