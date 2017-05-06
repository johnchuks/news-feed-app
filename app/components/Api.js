import axios from 'axios';

const sourceLibraries = [];


export function getNewsFeed(callback) {
     const encodedURI = 'https://newsapi.org/v1/sources?language=en';
	 return axios.get(encodedURI)
	  .then((res) => {
	  	return callback(res.data.sources);
	  });
}

//console.log('lib', sourceLibraries);
export function getHeadLines(source, callback) {
	    const url = "https://newsapi.org/v1/articles?source="+source+"&apiKey=213327409d384371851777e7c7f78dfe";
        axios.get(url)
     	   .then((res) => { 
     		  return callback(res.data.articles);
     	console.log('lib',res.data.articles);
     	});
}