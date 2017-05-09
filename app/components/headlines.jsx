import React from 'react';
import * as api from './Api';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: this.props.match.params.source,
      sortBy: this.props.match.params.sortBy,
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
    //this.sortByAvailable = this.sortByAvailable.bind(this);
  }

  componentDidMount() {
    ActionSource.newsHeadlines(this.state.sourceId, this.state.sortBy);
    FeedStore.on('change', this.updateArticles);
  }

  componentWillUnMount() {
    FeedStore.removeListener('change', this.updateArticles);
  }

  updateArticles() {
    this.setState({
      articles: FeedStore.fetchArticles(this.state.sourceId, this.state.sortBy),
    });
    console.log('art', this.state.articles);
    // let url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&sortBy=${this.state.sortBy}&apiKey=213327409d384371851777e7c7f78dfe`;
    //  axios.get(url)
    //    .then((res) => {
    //     console.log('art',res.data.articles);
    //     this.setState({articles:res.data.articles});
    //   }).catch('error');
  }
  // sortByAvailable() {
  //   const sortBy = this.state.sortBy;
  //   for (let i = 0; i < sortBy.length; i++) {
  //     if (sortBy[i] === 'Latest') {
  //       ActionSource.newsHeadlines(this.state.sourceId, sortBy[i]);
  //       FeedStore.on('change', this.updateArticles);
  //     }
  //   }
  // }
  render() {
    console.log('lib', this.props.match.params);
    const style = {
      height: '300px',
      width: '400px',
      display: 'block',
    };
    const style2 = {
      fontSize: 20,
      margin: 'auto',
    };
    const style3 = {
      margin: 20,
    };
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="News Central"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <br />
          <br />
          <h1>{'Top Stories'}</h1>
        {/*<RaisedButton type='primary' label='sort by latest' onClick={this.sortByAvailable} />*/}
          { this.state.articles.map((item, index) => {
            return (
              <Card>
                <CardText style={style3} key={index}><a href={item.url} target={'#'} style={style2}>{item.title}</a>
                <br /><img src={item.urlToImage} alt={item.title} style={style}></img><br /><p>{item.description}</p>
                  <br />{'Published at:  '}{item.publishedAt}</CardText>    
              </Card>
           ); 
          })}; 
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Headlines;
