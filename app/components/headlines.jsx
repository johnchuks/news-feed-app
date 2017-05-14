import React from 'react';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import Signout from './Header.jsx';
import Previous from './Previous.jsx';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: props.match.params.source,
      sortBy: props.match.params.sortBy,
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
    this.updateSortByAvailables = this.updateSortByAvailables.bind(this);
  }

  componentWillMount() {
    ActionSource.newsHeadlines(this.state.sourceId, '');
    FeedStore.on('change', this.updateArticles);
  }

  componentWillUnmount() {
    ActionSource.newsHeadlines(this.state.sourceId, '');
    FeedStore.removeListener('change', this.updateArticles);
  }

  updateArticles() {
      this.setState({
        articles: FeedStore.fetchArticles(),
      });
  }

  updateSortByAvailables(e) {
    const sortStatus = e.target.value;
    if (sortStatus === 'top') {
      ActionSource.newsHeadlines(this.state.sourceId, sortStatus);
      FeedStore.on('change', this.updateArticles);
    } else if (sortStatus === 'latest') {
      ActionSource.newsHeadlines(this.state.sourceId, sortStatus);
      FeedStore.on('change', this.updateArticles);
    }

    e.preventDefault();
  }
  render() {
    const buttonStyle = {
      marginRight: 20,

    };
    const headerStyle = {
      marginLeft: 450
    };
    const buttonAlign = {
      marginRight: '50px',
      marginLeft: '35px',
    };
    const sourceName = this.state.sourceId;
    let newsName = sourceName.toUpperCase().replace('-', ' ');
    const links = this.state.sortBy.split('+').map(link => (
      <button id='sort' className="btn waves-effect waves-light" value={link}
        onClick={this.updateSortByAvailables} style={buttonStyle}
      >{link}</button>
    ));
    const articles = this.state.articles;

    return (
      <div>
        <Signout />

        <br /><h4 style={headerStyle}>{'News from '}{newsName}</h4>
        <br /> <br />
        <div className='container'>
          <div className="row">
            <div className="col m4">
              <Previous /></div>
            <div className="col m4" style={buttonAlign}>
              {links}</div>
          </div>
          </div>

        <div className="container">
          <div className="row">
            {this.state.articles.map((item) => (
              <div className="col m6">
                <div className="card small grey lighten-4">
                  <div className="card-image">
                    <img src={item.urlToImage} alt={item.title} />
                    <span className="card-title">{item.title}</span>
                  </div>
                  <div className="card-content">
                    <p>{item.description}</p><br />{'Published at:  '}{item.publishedAt}
                  </div>
                  <div className="card-action">
                    <a href={item.url} target={'#'}>{'Read More'}</a>
                  </div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </div>
    )
  }
}

export default Headlines;
