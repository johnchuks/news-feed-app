import axios from 'axios';

 export function getNewsFeed() {
  const encodedURI = 'https://newsapi.org/v1/sources';
   return axios.get(encodedURI)
    .then(function(res) {
      return res.data.sources;
      console.log('data', res.data.sources);
    });

}
export function getHeadLines(source, sortBy) {
  const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=213327409d384371851777e7c7f78dfe`;
  return axios.get(url)
    .then(res => {return res.data.articles});
}
