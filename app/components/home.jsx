import React from 'react';
import GoogleLogin from 'react-google-login';

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
    userProfile.idToken = response.googleId;
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      window.location = '#/sources';

  }
  errorGoogle(error) {
    console.log('Oops something went wrong');
  }

  render() {
    const formStyle = {
      align: 'center',
      margin: '0 auto',
      textAlign: 'center',
      marginTop: '150px',
      marginLeft: '450px',
    };
    const headerStyle = {
      marginTop: -45,
    }
    const googleId = '116314004036-ogkinrg0ms586tvar5c56dam8a8gfrcn.apps.googleusercontent.com';
    return (
      <div>
        <div>
          <nav>
            <div className="nav-wrapper">
              <div className="brand-logo center">News Central</div>
              <ul id="nav-mobile" className="left hide-on-med-and-down" />
            </div>
          </nav>
        </div>
        <div className="row" style={formStyle}>
          <div className="col s12 m6">
            <div className="card  red lighten-2">
              <div className="card-content white-text">
                <span className="card-title">Welcome to News Central</span>
                <p>To sign in with google click the Sign in button </p>
                <div className="card-action">
                  <GoogleLogin className="waves-effect waves-light btn"
                    clientId={googleId}
                    onSuccess={this.responseGoogle}
                    onFailure={this.errorGoogle}
                  >{'Sign In With   '}<i className="fa fa-google-plus"></i></GoogleLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
