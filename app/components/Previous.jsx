import React from 'react';

export default class Previous extends React.Component {

  constructor(props) {
    super(props);
    this.updatePrevious = this.updatePrevious.bind(this);
  }
  updatePrevious() {
    window.location = '#/sources';
  }
  render() {
    return (
      <button className="waves-effect waves-light btn" onClick={this.updatePrevious}>Previous<i class="material-icons left"></i></button>
    )
  }
}
