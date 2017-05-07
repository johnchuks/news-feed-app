import React from 'react';
import GoogleLogin from 'react-google-login';
import { HashRouter as Router , hashHistory } from 'react-router-dom';
import Sources from './sources';
import { Link } from 'react-router';
import { Navigation } from 'react-bootstrap';

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
   		
   	   <GoogleLogin
    		clientId='116314004036-ogkinrg0ms586tvar5c56dam8a8gfrcn.apps.googleusercontent.com'
    		buttonText="Login"
    		onSuccess={this.responseGoogle}
    		onFailure={this.responseGoogle}
  		/>
   	)

   }
}
  