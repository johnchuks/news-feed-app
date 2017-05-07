import React from 'react';
import * as api from './Api';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Headlines extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      sourceId: this.props.match.params.source,
      sortBy: this.props.match.params.sortBy,
      articles:[]
    };
    this.updateArticles = this.updateArticles.bind(this);
  }

  componentWillMount() {
    this.updateArticles();
  }

  componentWillUnMount() {
    this.updateArticles();
  }

  updateNews() {
    let url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&sortBy=${this.state.sortBy}&apiKey=213327409d384371851777e7c7f78dfe`;
     axios.get(url)
       .then((res) => { 
        console.log('art',res.data.articles);
        this.setState({articles:res.data.articles}); 
      }).catch('error');

  }
  render() {
  console.log('lib',this.state.sourceId);
  const style = {
      height:'300px',
      width: '400px',
      display:'block',
    };
    const style2 = {
      fontSize:20,
      margin: 'auto'
    };
    const style3= {
      margin: 20
    }
    return (
      <MuiThemeProvider> 
       <div>
       <h1>{'Top Stories'}</h1>
      { this.state.articles.map((item, index) => {
             return (
               <Card>
                 <CardText style={style3} key ={index}><a href={item.url} target={'#'} style={style2}>{item.title}</a><br/><img src={item.urlToImage} style={style}></img><br/><p>{item.description}</p><br/>{'Published at:  '}{item.publishedAt}</CardText>    
               </Card>
             ); 
      })}; 
      </div>
     </MuiThemeProvider>
     )
  }
}

export default Headlines;


