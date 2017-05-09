import axios from 'axios';

export function getNewsFeed(callback) {
     const encodedURI = 'https://newsapi.org/v1/sources';
	 return axios.get(encodedURI)
	  .then((res) => {
		console.log('sources', res.data.sources);
	  	return callback (res.data.sources);
	  });
}
export function getHeadLines(source, sortBy, callback) {
	    const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=213327409d384371851777e7c7f78dfe`;
        axios.get(url)
     	   .then((res) => { 
			console.log('lib', res.data.articles);
     		  return callback(res.data.articles);
     	
     	});
}