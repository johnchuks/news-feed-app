import React from 'react';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import Signout from './Header.jsx';


export default class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      searchString: '',
    };

    this.updateNewsFeed = this.updateNewsFeed.bind(this);
  }

  componentDidMount() {
   ActionSource.getSources();
    FeedStore.on('change', this.updateNewsFeed);
  }

  componentWillUnmount() {
    ActionSource.getSources();
    FeedStore.removeListener('change', this.updateNewsFeed);
  }

  updateNewsFeed() {
      this.setState({ sources: FeedStore.fetchSources() });
  }


  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    const searchString = this.state.searchString.trim().toLowerCase();
    let sources = this.state.sources;


    if (searchString.length > 0) {
      sources = sources.filter(item => item.name.trim().toLowerCase().match(searchString));
    }
    if (typeof (searchString) === 'number') {
      return 'Error Invalid Input';
    }
    const NewsSource = sources.map(item => {
        let sortsArray = item.sortBysAvailable.toString();
        let sortsString = sortsArray.replace(',', '+');
      return <div className= "col m4" >
        <div className="card small grey lighten-4">
          <span className="card-title">{item.name}</span>
          <div className="card-content">
            <p>{item.description}</p>
          </div>
          <div className="card-action">
            <a href={`#/sources/${item.id}/${sortsString}`}>{'Headlines'}</a>
          </div>
        </div>
      </div >

    });
    return (
      <div>
        <Signout />
        <h4>{'News Source'}</h4><br /><br />
        <div className="row">
          <div className="input-field col s12">
            <input
              value={this.state.searchString}
              onChange={this.handleChange.bind(this)} type="text"
              placeholder="Search Source"
            />
          </div>
        </div>
        <br /><br /><br />
        <div className="container">
          <div className="row">
            {NewsSource}
            </div>
        </div>
      </div>
    )
  }
}
