import React from 'react';
import FeedStore from '../stores/NewsStore';
import * as ActionSource from '../action/NewsAction';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Link  from 'react-router';
import AppBar from 'material-ui/AppBar';


const style = {
  margin:17,
};

export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      searchString: ' ' 
    };

    this.updateNewsFeed = this.updateNewsFeed.bind(this);
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
    if (typeof(searchString) === 'number') {
      return 'Error Invalid Input'
    }
     
     const style2 = {
       textAlign: 'center'
     }
    console.log(sources);
    return (
       <MuiThemeProvider>
         <div>
           <AppBar
            title="News Central"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             /><br/><br/>
         <TextField style={style2} hintText="Search sources" type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} /><br/><br/><br/>
           { sources.map((item, index) => {
             return (
               <Card>
                 <CardText key={item.id} style={style}>{item.name}<br/><br/>{item.description}<br/><br/><RaisedButton primary={true}><a href={`#/sources/${item.id}/${item.sortBysAvailable[0]}`}>{'Headlines'}</a></RaisedButton></CardText>    
               </Card>
             );
           })};
        </div>
       </MuiThemeProvider>  
    );  
  }
}