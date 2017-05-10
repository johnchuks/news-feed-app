import React from 'react';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import SignInOut from './Header.jsx';


const style = {
  margin: 17,
};

export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      searchString: '',
    };

    this.updateNewsFeed = this.updateNewsFeed.bind(this);
    this.updateLogout = this.updateLogout.bind(this);
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

  updateLogout () {
    localStorage.removeItem(localStorage.username);
    localStorage.removeItem(localStorage.email);
  }

  render() {
    const searchString = this.state.searchString.trim().toLowerCase();
    let sources = this.state.sources;

    if (searchString.length > 0) {
      sources = sources.filter((item) => {
        return item.name.trim().toLowerCase().match(searchString);
      });
    }
    if (typeof (searchString) === 'number') {
      return 'Error Invalid Input';
    }     
    const style2 = {
      textAlign: 'center',
    };

    return (
      <div>
      <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">News Central</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#" onClick={this.updateLogout}>Logout</a></li>
          </ul>
          </div>
      </nav>
      </div>
         <div>
           <br /><br /><h2>{'View News Sources'}</h2><br /><br />
           <div class="row">
              <div class="input-field col s12">
                 <input value={this.state.searchString}  onChange={this.handleChange.bind(this)} type="text" placeholder = 'Search Source' />
            </div>
          </div>
          <br/><br/><br/>
           { sources.map((item, index) => {
             return (   
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
             );
           })};
        </div>
       </div> 
    );  
  }
}