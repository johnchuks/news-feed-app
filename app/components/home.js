import React from 'react';
import GoogleLogin from 'react-google-login';
import { HashRouter as Router , hashHistory } from 'react-router-dom';
import Sources from './sources';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export default class Login extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
   		res: null,
   	};
   	this.responseGoogle = this.responseGoogle.bind(this);
   }
  responseGoogle(response) {
  	this.setState ({res:response})
    console.log(response);
  }
 
   render () {
   	return (
     <MuiThemeProvider>
	  <div>
   	   <AppBar
            title="News Central"
             iconClassNameRight="muidocs-icon-navigation-expand-more" iconElementRight={
   	     <GoogleLogin
    		clientId='116314004036-ogkinrg0ms586tvar5c56dam8a8gfrcn.apps.googleusercontent.com'
    		buttonText="Sign In With Google"
    		onSuccess={this.responseGoogle}
    		onFailure={this.responseGoogle}
  		/>
			 }></AppBar>
			 </div>
	</MuiThemeProvider>
   	)

   }
}
  