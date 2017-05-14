import React from 'react';

export default class Signout extends React.Component {
  constructor(props) {
    super(props);
    this.updateLogout = this.updateLogout.bind(this);
  }

  updateLogout() {
    localStorage.removeItem('userProfile');
    window.location = '/';
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper" >
            <div className="brand-logo center">News Central</div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={this.updateLogout}>Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
