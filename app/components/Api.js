import axios from 'axios';

export function getNewsFeed(callback) {
  const encodedURI = 'https://newsapi.org/v1/sources';
  return axios.get(encodedURI)
.then(res => callback(res.data.sources));
}
export function getHeadLines(source, sortBy, callback) {
  const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=213327409d384371851777e7c7f78dfe`;
  return axios.get(url)
    .then(res => callback(res.data.articles));
}
