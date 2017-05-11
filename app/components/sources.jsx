import React from 'react';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import Signout from './Header.jsx';


export default class Sources extends React.Component {
  constructor() {
    super();
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

  componentWillUnMount() {
    FeedStore.removeListener('change', this.updateNewsFeed);
  }

  updateNewsFeed() {
    this.setState({ sources: FeedStore.fetchSources() });
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value });
    console.log(this.state.searchString);
  }

  render() {
    const searchString = this.state.searchString.trim().toLowerCase();
    let sources = this.state.sources;

    if (searchString.length > 0) {
      sources = sources.filter((item) => item.name.trim().toLowerCase().match(searchString));
    }
    if (typeof (searchString) === 'number') {
      return 'Error Invalid Input';
    }
    const style2 = {
      textAlign: 'center',
    };

    return (
      <div>
        <Signout />
           <h4>{'News Source'}</h4><br /><br />
           <div className="row">
             <div className="input-field col s12">
                <input value={this.state.searchString} onChange={this.handleChange.bind(this)} type="text" placeholder ="Search Source" />
              </div>
           </div>
           <br  /><br  /><br  />
           { sources.map((item, index) => (
                <div className ='row'>
                  <div className = 'col m12 s7'>
                     <div className ='card'>
                         <span className='card-title'>{item.name}</span>
                         <div className='card-content'>
                           <p>{item.description}</p>
                        </div>
                        <div className='card-action'>
                       <a href={`#/sources/${item.id}/${item.sortBysAvailable}`}>{'Headlines'}</a>
                      </div>
                    </div>
                </div>
            </div>
             ))};
        </div>

    );
  }
}
