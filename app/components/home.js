import React from "react";
import GoogleLogin from "react-google-login";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.responseGoogle = this.responseGoogle.bind(this);
  }
  responseGoogle(response) {
    const loginProfile = response.getBasicProfile();
    const userProfile = {};
    userProfile.name = loginProfile.getName();
    userProfile.email = loginProfile.getEmail();
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    window.location = '#/sources';
  }

  render() {
    return (
      <div>
        <div>
          <nav>
            <div className="nav-wrapper">
              <div className="brand-logo center">News Central</div>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
              </ul>
            </div>
          </nav>
        </div>
        <GoogleLogin
          clientId='116314004036-ogkinrg0ms586tvar5c56dam8a8gfrcn.apps.googleusercontent.com'
          buttonText='Sign In With Google'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}
