import React from 'react';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import Signout from './Header.jsx';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: this.props.match.params.source,
      sortBy: this.props.match.params.sortBy,
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
    this.UpdateSortByAvailables = this.UpdateSortByAvailables.bind(this);
  }

  componentDidMount() {
    ActionSource.newsHeadlines(this.state.sourceId, '');
    FeedStore.on('change', this.updateArticles);
  }

  componentWillUnMount() {
    ActionSource.newsHeadlines(this.state.sourceId, '');
    FeedStore.removeListener('change', this.updateArticles);
  }

  updateArticles() {
    this.setState({
      articles: FeedStore.fetchArticles(),
    });
    console.log('art', this.state.articles);
  }

  UpdateSortByAvailables(e) {
    const sortStatus = e.target.value;
    if (sortStatus === 'top') {
      ActionSource.newsHeadlines(this.state.sourceId, sortStatus);
      FeedStore.on('change', this.updateArticles);
    }    else if (sortStatus === 'latest') {
      ActionSource.newsHeadlines(this.state.sourceId, sortStatus);
      FeedStore.on('change', this.updateArticles);
    }
    console.log('button', sortStatus);
    e.preventDefault();
  }
  render() {
    console.log('lib', this.props);
    const headingStyle = {
      marginLeft: '190px',
    };
    const buttonStyle = {
      marginRight: '100px',
      marginLeft: '180px',
      justifyContent: 'space-around',

    };
    const containerStyle = {
      width: '900px',
      height: '400px',
      margin: 'auto',
    };

    const links = this.state.sortBy.split(',').map(link => (
      <button className="btn waves-effect waves-light" value={link} onClick={this.UpdateSortByAvailables} style={buttonStyle}>{link}</button>
    ));
    return (
      <div>
        <Signout />
      <div style={containerStyle}>
         <h1 style={headingStyle}>{this.state.sourceId}{'  Headlines'}</h1><br /><br /><br />
         {links}<br /><br /><br />
         {this.state.articles.map((item, index) => (
            <div className="row">
                <div className= "col m12 s7">
                <div className="card">
                  <div className="card-image">
                  <img src={item.urlToImage} alt={item.title} />
                  <span className="card-title">{item.title}</span>
                </div>
                  <div className= "card-content">
                   <p>{item.description}</p><br />{'Published at:  '}{item.publishedAt}
                 </div>
                  <div className="card-action">
                     <a href={item.url} target={'#'}>{'Read More'}</a>

                   </div>
                </div>
              </div>
              </div>
            ))};
        </div>
        </div>
    );
  }
}

export default Headlines;
