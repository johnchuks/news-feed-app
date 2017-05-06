import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class Login extends React.Component {
	constructor (props, context) {
    super(props, context);
  }
  responseGoogle (googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)... 
  }

  render() {	
  return (
			<div>
			<GoogleLogin socialId="116314004036-ogkinrg0ms586tvar5c56dam8a8gfrcn.apps.googleusercontent.com"
                     class="google-login"
                     scope="profile"
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google" onClick={window.location.href = '#/sources'}/>
			</div>

		);
	}
}