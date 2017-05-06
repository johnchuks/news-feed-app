import React from 'react';
import * as api from './Api';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import axios from 'axios';

class Test extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      sourceId: this.props.match.params.source,
      sortBy: this.props.match.params.sortBy,
      articles:[]
    };
    this.updateNews = this.updateNews.bind(this);
  }

  componentWillMount() {
    this.updateNews();
  }

  componentWillUnMount() {
    this.updateNews();
  }

  updateNews() {
    let url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&sortBy=${this.state.sortBy}&apiKey=213327409d384371851777e7c7f78dfe`;
     axios.get(url)
       .then((res) => { 
        console.log('art',res.data.articles);
        this.setState({articles:res.data.articles}); 
      })

  }
  render() {
  console.log('lib',this.state.sourceId);
    return (
      <div> 
      { this.state.articles.map((item, index) => {
             return (
               <ul>
                 <li key ={index}>{item.description}</li>    
               </ul>
             ); 
      })}; 
     </div>
     )
  }
}

export default Test;


