import React from 'react';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Link  from 'react-router';


export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      searchString: ' ' 
    };

    this.updateNewsFeed = this.updateNewsFeed.bind(this);
    //this.getArticles = this.getArticles.bind(this);
    //this.handleEventChange=this.handleEventChange.bind(this);
  }

  componentWillMount() {
    ActionSource.getSources();
    FeedStore.on("change", this.updateNewsFeed);
  }

  componentWillUnMount() {
    FeedStore.removeListener("change", this.updateNewsFeed);
  }

  updateNewsFeed() {
    this.setState({ sources:FeedStore.fetchSources() });
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value });
    console.log(this.state.searchString);
  }

  render() {
    const searchString = this.state.searchString.trim().toLowerCase();
    let sources = this.state.sources;


    if (searchString.length > 0) {
      sources = sources.filter((item) => {
        return item.name.trim().toLowerCase().match(searchString);
      });
     }
    console.log(sources);
    return (
        //<a href="#/sources/cnn"> Link to CNN </a> 
       <MuiThemeProvider>
         <div>
         <TextField type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)}  hintText="Search sources"/> <br/>
           { sources.map((item, index) => {
             return (
               <Card>
                 <CardText key ={index}><a href={`#/sources/${item.id}/${item.sortBysAvailable[0]}`}>{item.id}</a>{item.name}</CardText>    
               </Card>
             );
           })};
        </div>
       </MuiThemeProvider>  
    );  
  }
}